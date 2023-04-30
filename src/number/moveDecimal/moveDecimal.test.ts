import { moveDecimal } from './moveDecimal';

describe('moveDecimal', () => {
  test('`moveDecimal` should move the decimal point to the right', () => {
    const positions = [1, 2, 3, 5, 8, 13];

    [1234.56789, 12345.6789, 123456.789, 12345678.9, 12345678900, 1234567890000000].forEach((expected, index) => {
      expect(moveDecimal(123.456789, positions[index])).toBe(expected);
      expect(moveDecimal(-123.456789, positions[index])).toBe(-expected);
    });

    [1.23456789, 12.3456789, 123.456789, 12345.6789, 12345678.9, 1234567890000].forEach((expected, index) => {
      expect(moveDecimal(0.123456789, positions[index])).toBe(expected);
      expect(moveDecimal(-0.123456789, positions[index])).toBe(-expected);
    });

    [0.00000001, 0.0000001, 0.000001, 0.0001, 0.1, 10000].forEach((expected, index) => {
      expect(moveDecimal(0.000000001, positions[index])).toBe(expected);
      expect(moveDecimal(-0.000000001, positions[index])).toBe(-expected);
    });

    [10, 100, 1000, 100000, 100000000, 10000000000000].forEach((expected, index) => {
      expect(moveDecimal(1, positions[index])).toBe(expected);
      expect(moveDecimal(-1, positions[index])).toBe(-expected);
    });
  });

  test('`moveDecimal` should move the decimal point to the left', () => {
    const positions = [-1, -2, -3, -5, -8, -13];

    [12345.6789, 1234.56789, 123.456789, 1.23456789, 0.00123456789, 0.0000000123456789].forEach((expected, index) => {
      expect(moveDecimal(123456.789, positions[index])).toBe(expected);
      expect(moveDecimal(-123456.789, positions[index])).toBe(-expected);
    });

    [98765432.1, 9876543.21, 987654.321, 9876.54321, 9.87654321, 0.0000987654321].forEach((expected, index) => {
      expect(moveDecimal(987654321.0, positions[index])).toBe(expected);
      expect(moveDecimal(-987654321.0, positions[index])).toBe(-expected);
    });

    [0.01, 0.001, 0.0001, 0.000001, 0.000000001, 0.00000000000001].forEach((expected, index) => {
      expect(moveDecimal(0.1, positions[index])).toBe(expected);
      expect(moveDecimal(-0.1, positions[index])).toBe(-expected);
    });

    [100000000, 10000000, 1000000, 10000, 10, 0.0001].forEach((expected, index) => {
      expect(moveDecimal(1000000000, positions[index])).toBe(expected);
      expect(moveDecimal(-1000000000, positions[index])).toBe(-expected);
    });
  });

  test('`moveDecimal` should not move the decimal point when position is 0', () => {
    [123.456789, 0.123456789, 0.000000001, 1, 123456.789, 987654321.0, 0.1, 1000000000].forEach((value) => {
      expect(moveDecimal(value, 0)).toBe(value);
      expect(moveDecimal(-value, 0)).toBe(-value);
    });
  });

  test('`moveDecimal` should handle zero', () => {
    [2, 1, 0, -1, -2].forEach((position) => {
      expect(moveDecimal(0, position)).toBe(0);
    });
  });

  test('`moveDecimal` should handle edge cases', () => {
    [2, 1, 0, -1, -2].forEach((position) => {
      expect(moveDecimal(NaN, position)).toBe(NaN);
      expect(moveDecimal(Infinity, position)).toBe(Infinity);
      expect(moveDecimal(-Infinity, position)).toBe(-Infinity);
    });
  });
});
