'use strict'

const defaultsAfterTokens = {
  YYYY: 'const year = 0',
  MM: 'const month = 0',
  DD: 'const date = 1',
  HH: 'const hours = 0',
  mm: 'const minutes = 0',
  ss: 'const seconds = 0',
  SSS: 'const milliseconds = 0'
}
const defaultsBeforeTokens = {
  YYYY: 'const year = now.getFullYear()',
  MM: 'const month = now.getMonth()',
  DD: 'const date = now.getDate()',
  HH: 'const hours = 0',
  mm: 'const minutes = 0',
  ss: 'const seconds = 0',
  SSS: 'const milliseconds = 0'
}

module.exports = {
  defaultsAfterTokens,
  defaultsBeforeTokens
}
