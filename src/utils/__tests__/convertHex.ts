import { convertHex } from '..';

test('convertHex', (): void => {
  const opacity = 50;
  const hex = '#000000';
  expect(opacity).toBeGreaterThan(0);
  expect(opacity).toBeLessThan(100);
  expect(hex).toMatch(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  expect(convertHex(hex, opacity)).toBe('rgba(0,0,0,0.5)');
});
