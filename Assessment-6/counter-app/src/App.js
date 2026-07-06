import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-card">
        <h1>🚀 Counter App</h1>

        <div className="counter-circle">
          {count}
        </div>

        {count > 10 && (
          <p className="warning">
            ⚠ Counter value exceeded limit 10!
          </p>
        )}

        <div className="buttons">
          <button
            className="btn decrease"
            onClick={decrease}
            disabled={count === 0}
          >
            Decrease
          </button>

          <button
            className="btn reset"
            onClick={reset}
          >
            Reset
          </button>

          <button
            className="btn increase"
            onClick={increase}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;