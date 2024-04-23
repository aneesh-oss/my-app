import React, { useState } from 'react';
import './Form.css'; // Import CSS file for styling

const FormData = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = function () {
        let errors = {};

        if (!this.username.trim()) {
            errors.username = 'Username is required';
        }

        if (!this.password.trim()) {
            errors.password = 'Password is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0; // Returns true if no errors
    };

    const handleSubmit = function (e) {
        e.preventDefault();

        // Using apply method to call validateForm with formData as context
        const isFormValid = validateForm.apply(formData);

        // Using bind method to bind the validateForm function to formData
        // const isFormValid = validateForm.bind(formData)();

        // Using call method to call validateForm with formData as context
        // const isFormValid = validateForm.call(formData);

        if (isFormValid) {
            alert('Form submitted successfully!');
            // Perform form submission logic here
        }
    };

    const handleChange = function (e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className={errors.username ? 'error' : ''}
                    />
                    {errors.username && <span className="error-message">{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default FormData;
