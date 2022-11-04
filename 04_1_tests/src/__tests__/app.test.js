import showLevel from '../app';

test.each([
  { a: 55, expected: 'healthy' },
  { a: 25, expected: 'wounded' },
  { a: 5, expected: 'critical' },
])(
  'testing the function showLevel with %s health',
  ({ a, expected }) => {
    const result = showLevel({ health: a });
    expect(result).toBe(expected);
  },
);
