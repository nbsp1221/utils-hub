export function toCamelCase(value: string): string {
  let result = '';
  let shouldUpperCase = false;

  for (let i = 0; i < value.length; i++) {
    const char = value.charAt(i);

    if (char === '-' || char === '_') {
      shouldUpperCase = true;
      continue;
    }

    if (shouldUpperCase) {
      result += char.toUpperCase();
      shouldUpperCase = false;
    }
    else {
      result += i === 0 ? char.toLowerCase() : char;
    }
  }

  return result;
}
