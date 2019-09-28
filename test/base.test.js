'use strict'

const test = require('ava')
const DateParser = require('..')
const moment = require('moment')

test('parse 2013 / YYYY', (t) => {
  const dateParser = new DateParser('YYYY')

  const date = dateParser.parse('2013')

  t.is(date.getFullYear(), 2013)
  t.is(date.getMonth(), 0)
  t.is(date.getDate(), 1)
  t.is(date.getHours(), 0)
  t.is(date.getMinutes(), 0)
  t.is(date.getSeconds(), 0)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('2013', 'YYYY').year())
  t.is(date.getMonth(), moment('2013', 'YYYY').month())
  t.is(date.getDate(), moment('2013', 'YYYY').date())
  t.is(date.getHours(), moment('2013', 'YYYY').hour())
  t.is(date.getMinutes(), moment('2013', 'YYYY').minutes())
  t.is(date.getSeconds(), moment('2013', 'YYYY').seconds())
  t.is(date.getMilliseconds(), moment('2013', 'YYYY').milliseconds())
})

test('parse 11 / MM', (t) => {
  t.plan(14)
  const dateParser = new DateParser('MM')

  const date = dateParser.parse('11')

  t.is(date.getFullYear(), new Date().getFullYear())
  t.is(date.getMonth(), 10)
  t.is(date.getDate(), 1)
  t.is(date.getHours(), 0)
  t.is(date.getMinutes(), 0)
  t.is(date.getSeconds(), 0)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('11', 'MM').year())
  t.is(date.getMonth(), moment('11', 'MM').month())
  t.is(date.getDate(), moment('11', 'MM').date())
  t.is(date.getHours(), moment('11', 'MM').hour())
  t.is(date.getMinutes(), moment('11', 'MM').minutes())
  t.is(date.getSeconds(), moment('11', 'MM').seconds())
  t.is(date.getMilliseconds(), moment('11', 'MM').milliseconds())
})

test('parse 11 / DD', (t) => {
  const dateParser = new DateParser('DD')

  const date = dateParser.parse('11')

  t.is(date.getFullYear(), new Date().getFullYear())
  t.is(date.getMonth(), new Date().getMonth())
  t.is(date.getDate(), 11)
  t.is(date.getHours(), 0)
  t.is(date.getMinutes(), 0)
  t.is(date.getSeconds(), 0)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('11', 'DD').year())
  t.is(date.getMonth(), moment('11', 'DD').month())
  t.is(date.getDate(), moment('11', 'DD').date())
  t.is(date.getHours(), moment('11', 'DD').hour())
  t.is(date.getMinutes(), moment('11', 'DD').minutes())
  t.is(date.getSeconds(), moment('11', 'DD').seconds())
  t.is(date.getMilliseconds(), moment('11', 'DD').milliseconds())
})

test('parse 11 / HH', (t) => {
  const dateParser = new DateParser('HH')

  const date = dateParser.parse('11')

  t.is(date.getFullYear(), new Date().getFullYear())
  t.is(date.getMonth(), new Date().getMonth())
  t.is(date.getDate(), new Date().getDate())
  t.is(date.getHours(), 11)
  t.is(date.getMinutes(), 0)
  t.is(date.getSeconds(), 0)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('11', 'HH').year())
  t.is(date.getMonth(), moment('11', 'HH').month())
  t.is(date.getDate(), moment('11', 'HH').date())
  t.is(date.getHours(), moment('11', 'HH').hour())
  t.is(date.getMinutes(), moment('11', 'HH').minutes())
  t.is(date.getSeconds(), moment('11', 'HH').seconds())
  t.is(date.getMilliseconds(), moment('11', 'HH').milliseconds())
})

test('parse 11 / mm', (t) => {
  const dateParser = new DateParser('mm')

  const date = dateParser.parse('11')

  t.is(date.getFullYear(), new Date().getFullYear())
  t.is(date.getMonth(), new Date().getMonth())
  t.is(date.getDate(), new Date().getDate())
  t.is(date.getHours(), 0)
  t.is(date.getMinutes(), 11)
  t.is(date.getSeconds(), 0)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('11', 'mm').year())
  t.is(date.getMonth(), moment('11', 'mm').month())
  t.is(date.getDate(), moment('11', 'mm').date())
  t.is(date.getHours(), moment('11', 'mm').hours())
  t.is(date.getMinutes(), moment('11', 'mm').minutes())
  t.is(date.getSeconds(), moment('11', 'mm').seconds())
  t.is(date.getMilliseconds(), moment('11', 'mm').milliseconds())
})

test('parse 11 / ss', (t) => {
  t.plan(14)

  const dateParser = new DateParser('ss')

  const date = dateParser.parse('11')

  t.is(date.getFullYear(), new Date().getFullYear())
  t.is(date.getMonth(), new Date().getMonth())
  t.is(date.getDate(), new Date().getDate())
  t.is(date.getHours(), 0)
  t.is(date.getMinutes(), 0)
  t.is(date.getSeconds(), 11)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('11', 'ss').year())
  t.is(date.getMonth(), moment('11', 'ss').month())
  t.is(date.getDate(), moment('11', 'ss').date())
  t.is(date.getHours(), moment('11', 'ss').hours())
  t.is(date.getMinutes(), moment('11', 'ss').minutes())
  t.is(date.getSeconds(), moment('11', 'ss').seconds())
  t.is(date.getMilliseconds(), moment('11', 'ss').milliseconds())
})

test('parse 12-25-1995 / MM-DD-YYYY', (t) => {
  t.plan(14)
  const dateParser = new DateParser('MM-DD-YYYY')

  const date = dateParser.parse('12-25-1995')

  t.is(date.getFullYear(), 1995)
  t.is(date.getMonth(), 11)
  t.is(date.getDate(), 25)
  t.is(date.getHours(), 0)
  t.is(date.getMinutes(), 0)
  t.is(date.getSeconds(), 0)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('12-25-1995', 'MM-DD-YYYY').year())
  t.is(date.getMonth(), moment('12-25-1995', 'MM-DD-YYYY').month())
  t.is(date.getDate(), moment('12-25-1995', 'MM-DD-YYYY').date())
  t.is(date.getHours(), moment('12-25-1995', 'MM-DD-YYYY').hours())
  t.is(date.getMinutes(), moment('12-25-1995', 'MM-DD-YYYY').minutes())
  t.is(date.getSeconds(), moment('12-25-1995', 'MM-DD-YYYY').seconds())
  t.is(date.getMilliseconds(), moment('12-25-1995', 'MM-DD-YYYY').milliseconds())
})

test('parse 11:12:13 / HH:mm:ss', (t) => {
  const dateParser = new DateParser('HH:mm:ss')

  const date = dateParser.parse('11:12:13')

  t.is(date.getFullYear(), new Date().getFullYear())
  t.is(date.getMonth(), new Date().getMonth())
  t.is(date.getDate(), new Date().getDate())
  t.is(date.getHours(), 11)
  t.is(date.getMinutes(), 12)
  t.is(date.getSeconds(), 13)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('11:12:13', 'HH:mm:ss').year())
  t.is(date.getMonth(), moment('11:12:13', 'HH:mm:ss').month())
  t.is(date.getDate(), moment('11:12:13', 'HH:mm:ss').date())
  t.is(date.getHours(), moment('11:12:13', 'HH:mm:ss').hour())
  t.is(date.getMinutes(), moment('11:12:13', 'HH:mm:ss').minutes())
  t.is(date.getSeconds(), moment('11:12:13', 'HH:mm:ss').seconds())
  t.is(date.getMilliseconds(), moment('11:12:13', 'HH:mm:ss').milliseconds())
})

test('parse 11:12:13 / ss:mm:HH', (t) => {
  const dateParser = new DateParser('ss:mm:HH')

  const date = dateParser.parse('11:12:13')

  t.is(date.getFullYear(), new Date().getFullYear())
  t.is(date.getMonth(), new Date().getMonth())
  t.is(date.getDate(), new Date().getDate())
  t.is(date.getHours(), 13)
  t.is(date.getMinutes(), 12)
  t.is(date.getSeconds(), 11)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('11:12:13', 'ss:mm:HH').year())
  t.is(date.getMonth(), moment('11:12:13', 'ss:mm:HH').month())
  t.is(date.getDate(), moment('11:12:13', 'ss:mm:HH').date())
  t.is(date.getHours(), moment('11:12:13', 'ss:mm:HH').hours())
  t.is(date.getMinutes(), moment('11:12:13', 'ss:mm:HH').minutes())
  t.is(date.getSeconds(), moment('11:12:13', 'ss:mm:HH').seconds())
  t.is(date.getMilliseconds(), moment('11:12:13', 'ss:mm:HH').milliseconds())
})

test('parse 12-25-1995 11:12:13 / MM-DD-YYYY HH:mm:ss', (t) => {
  const dateParser = new DateParser('MM-DD-YYYY HH:mm:ss')

  const date = dateParser.parse('12-25-1995 11:12:13')

  t.is(date.getFullYear(), 1995)
  t.is(date.getMonth(), 11)
  t.is(date.getDate(), 25)
  t.is(date.getHours(), 11)
  t.is(date.getMinutes(), 12)
  t.is(date.getSeconds(), 13)
  t.is(date.getMilliseconds(), 0)
  t.is(date.getFullYear(), moment('12-25-1995 11:12:13', 'MM-DD-YYYY HH:mm:ss').year())
  t.is(date.getMonth(), moment('12-25-1995 11:12:13', 'MM-DD-YYYY HH:mm:ss').month())
  t.is(date.getDate(), moment('12-25-1995 11:12:13', 'MM-DD-YYYY HH:mm:ss').date())
  t.is(date.getHours(), moment('12-25-1995 11:12:13', 'MM-DD-YYYY HH:mm:ss').hours())
  t.is(date.getMinutes(), moment('12-25-1995 11:12:13', 'MM-DD-YYYY HH:mm:ss').minutes())
  t.is(date.getSeconds(), moment('12-25-1995 11:12:13', 'MM-DD-YYYY HH:mm:ss').seconds())
  t.is(date.getMilliseconds(), moment('12-25-1995 11:12:13', 'MM-DD-YYYY HH:mm:ss').milliseconds())
})
