import './Calculator.css';

function Wrapper() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand" />
        <div className="current-operand">0</div>
      </div>
      <div className="row">
        <span className="button">AC</span>
        <span className="button">+/-</span>
        <span className="button">%</span>
        <span className="button">÷</span>
        <span className="button">7</span>
        <span className="button">8</span>
        <span className="button">9</span>
        <span className="button">x</span>
        <span className="button">4</span>
        <span className="button">5</span>
        <span className="button">6</span>
        <span className="button">-</span>
        <span className="button">1</span>
        <span className="button">2</span>
        <span className="button">3</span>
        <span className="button">+</span>
        <span className="button span-2">0</span>
        <span className="button">.</span>
        <span className="button">=</span>
      </div>
    </div>
  );
}

export default Wrapper;
