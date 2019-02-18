'use strict'

const tap = require('tap')
const test = tap.test
const DateParser = require('..')
const moment = require('moment')

test('parse 2013 / YYYY', (t) => {
  t.plan(14)
  const dateParser = new DateParser('YYYY')

  const date = dateParser.parse('2013')

  t.strictEquals(date.getFullYear(), 2013)
  t.strictEquals(date.getMonth(), 0)
  t.strictEquals(date.getDate(), 1)
  t.strictEquals(date.getHours(), 0)
  t.strictEquals(date.getMinutes(), 0)
  t.strictEquals(date.getSeconds(), 0)
  t.strictEquals(date.getMilliseconds(), 0)
  t.strictEquals(date.getFullYear(), moment('2013', 'YYYY').year())
  t.strictEquals(date.getMonth(), moment('2013', 'YYYY').month())
  t.strictEquals(date.getDate(), moment('2013', 'YYYY').date())
  t.strictEquals(date.getHours(), moment('2013', 'YYYY').hour())
  t.strictEquals(date.getMinutes(), moment('2013', 'YYYY').minutes())
  t.strictEquals(date.getSeconds(), moment('2013', 'YYYY').seconds())
  t.strictEquals(date.getMilliseconds(), moment('2013', 'YYYY').milliseconds())
})

test('parse 11 / MM', (t) => {
  t.plan(14)
  const dateParser = new DateParser('MM')

  const date = dateParser.parse('11')

  t.strictEquals(date.getFullYear(), new Date().getFullYear())
  t.strictEquals(date.getMonth(), 10)
  t.strictEquals(date.getDate(), 1)
  t.strictEquals(date.getHours(), 0)
  t.strictEquals(date.getMinutes(), 0)
  t.strictEquals(date.getSeconds(), 0)
  t.strictEquals(date.getMilliseconds(), 0)
  t.strictEquals(date.getFullYear(), moment('11', 'MM').year())
  t.strictEquals(date.getMonth(), moment('11', 'MM').month())
  t.strictEquals(date.getDate(), moment('11', 'MM').date())
  t.strictEquals(date.getHours(), moment('11', 'MM').hour())
  t.strictEquals(date.getMinutes(), moment('11', 'MM').minutes())
  t.strictEquals(date.getSeconds(), moment('11', 'MM').seconds())
  t.strictEquals(date.getMilliseconds(), moment('11', 'MM').milliseconds())
})

test('parse 11 / DD', (t) => {
  t.plan(14)

  const dateParser = new DateParser('DD')

  const date = dateParser.parse('11')

  t.strictEquals(date.getFullYear(), new Date().getFullYear())
  t.strictEquals(date.getMonth(), 1)
  t.strictEquals(date.getDate(), 11)
  t.strictEquals(date.getHours(), 0)
  t.strictEquals(date.getMinutes(), 0)
  t.strictEquals(date.getSeconds(), 0)
  t.strictEquals(date.getMilliseconds(), 0)
  t.strictEquals(date.getFullYear(), moment('11', 'DD').year())
  t.strictEquals(date.getMonth(), moment('11', 'DD').month())
  t.strictEquals(date.getDate(), moment('11', 'DD').date())
  t.strictEquals(date.getHours(), moment('11', 'DD').hour())
  t.strictEquals(date.getMinutes(), moment('11', 'DD').minutes())
  t.strictEquals(date.getSeconds(), moment('11', 'DD').seconds())
  t.strictEquals(date.getMilliseconds(), moment('11', 'DD').milliseconds())
})

test('parse 11 / HH', (t) => {
  t.plan(14)

  const dateParser = new DateParser('HH')

  const date = dateParser.parse('11')

  t.strictEquals(date.getFullYear(), new Date().getFullYear())
  t.strictEquals(date.getMonth(), new Date().getMonth())
  t.strictEquals(date.getDate(), new Date().getDate())
  t.strictEquals(date.getHours(), 11)
  t.strictEquals(date.getMinutes(), 0)
  t.strictEquals(date.getSeconds(), 0)
  t.strictEquals(date.getMilliseconds(), 0)
  t.strictEquals(date.getFullYear(), moment('11', 'HH').year())
  t.strictEquals(date.getMonth(), moment('11', 'HH').month())
  t.strictEquals(date.getDate(), moment('11', 'HH').date())
  t.strictEquals(date.getHours(), moment('11', 'HH').hour())
  t.strictEquals(date.getMinutes(), moment('11', 'HH').minutes())
  t.strictEquals(date.getSeconds(), moment('11', 'HH').seconds())
  t.strictEquals(date.getMilliseconds(), moment('11', 'HH').milliseconds())
})

test('parse 11 / mm', (t) => {
  t.plan(14)

  const dateParser = new DateParser('mm')

  const date = dateParser.parse('11')

  t.strictEquals(date.getFullYear(), new Date().getFullYear())
  t.strictEquals(date.getMonth(), new Date().getMonth())
  t.strictEquals(date.getDate(), new Date().getDate())
  t.strictEquals(date.getHours(), 0)
  t.strictEquals(date.getMinutes(), 11)
  t.strictEquals(date.getSeconds(), 0)
  t.strictEquals(date.getMilliseconds(), 0)
  t.strictEquals(date.getFullYear(), moment('11', 'mm').year())
  t.strictEquals(date.getMonth(), moment('11', 'mm').month())
  t.strictEquals(date.getDate(), moment('11', 'mm').date())
  t.strictEquals(date.getHours(), moment('11', 'mm').hours())
  t.strictEquals(date.getMinutes(), moment('11', 'mm').minutes())
  t.strictEquals(date.getSeconds(), moment('11', 'mm').seconds())
  t.strictEquals(date.getMilliseconds(), moment('11', 'mm').milliseconds())
})

test('parse 11 / ss', (t) => {
  t.plan(14)

  const dateParser = new DateParser('ss')

  const date = dateParser.parse('11')

  t.strictEquals(date.getFullYear(), new Date().getFullYear())
  t.strictEquals(date.getMonth(), new Date().getMonth())
  t.strictEquals(date.getDate(), new Date().getDate())
  t.strictEquals(date.getHours(), 0)
  t.strictEquals(date.getMinutes(), 0)
  t.strictEquals(date.getSeconds(), 11)
  t.strictEquals(date.getMilliseconds(), 0)
  t.strictEquals(date.getFullYear(), moment('11', 'ss').year())
  t.strictEquals(date.getMonth(), moment('11', 'ss').month())
  t.strictEquals(date.getDate(), moment('11', 'ss').date())
  t.strictEquals(date.getHours(), moment('11', 'ss').hours())
  t.strictEquals(date.getMinutes(), moment('11', 'ss').minutes())
  t.strictEquals(date.getSeconds(), moment('11', 'ss').seconds())
  t.strictEquals(date.getMilliseconds(), moment('11', 'ss').milliseconds())
})

test('parse 11:12:13 / HH:mm:ss', (t) => {
  t.plan(14)

  const dateParser = new DateParser('HH:mm:ss')

  const date = dateParser.parse('11:12:13')

  t.strictEquals(date.getFullYear(), new Date().getFullYear())
  t.strictEquals(date.getMonth(), new Date().getMonth())
  t.strictEquals(date.getDate(), new Date().getDate())
  t.strictEquals(date.getHours(), 11)
  t.strictEquals(date.getMinutes(), 12)
  t.strictEquals(date.getSeconds(), 13)
  t.strictEquals(date.getMilliseconds(), 0)
  t.strictEquals(date.getFullYear(), moment('11:12:13', 'HH:mm:ss').year())
  t.strictEquals(date.getMonth(), moment('11:12:13', 'HH:mm:ss').month())
  t.strictEquals(date.getDate(), moment('11:12:13', 'HH:mm:ss').date())
  t.strictEquals(date.getHours(), moment('11:12:13', 'HH:mm:ss').hour())
  t.strictEquals(date.getMinutes(), moment('11:12:13', 'HH:mm:ss').minutes())
  t.strictEquals(date.getSeconds(), moment('11:12:13', 'HH:mm:ss').seconds())
  t.strictEquals(date.getMilliseconds(), moment('11:12:13', 'HH:mm:ss').milliseconds())
})

test('parse 12-25-1995 / MM-DD-YYYY', (t) => {
  t.plan(7)
  const dateParser = new DateParser('MM-DD-YYYY')

  const date = dateParser.parse('12-25-1995')

  t.strictEquals(date.getFullYear(), 1995)
  t.strictEquals(date.getMonth(), 11)
  t.strictEquals(date.getDate(), 25)
  t.strictEquals(date.getHours(), 0)
  t.strictEquals(date.getMinutes(), 0)
  t.strictEquals(date.getSeconds(), 0)
  t.strictEquals(date.getMilliseconds(), 0)
})

test('parse 11:12:13 / HH:mm:ss', (t) => {
  t.plan(7)
  const dateParser = new DateParser('HH:mm:ss')

  const date = dateParser.parse('11:12:13')

  t.strictEquals(date.getFullYear(), new Date().getFullYear())
  t.strictEquals(date.getMonth(), new Date().getMonth())
  t.strictEquals(date.getDate(), new Date().getDate())
  t.strictEquals(date.getHours(), 11)
  t.strictEquals(date.getMinutes(), 12)
  t.strictEquals(date.getSeconds(), 13)
  t.strictEquals(date.getMilliseconds(), 0)
})

test('parse 11:12:13 / ss:mm:HH', (t) => {
  t.plan(7)
  const dateParser = new DateParser('ss:mm:HH')

  const date = dateParser.parse('11:12:13')

  t.strictEquals(date.getFullYear(), new Date().getFullYear())
  t.strictEquals(date.getMonth(), new Date().getMonth())
  t.strictEquals(date.getDate(), new Date().getDate())
  t.strictEquals(date.getHours(), 13)
  t.strictEquals(date.getMinutes(), 12)
  t.strictEquals(date.getSeconds(), 11)
  t.strictEquals(date.getMilliseconds(), 0)
})
