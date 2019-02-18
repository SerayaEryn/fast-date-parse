'use strict'

const { knownTokens } = require('./Tokens')

function tokenize (dateFormat) {
  let token = ''
  let startIndex = 0

  const tokens = {}
  let nextChar = dateFormat.charAt(0)
  for (let index = 0; index < dateFormat.length; index++) {
    const char = nextChar
    nextChar = dateFormat.charAt(index + 1)
    token += char
    if (nextChar !== char) {
      if (isRelevant(token)) {
        tokens[token] = {
          startIndex,
          endIndex: startIndex + token.length
        }
      }
      startIndex = index + 1
      token = ''
    }
  }
  return tokens
}

function isRelevant (token) {
  return knownTokens.includes(token)
}

module.exports = {
  tokenize
}
