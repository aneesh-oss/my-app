import React, { useState } from 'react';
import './Page.css'; // Import CSS file for styling

const Page = () => {
    const [message, setMessage] = useState('');

    const showMessage = function (text) {
        setMessage(text);
    };

    const handleClick = function (method) {
        // Using apply method to call showMessage with a dynamic message
        if (method === 'apply') {
            showMessage.apply(null, ['Using apply method']);
        }
        // Using bind method to bind showMessage with a predefined message
        else if (method === 'bind') {
            const boundFunction = showMessage.bind(null, 'Using bind method');
            boundFunction();
        }
        // Using call method to call showMessage with a dynamic message
        else if (method === 'call') {
            showMessage.call(null, 'Using call method');
        }
    };

    return (
        <div className="page-container">
            <h1>React Page Example</h1>
            <div className="message">{message}</div>
            <div className="button-container">
                <button onClick={() => handleClick('apply')} className="apply-btn">Apply Method</button>
                <button onClick={() => handleClick('bind')} className="bind-btn">Bind Method</button>
                <button onClick={() => handleClick('call')} className="call-btn">Call Method</button>
            </div>
        </div>
    );
};

export default Page;
