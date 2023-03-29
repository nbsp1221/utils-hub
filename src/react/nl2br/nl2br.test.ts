import { render } from '@testing-library/react';
import { nl2br } from './nl2br';

describe('nl2br', () => {
  test('nl2br should replace newlines with <br />', () => {
    const text = 'This is a\nmultiline\ntext.';
    const expected = 'This is a<br>multiline<br>text.';

    expect(render(nl2br(text)).container.innerHTML).toBe(expected);
  });

  test('nl2br should handle string without newlines', () => {
    const text = 'This is a single line text.';
    const expected = 'This is a single line text.';

    expect(render(nl2br(text)).container.innerHTML).toBe(expected);
  });

  test('nl2br should handle empty string', () => {
    const text = '';
    const expected = '';

    expect(render(nl2br(text)).container.innerHTML).toBe(expected);
  });
});
