import React, { useState } from 'react';

const Visible = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      {/* Button one */}
      {!showContent && (
        <button onClick={toggleContent}>Show Hello World</button>
      )}
      {/* Content for button one */}
      {showContent && <p>Hello World</p>}

      {/* Button two */}
      {showContent && (
        <button onClick={toggleContent}>Hide Hello World and Show "I am a student"</button>
      )}
      {/* Content for button two */}
      {showContent && <p>I am a student</p>}
    </div>
  );
};

export default Visible;
