import { moveDecimal } from '../moveDecimal';

export function floor(value: number, precision: number): number {
  const factor = Math.pow(10, precision);
  const integer = Math.floor(value * factor);

  let t = value;

  for (let i = 0; i < precision; i++) {
    t *= 10;
  }

  if (integer === Math.floor(t)) {
    return integer / factor;
  }
  else {
    return moveDecimal(Math.floor(moveDecimal(value, precision)), -precision);
  }
}
