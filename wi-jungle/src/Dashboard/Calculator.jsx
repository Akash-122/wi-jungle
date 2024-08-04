import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [lastResult, setLastResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input).toString();
        setLastResult(result);
        setInput(result);
      } catch {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else if (value === 'ANS') {
      setInput(input + lastResult);
    } else if (value === 'sin' || value === 'cos' || value === 'tan' || value === 'log' || value === 'ln') {
      setInput(`${value}(${input})`);
    } else if (value === 'π') {
      setInput(input + Math.PI);
    } else if (value === 'e') {
      setInput(input + Math.E);
    } else if (value === 'deg') {
      setInput((parseFloat(input) * (180 / Math.PI)).toString());
    } else if (value === 'rad') {
      setInput((parseFloat(input) * (Math.PI / 180)).toString());
    } else if (value === '√') {
      setInput(`Math.sqrt(${input})`);
    } else if (value === 'x^y') {
      setInput(input + '**');
    } else if (value === 'EXP') {
      setInput(input + 'e');
    } else if (value === 'fact') {
      const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
      setInput(factorial(parseInt(input)).toString());
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value={input} readOnly />
      <div className="calculator-buttons">
        {['Rad', 'deg', 'fact', '(', ')', '%', 'AC'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        {['Inv', 'sin', 'ln', '7', '8', '9', '/'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        {['π', 'cos', 'log', '4', '5', '6', '*'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        {['e', 'tan', '√', '1', '2', '3', '-'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        {['Ans', 'EXP', 'x^y', '0', '.', '=', '+'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
