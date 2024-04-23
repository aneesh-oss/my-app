import React, { useState, useEffect } from 'react';
import './CounterOne.css'; // Import CSS file for styling

const CounterWithDependency = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000); // Update the count every second

        // Cleanup function: Clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, [count]); // Dependency array includes count

    return (
        <div className="counter-container">
            <h2>Counter (With Dependency)</h2>
            <p>Count: {count}</p>
        </div>
    );
};

export default CounterWithDependency;
