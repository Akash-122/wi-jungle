import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [lastResult, setLastResult] = useState('');
  const [invMode, setInvMode] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        let expression = input;

        // Replace shorthand with Math functions
        expression = expression.replace(/sin\(([^)]+)\)/g, (_, angle) => `Math.sin(${angle} * Math.PI / 180)`);
        expression = expression.replace(/cos\(([^)]+)\)/g, (_, angle) => `Math.cos(${angle} * Math.PI / 180)`);
        expression = expression.replace(/tan\(([^)]+)\)/g, (_, angle) => `Math.tan(${angle} * Math.PI / 180)`);
        expression = expression.replace(/asin\(([^)]+)\)/g, (_, value) => `Math.asin(${value}) * 180 / Math.PI`);
        expression = expression.replace(/acos\(([^)]+)\)/g, (_, value) => `Math.acos(${value}) * 180 / Math.PI`);
        expression = expression.replace(/atan\(([^)]+)\)/g, (_, value) => `Math.atan(${value}) * 180 / Math.PI`);
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/ln\(/g, 'Math.log(');
        expression = expression.replace(/π/g, Math.PI);
        expression = expression.replace(/e/g, Math.E);

        const result = eval(expression).toString();
        setLastResult(result);
        setInput(result);
      } catch {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else if (value === 'ANS') {
      setInput(input + lastResult);
    } else if (value === 'Inv') {
      setInvMode(!invMode);
    } else if (['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'log', 'ln'].includes(value)) {
      setInput(input + value + '(');
    } else if (value === 'π') {
      setInput(input + 'π');
    } else if (value === 'e') {
      setInput(input + 'e');
    } else if (value === 'deg') {
      setInput((parseFloat(input) * (180 / Math.PI)).toString());
    } else if (value === 'rad') {
      setInput((parseFloat(input) * (Math.PI / 180)).toString());
    } else if (value === '√') {
      setInput(input + 'Math.sqrt(');
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
        {['Inv', invMode ? 'asin' : 'sin', 'ln', '7', '8', '9', '/'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        {['π', invMode ? 'acos' : 'cos', 'log', '4', '5', '6', '*'].map((btn) => (
          <button key={btn} className="button" onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        {['e', invMode ? 'atan' : 'tan', '√', '1', '2', '3', '-'].map((btn) => (
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
