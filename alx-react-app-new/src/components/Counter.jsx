import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount]=useState(0);

  return (
    <>
        <div className="card">
            <p>Current Count is : {count} </p>
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
            </button>
            
            <button onClick={() => setCount((count) => count =0)}>
            Reset 
          </button>

          <button onClick={() => setCount((count) => count - 1)}>
            Decrement  
          </button>
    </div>
    </>
     );
  };

export default Counter