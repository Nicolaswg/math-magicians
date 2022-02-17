import calculate from '../logic/calculate';

describe('testing math calculation of calculate.js file', () => {
  test('testing multiply calculation', () => {
    const btnName = 'x';
    const obj = {
        total: '2',
        next: '2',
        operation: 'x',
      }
    const calculated = calculate(obj, btnName);

    expect(calculated).toEqual({next: null, operation: "x", total: '4'});
  });

  test('testing minus calculation', () => {
    const btnName = '-';
    const obj = {
        total: '20',
        next: '5',
        operation: '-',
      }
    const calculated = calculate(obj, btnName);

    expect(calculated).toEqual({next: null, operation: "-", total: '15'});
  });

  test('testing add calculation', () => {
    const btnName = '+';
    const obj = {
        total: '1000',
        next: '55',
        operation: '+',
      }
    const calculated = calculate(obj, btnName);

    expect(calculated).toEqual({next: null, operation: "+", total: '1055'});
  });
});
