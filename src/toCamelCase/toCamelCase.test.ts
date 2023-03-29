import { toCamelCase } from './toCamelCase';

describe('toCamelCase', () => {
  test('toCamelCase should handle empty string', () => {
    const value = '';
    const expected = '';

    expect(toCamelCase(value)).toBe(expected);
  });

  const testCases = [
    ['lowercase', 'lowercase'],
    ['Uppercase', 'uppercase'],
    ['camelCase', 'camelCase'],
    ['anotherCamelCase', 'anotherCamelCase'],
    ['PascalCase', 'pascalCase'],
    ['AnotherPascalCase', 'anotherPascalCase'],
    ['kebab-case', 'kebabCase'],
    ['another-kebab-case', 'anotherKebabCase'],
    ['snake_case', 'snakeCase'],
    ['another_snake_case', 'anotherSnakeCase'],
  ];

  test.each(testCases)('toCamelCase should convert %p to %p', (value, expected) => {
    expect(toCamelCase(value)).toBe(expected);
  });
});
