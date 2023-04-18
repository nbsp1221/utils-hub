import { addCommas } from './addCommas';

describe('addCommas', () => {
  test('addCommas should add commas to positive numbers', () => {
    expect(addCommas(1)).toBe('1');
    expect(addCommas(1000)).toBe('1,000');
    expect(addCommas(1234567)).toBe('1,234,567');
    expect(addCommas(9876543210)).toBe('9,876,543,210');
  });

  test('addCommas should add commas to negative numbers', () => {
    expect(addCommas(-1)).toBe('-1');
    expect(addCommas(-1000)).toBe('-1,000');
    expect(addCommas(-1234567)).toBe('-1,234,567');
    expect(addCommas(-9876543210)).toBe('-9,876,543,210');
  });

  test('addCommas should handle zero', () => {
    expect(addCommas(0)).toBe('0');
  });

  test('addCommas should add commas to positive decimal numbers', () => {
    expect(addCommas(12.34)).toBe('12.34');
    expect(addCommas(1.23456789)).toBe('1.23456789');
    expect(addCommas(12345678.9)).toBe('12,345,678.9');
  });

  test('addCommas should add commas to negative decimal numbers', () => {
    expect(addCommas(-12.34)).toBe('-12.34');
    expect(addCommas(-1.23456789)).toBe('-1.23456789');
    expect(addCommas(-12345678.9)).toBe('-12,345,678.9');
  });

  test('addCommas should return empty string for non-numbers', () => {
    expect(addCommas(NaN)).toBe('');
    expect(addCommas(Infinity)).toBe('');
    expect(addCommas(-Infinity)).toBe('');
  });
});
