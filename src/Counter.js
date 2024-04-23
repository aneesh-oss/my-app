import React, { useState, useEffect } from 'react';
import './Counter.css'; // Import CSS file for styling

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // This code runs when the component mounts
        console.log("Component mounted");

        // This is equivalent to componentWillUnmount
        return () => {
            console.log("Component will unmount");
        };
    }, []); // Empty dependency array means it only runs once on mount and cleanup on unmount

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter-container">
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <div className="button-container">
                <button className="increment-btn" onClick={increment}>+</button>
                <button className="decrement-btn" onClick={decrement}>-</button>
            </div>
        </div>
    );
};

export default Counter;

// import React, { useState } from 'react';
// import './Counter.css'; // Import CSS file for styling

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//         console.log(count + 1)
//     };

//     const decrement = () => {
//         setCount(count - 1);
//         console.log(count - 1)
//     };

//     return (
//         <div className="counter-container">
//             <h2>Counter</h2>
//             <p>Count: {count}</p>
//             <div className="button-container">
//                 <button className="increment-btn" onClick={increment}>+</button>
//                 <button className="decrement-btn" onClick={decrement}>-</button>
//             </div>
//         </div>
//     );
// };

// export default Counter;
