import React, { useState, useEffect } from 'react';
import './CounterOne.css'; // Import CSS file for styling

const CounterWithEmptyDependency = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 3000); // Update the count every second

        // Cleanup function: Clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means it only runs once on mount and cleans up on unmount

    return (
        <div className="counter-container">
            <h2>Counter ❤💋👀(With Empty Dependency)</h2>
            <p>Count: {count}</p>
        </div>
    );
};

export default CounterWithEmptyDependency;
