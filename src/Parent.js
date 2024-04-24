import React, { useState } from 'react';

// Parent component
const Parent = () => {
  // State variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      {/* Child component with state passed as prop */}
      <ChildComponent count={count} />
      {/* Button to increment count */}
      {/* <button onClick={() => setCount(count + 1)}>Increment Count</button> */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </div>
  );
};

// Child component
const ChildComponent = ({ count }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Count from Parent: {count}</p>
    </div>
  );
};

export default Parent;