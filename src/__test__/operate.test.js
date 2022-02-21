import operate from '../logic/operate';

describe('testing math operation of operate.js file', () => {
  test('testing sum operation', () => {
    const operation = '+';
    const operated = operate('8', '9', operation);

    expect(operated).toBe('17');
  });

  test('testing minus operation', () => {
    const operation = '-';
    const operated = operate('20', '10', operation);
    expect(operated).toBe('10');
  });

  test('testing times operation', () => {
    const operation = 'x';
    const operated = operate('4', '4', operation);

    expect(operated).toBe('16');
  });
});
