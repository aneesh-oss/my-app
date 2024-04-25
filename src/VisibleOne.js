import React, { useState } from 'react';

const VisibleOne = () => {
  // State variables
  const [visible, setVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {/* Button one */}
      {!visible && (
        <button onClick={toggleVisibility}>Show Hello World</button>
      )}

      {/* Content for button one */}
      {visible && <p>Hello World</p>}

      {/* Button two */}
      {visible && (
        <button onClick={toggleVisibility}>Hide Hello World and Show "I am a student"</button>
      )}

      {/* Content for button two */}
      {visible && <p>I am a student</p>}
    </div>
  );
};

export default VisibleOne;