'use strict'

const moment = require('moment')
const Benchmark = require('benchmark')
const DateParser = require('..')
const fecha = require('fecha')

const dateParser = new DateParser('MM-DD-YYYY HH:mm:ss SSS')

new Benchmark.Suite()
  .add('moment', () => {
    moment('12-25-1995 12:12:12 666', 'MM-DD-YYYY HH:mm:ss SSS')
  })
  .add('fast-date-parse', () => {
    dateParser.parse('12-25-1995 12:12:12 666')
  })
  .add('fecha', () => {
    fecha.parse('12-25-1995 12:12:12 666', 'MM-DD-YYYY HH:mm:ss SSS')
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ 'async': true })
