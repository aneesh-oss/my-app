import React, { useState } from 'react';

const FormValidation = () => {
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

        // Binding the validateForm function to the current context
        const isFormValid = validateForm.bind(this)();

        if (isFormValid) {
            alert('Form submitted successfully!');
            // Perform form submission logic here
        }
    };

    return (
        <div>
            <h2>Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormValidation;
