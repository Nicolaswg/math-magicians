import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
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
                <button type="button" className="button span-2" key={e} onClick={this.handleClick}>{e}</button>
              );
            }
            return (
              <button type="button" className="button" key={e} onClick={this.handleClick}>{e}</button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Calculator;
