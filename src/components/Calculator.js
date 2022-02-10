import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState(
    {
      total: '0',
      next: null,
      operation: null,
    },
  );

  const handleClick = (e) => {
    setData((init) => (calculate(init, e.target.textContent)));
  };

  const { total, next, operation } = data;
  const values = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  return (
    <div className="calculator-grid">
      <div className="output">
        {total || ''}

        {operation || ''}

        {next || ''}
      </div>
      <div className="row">
        {values.map((e) => {
          if (e === '0') {
            return (
              <button type="button" className="button span-2" key={e} onClick={handleClick}>{e}</button>
            );
          }
          return (
            <button type="button" className="button" key={e} onClick={handleClick}>{e}</button>
          );
        })}
      </div>
    </div>
  );
};
export default Calculator;
