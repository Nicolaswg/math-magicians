import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './CalButton';

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

  return (
    <div className="calculator-grid">
      <div className="output">
        {total || ''}

        {operation || ''}

        {next || ''}
      </div>
      <Buttons click={handleClick} />
    </div>
  );
};
export default Calculator;
