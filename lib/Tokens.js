'use strict'

const knownTokens = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss', 'SSS']
const variableNames = {
  YYYY: 'year',
  DD: 'date',
  HH: 'hours',
  mm: 'minutes',
  ss: 'seconds',
  SSS: 'milliseconds'
}

module.exports = {
  knownTokens,
  variableNames
}
