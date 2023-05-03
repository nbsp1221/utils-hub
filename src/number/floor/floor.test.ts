import { floor } from './floor';

describe('floor', () => {
  test('`floor` should floor positive numbers', () => {
    expect(floor(Math.PI, 0)).toBe(3);
    expect(floor(Math.PI, 1)).toBe(3.1);
    expect(floor(Math.PI, 2)).toBe(3.14);
    expect(floor(Math.PI, 3)).toBe(3.141);
    expect(floor(Math.PI, 4)).toBe(3.1415);
    expect(floor(Math.PI, 5)).toBe(3.14159);
    expect(floor(Math.PI, 6)).toBe(3.141592);
    expect(floor(Math.PI, 7)).toBe(3.1415926);
    expect(floor(Math.PI, 8)).toBe(3.14159265);
    expect(floor(Math.PI, 9)).toBe(3.141592653);
    expect(floor(Math.PI, 10)).toBe(3.1415926535);
    expect(floor(Math.PI, 11)).toBe(3.14159265358);
    expect(floor(Math.PI, 12)).toBe(3.141592653589);
    expect(floor(Math.PI, 13)).toBe(3.1415926535897);
    expect(floor(Math.PI, 14)).toBe(3.14159265358979);
    expect(floor(Math.PI, 15)).toBe(Math.PI);

    expect(floor(Math.E, 0)).toBe(2);
    expect(floor(Math.E, 1)).toBe(2.7);
    expect(floor(Math.E, 2)).toBe(2.71);
    expect(floor(Math.E, 3)).toBe(2.718);
    expect(floor(Math.E, 4)).toBe(2.7182);
    expect(floor(Math.E, 5)).toBe(2.71828);
    expect(floor(Math.E, 6)).toBe(2.718281);
    expect(floor(Math.E, 7)).toBe(2.7182818);
    expect(floor(Math.E, 8)).toBe(2.71828182);
    expect(floor(Math.E, 9)).toBe(2.718281828);
    expect(floor(Math.E, 10)).toBe(2.7182818284);
    expect(floor(Math.E, 11)).toBe(2.71828182845);
    expect(floor(Math.E, 12)).toBe(2.718281828459);
    expect(floor(Math.E, 13)).toBe(2.7182818284590);
    expect(floor(Math.E, 14)).toBe(2.71828182845904);
    expect(floor(Math.E, 15)).toBe(Math.E);

    expect(floor(0.000000000000001, 0)).toBe(0);
    expect(floor(0.000000000000001, 1)).toBe(0);
    expect(floor(0.000000000000001, 2)).toBe(0);
    expect(floor(0.000000000000001, 3)).toBe(0);
    expect(floor(0.000000000000001, 4)).toBe(0);
    expect(floor(0.000000000000001, 5)).toBe(0);
    expect(floor(0.000000000000001, 6)).toBe(0);
    expect(floor(0.000000000000001, 7)).toBe(0);
    expect(floor(0.000000000000001, 8)).toBe(0);
    expect(floor(0.000000000000001, 9)).toBe(0);
    expect(floor(0.000000000000001, 10)).toBe(0);
    expect(floor(0.000000000000001, 11)).toBe(0);
    expect(floor(0.000000000000001, 12)).toBe(0);
    expect(floor(0.000000000000001, 13)).toBe(0);
    expect(floor(0.000000000000001, 14)).toBe(0);
    expect(floor(0.000000000000001, 15)).toBe(0.000000000000001);

    expect(floor(9.999999999999999, 0)).toBe(9);
    expect(floor(9.999999999999999, 1)).toBe(9.9);
    expect(floor(9.999999999999999, 2)).toBe(9.99);
    expect(floor(9.999999999999999, 3)).toBe(9.999);
    expect(floor(9.999999999999999, 4)).toBe(9.9999);
    expect(floor(9.999999999999999, 5)).toBe(9.99999);
    expect(floor(9.999999999999999, 6)).toBe(9.999999);
    expect(floor(9.999999999999999, 7)).toBe(9.9999999);
    expect(floor(9.999999999999999, 8)).toBe(9.99999999);
    expect(floor(9.999999999999999, 9)).toBe(9.999999999);
    expect(floor(9.999999999999999, 10)).toBe(9.9999999999);
    expect(floor(9.999999999999999, 11)).toBe(9.99999999999);
    expect(floor(9.999999999999999, 12)).toBe(9.999999999999);
    expect(floor(9.999999999999999, 13)).toBe(9.9999999999999);
    expect(floor(9.999999999999999, 14)).toBe(9.99999999999999);
    expect(floor(9.999999999999999, 15)).toBe(9.999999999999999);

    expect(floor(321.96, 2)).toBe(321.96);
  });

  test('`floor` should floor negative numbers', () => {
    expect(floor(-Math.PI, 0)).toBe(-4);
    expect(floor(-Math.PI, 1)).toBe(-3.2);
    expect(floor(-Math.PI, 2)).toBe(-3.15);
    expect(floor(-Math.PI, 3)).toBe(-3.142);
    expect(floor(-Math.PI, 4)).toBe(-3.1416);
    expect(floor(-Math.PI, 5)).toBe(-3.1416);
    expect(floor(-Math.PI, 6)).toBe(-3.141593);
    expect(floor(-Math.PI, 7)).toBe(-3.1415927);
    expect(floor(-Math.PI, 8)).toBe(-3.14159266);
    expect(floor(-Math.PI, 9)).toBe(-3.141592654);
    expect(floor(-Math.PI, 10)).toBe(-3.1415926536);
    expect(floor(-Math.PI, 11)).toBe(-3.14159265359);
    expect(floor(-Math.PI, 12)).toBe(-3.14159265359);
    expect(floor(-Math.PI, 13)).toBe(-3.1415926535898);
    expect(floor(-Math.PI, 14)).toBe(-3.1415926535898);
    expect(floor(-Math.PI, 15)).toBe(-Math.PI);

    expect(floor(-Math.E, 0)).toBe(-3);
    expect(floor(-Math.E, 1)).toBe(-2.8);
    expect(floor(-Math.E, 2)).toBe(-2.72);
    expect(floor(-Math.E, 3)).toBe(-2.719);
    expect(floor(-Math.E, 4)).toBe(-2.7183);
    expect(floor(-Math.E, 5)).toBe(-2.71829);
    expect(floor(-Math.E, 6)).toBe(-2.718282);
    expect(floor(-Math.E, 7)).toBe(-2.7182819);
    expect(floor(-Math.E, 8)).toBe(-2.71828183);
    expect(floor(-Math.E, 9)).toBe(-2.718281829);
    expect(floor(-Math.E, 10)).toBe(-2.7182818285);
    expect(floor(-Math.E, 11)).toBe(-2.71828182846);
    expect(floor(-Math.E, 12)).toBe(-2.71828182846);
    expect(floor(-Math.E, 13)).toBe(-2.7182818284591);
    expect(floor(-Math.E, 14)).toBe(-2.71828182845905);
    expect(floor(-Math.E, 15)).toBe(-Math.E);

    expect(floor(-0.000000000000001, 0)).toBe(-1);
    expect(floor(-0.000000000000001, 1)).toBe(-0.1);
    expect(floor(-0.000000000000001, 2)).toBe(-0.01);
    expect(floor(-0.000000000000001, 3)).toBe(-0.001);
    expect(floor(-0.000000000000001, 4)).toBe(-0.0001);
    expect(floor(-0.000000000000001, 5)).toBe(-0.00001);
    expect(floor(-0.000000000000001, 6)).toBe(-0.000001);
    expect(floor(-0.000000000000001, 7)).toBe(-0.0000001);
    expect(floor(-0.000000000000001, 8)).toBe(-0.00000001);
    expect(floor(-0.000000000000001, 9)).toBe(-0.000000001);
    expect(floor(-0.000000000000001, 10)).toBe(-0.0000000001);
    expect(floor(-0.000000000000001, 11)).toBe(-0.00000000001);
    expect(floor(-0.000000000000001, 12)).toBe(-0.000000000001);
    expect(floor(-0.000000000000001, 13)).toBe(-0.0000000000001);
    expect(floor(-0.000000000000001, 14)).toBe(-0.00000000000001);
    expect(floor(-0.000000000000001, 15)).toBe(-0.000000000000001);

    expect(floor(-9.999999999999999, 0)).toBe(-10);
    expect(floor(-9.999999999999999, 1)).toBe(-10);
    expect(floor(-9.999999999999999, 2)).toBe(-10);
    expect(floor(-9.999999999999999, 3)).toBe(-10);
    expect(floor(-9.999999999999999, 4)).toBe(-10);
    expect(floor(-9.999999999999999, 5)).toBe(-10);
    expect(floor(-9.999999999999999, 6)).toBe(-10);
    expect(floor(-9.999999999999999, 7)).toBe(-10);
    expect(floor(-9.999999999999999, 8)).toBe(-10);
    expect(floor(-9.999999999999999, 9)).toBe(-10);
    expect(floor(-9.999999999999999, 10)).toBe(-10);
    expect(floor(-9.999999999999999, 11)).toBe(-10);
    expect(floor(-9.999999999999999, 12)).toBe(-10);
    expect(floor(-9.999999999999999, 13)).toBe(-10);
    expect(floor(-9.999999999999999, 14)).toBe(-10);
    expect(floor(-9.999999999999999, 15)).toBe(-9.999999999999999);

    expect(floor(-321.96, 2)).toBe(-321.96);
  });

  test('`floor` should handle zero', () => {
    for (let i = 0; i < 16; i++) {
      expect(floor(0, i)).toBe(0);
    }
  });

  test('`floor` should handle edge cases', () => {
    for (let i = 0; i < 16; i++) {
      expect(floor(NaN, i)).toBeNaN();
      expect(floor(Infinity, i)).toBe(Infinity);
      expect(floor(-Infinity, i)).toBe(-Infinity);
    }
  });
});
