import { commafy } from './commafy';

describe('commafy', () => {
  test('commafy should add commas to positive numbers', () => {
    expect(commafy(1)).toBe('1');
    expect(commafy(1000)).toBe('1,000');
    expect(commafy(1234567)).toBe('1,234,567');
    expect(commafy(9876543210)).toBe('9,876,543,210');
  });

  test('commafy should add commas to negative numbers', () => {
    expect(commafy(-1)).toBe('-1');
    expect(commafy(-1000)).toBe('-1,000');
    expect(commafy(-1234567)).toBe('-1,234,567');
    expect(commafy(-9876543210)).toBe('-9,876,543,210');
  });

  test('commafy should handle zero', () => {
    expect(commafy(0)).toBe('0');
  });

  test('commafy should add commas to positive decimal numbers', () => {
    expect(commafy(12.34)).toBe('12.34');
    expect(commafy(1.23456789)).toBe('1.23456789');
    expect(commafy(12345678.9)).toBe('12,345,678.9');
  });

  test('commafy should add commas to negative decimal numbers', () => {
    expect(commafy(-12.34)).toBe('-12.34');
    expect(commafy(-1.23456789)).toBe('-1.23456789');
    expect(commafy(-12345678.9)).toBe('-12,345,678.9');
  });

  test('commafy should return empty string for non-numbers', () => {
    expect(commafy(NaN)).toBe('');
    expect(commafy(Infinity)).toBe('');
    expect(commafy(-Infinity)).toBe('');
  });
});
