export function moveDecimal(value: number, position: number): number {
  if (!Number.isFinite(value)) {
    return value;
  }

  const isNegative = value < 0;
  const absoluteValue = Math.abs(value);

  const [integer = '', decimal = ''] = absoluteValue
    .toFixed(
      parseInt(absoluteValue.toString().split('e-')[1] ?? value.toString().split('.')[1]?.length ?? 0, 10)
    )
    .split('.');

  const newInteger = position >= 0
    ? `${integer}${decimal.slice(0, position)}${'0'.repeat(Math.max(0, position - decimal.length))}`
    : integer.slice(0, position);

  const newDecimal = position >= 0
    ? `${decimal.slice(position)}`
    : `${'0'.repeat(Math.max(0, -(position + integer.length)))}${integer.slice(position)}${decimal}`;

  return parseFloat(`${isNegative ? '-' : ''}${newInteger}.${newDecimal}`);
}
