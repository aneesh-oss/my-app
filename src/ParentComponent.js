import React, { useState } from 'react';

// Parent component
const ParentComponent = () => {
  // State variable
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1); // Update count using setCount function
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* Passing incrementCount function as prop */}
      <ChildComponent increment={incrementCount} />
    </div>
  );
};

// Child component
const ChildComponent = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
};

export default ParentComponent;
