import operate from '../logic/operate';

describe('testing math operation of operate.js file', () => {
  test('testing sum operation', () => {
    const operation = '+';
    const operated = operate(8, 9, operation);

    expect(operated).toBe('17');
  });
});
