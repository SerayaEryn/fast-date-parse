'use strict'

const tokenizer = require('./Tokenizer')
const generateFunction = require('generate-function')
const { defaultsAfterTokens, defaultsBeforeTokens } = require('./Defaults')
const { knownTokens, variableNames } = require('./Tokens')

const parser = Symbol('parser')

module.exports = class FastDateParse {
  constructor (dateFormat) {
    this[parser] = generateParser(dateFormat)
  }

  parse (dateString) {
    return this[parser](dateString)
  }
}

function generateParser (dateFormat) {
  const tokens = tokenizer.tokenize(dateFormat)
  const gen = generateFunction()
  gen('function parse (dateString) {')
  generateCodeForTokens(tokens, gen)
  gen('return new Date(year, month, date, hours, minutes, seconds, milliseconds)')
  gen('}')
  return gen.toFunction()
}

function generateCodeForTokens (tokens, gen) {
  let usedTokenCount = 0
  let generatedNow = false
  const tokenCount = Object.keys(tokens).length
  for (const knownToken of knownTokens) {
    if (tokens[knownToken]) {
      generateToken(knownToken, tokens[knownToken], gen)
      usedTokenCount++
    } else if (usedTokenCount < tokenCount) {
      if (!generatedNow) {
        gen('const now = new Date()')
        generatedNow = true
      }
      gen(defaultsBeforeTokens[knownToken])
    } else {
      gen(defaultsAfterTokens[knownToken])
    }
  }
}

function generateToken (token, indices, gen) {
  const { startIndex, endIndex } = indices
  if (variableNames[token]) {
    gen(`const ${variableNames[token]} = Number(dateString.slice(${startIndex}, ${endIndex}))`)
  } else if (token === 'MM') {
    gen(`const month = Number(dateString.slice(${startIndex}, ${endIndex})) - 1`)
  } else {
    throw new Error('Unknown token')
  }
}
