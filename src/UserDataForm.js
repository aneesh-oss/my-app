import React, { Component } from 'react';
import './UserDataForm.css'; // Import CSS file for styling

class UserDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email } = this.state;
    alert(`User Data: \nFirst Name: ${firstName} \nLast Name: ${lastName} \nEmail: ${email}`);
  }

  render() {
    const { firstName, lastName, email } = this.state;

    return (
      <div className="user-data-form">
        <h2>User Data Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserDataForm;
