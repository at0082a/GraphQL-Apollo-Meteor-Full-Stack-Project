import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        email: ""
      };
    this.loginUser = this.loginUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  loginUser (event) {
    event.preventDefault();
    Meteor.loginWithPassword(
      this.state.email,
      this.state.password,
      error => {
        console.log(error);
      }
    );
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  render () {
    return (
      <form onSubmit={ this.loginUser }>
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
        <button type="submit" value="submit"> Login User </button>
      </form>
    )
  }
}

export default LoginForm;