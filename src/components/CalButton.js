import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ click }) => {
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
    <div className="row">
      {values.map((e) => {
        if (e === '0') {
          return (
            <button type="button" className="button span-2" key={e} onClick={click}>{e}</button>
          );
        }
        return (
          <button type="button" className="button" key={e} onClick={click}>{e}</button>
        );
      })}
    </div>
  );
};

Buttons.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Buttons;
