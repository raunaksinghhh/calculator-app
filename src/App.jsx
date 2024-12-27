import { useState } from "react"
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleEvaluate = () => {
    try {
      
      const result = evaluate(input);
      setOutput(result);  
      setInput('');       
    } catch  {
      setOutput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="output">{output}</div>
     
      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("")}>del </button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClick("*")}>x</button>
      </div>
      <div>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick("00")}>00</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
      </div>
  )
}

export default Calculator;