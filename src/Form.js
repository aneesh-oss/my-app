import React, { useState } from 'react';
import './FormValidation.css'; // Import CSS file for styling

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = function () {
        let errors = {};

        if (!username.trim()) {
            errors.username = 'Username is required';
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0; // Returns true if no errors
    };

    const handleSubmit = function (e) {
        e.preventDefault();

        // Using bind method to bind the validateForm function to the current context
        const isFormValid = validateForm.bind(this)();

        // Using apply method to call validateForm with this as context
        // const isFormValid = validateForm.apply(this, []);

        // Using call method to call validateForm with this as context
        // const isFormValid = validateForm.call(this);

        if (isFormValid) {
            alert('Form submitted successfully!');
            // Perform form submission logic here
        }
    };

    return (
        <div className="form-container">
            {/* <h2>Form Validation</h2> */}
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={errors.username ? 'error' : ''}
                    />
                    {errors.username && <span className="error-message">{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Form;
