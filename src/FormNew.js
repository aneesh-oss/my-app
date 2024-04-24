import React, { useState } from 'react';
import './FormNew.css'; // Importing CSS file for styling

// Functional component for the form
const MyForm = ({ onSubmit }) => {
  // State variables to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call onSubmit function passed as props with form data
    onSubmit({ name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

// Component to display form submissions
const FormSubmissions = ({ submissions }) => {
  return (
    <div className="form-submissions">
      <h2>Form Submissions</h2>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>
            <strong>Name:</strong> {submission.name},{' '}
            <strong>Email:</strong> {submission.email},{' '}
            <strong>Message:</strong> {submission.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Parent component to manage form submissions
const FormNew = () => {
  const [submissions, setSubmissions] = useState([]);

  // Function to add form submission to state
  const handleFormSubmit = (formData) => {
    setSubmissions([...submissions, formData]);
  };

  return (
    <div className="form-container">
      <MyForm onSubmit={handleFormSubmit} />
      <FormSubmissions submissions={submissions} />
    </div>
  );
};

export default FormNew;
