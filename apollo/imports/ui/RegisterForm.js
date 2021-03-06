import React, { Component } from "react";


class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      password: "" 
    };
    this.registerUser = this.registerUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  registerUser (event) {
    event.preventDefault();
    Accounts.createUser(
      {
        email: this.state.email,
        password: this.state.password
      },
      error => {
        console.log(error);
      }
    );
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  render() {
    return (
      <form onSubmit={ this.registerUser }>
        <input
          type="email"
          name="email"
          value={ this.state.email }
          onChange= { this.handleChange }
        />
        <input
          type="password" 
          name="password"
          value={ this.state.password }
          onChange= { this.handleChange }
        />
        <button type="submit" value="submit"> Register User </button>
      </form>
  )}
}

export default RegisterForm;