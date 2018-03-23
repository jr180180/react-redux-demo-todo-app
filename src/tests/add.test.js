const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => (`Hello ${name}!!`);

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    expect(generateGreeting('Tom')).toBe('Hello Tom!!');
});

test('should generate greeting from no name', () => {
    expect(generateGreeting()).toBe('Hello Anonymous!!');
});

