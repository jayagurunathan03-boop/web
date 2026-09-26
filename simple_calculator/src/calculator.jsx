import { useState } from "react";

function Calculator() {
  // State
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  // Event + Calculation
  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }

    if (operator === "+") {
      setResult(a + b);
    } else if (operator === "-") {
      setResult(a - b);
    } else if (operator === "*") {
      setResult(a * b);
    } else if (operator === "/") {
      if (b === 0) {
        setResult("Cannot divide by zero");
      } else {
        setResult(a / b);
      }
    }
  };

  // Clear button event
  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setOperator("+");
    setResult(null);
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>

      {/* First Number */}
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      {/* Operator */}
      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      {/* Second Number */}
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      {/* Buttons */}
      <div className="buttons">
        <button onClick={calculate}>Calculate</button>
        <button onClick={clearCalculator}>Clear</button>
      </div>

      {/* Conditional Rendering */}
      {result !== null && (
        <div className="result">
          {typeof result === "number" ? (
            <h2>Result: {result}</h2>
          ) : (
            <h2>{result}</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Calculator;