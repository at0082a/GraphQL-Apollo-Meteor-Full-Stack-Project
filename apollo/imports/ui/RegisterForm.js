import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      password: "" 
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitForm () {
    event.preventDefault()
    console.log("this is email", this.state.email);
    console.log("this is password", this.state.password);
  }

  handleChange (event) {
    const value = event.target.value
    this.setState({[event.target.name]: value});
  }

  render() {
    return (
      <form onSubmit={ this.submitForm }>
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
        <button type="submit" value="submit"></button>
      </form>
  )}
}

export default RegisterForm;