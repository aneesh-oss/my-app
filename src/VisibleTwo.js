import React, { useState } from 'react';

const VisibleTwo = () => {
  // State variables
  const [visible, setVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {/* Button one */}
      {!visible ? (
        <button onClick={toggleVisibility}>Show Hello World</button>
      ) : (
        <p>Hello World</p>
      )}

      {/* Button two */}
      {visible ? (
        <button onClick={toggleVisibility}>Show "I am a student"</button>
      ) : (
        <p>I am a student</p>
      )}
    </div>
  );
};

export default VisibleTwo;
