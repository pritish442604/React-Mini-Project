import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <h2>Counter App</h2>
      <h3>Created by Pritish🚀</h3>  
      
      <h1>{count}</h1>

      <button onClick={increase}>➕ Increase</button>
      <button onClick={decrease}>➖ Decrease</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
}

export default Counter;