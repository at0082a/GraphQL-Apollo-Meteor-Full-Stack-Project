import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from "react-apollo";

export default class ResolutionForm extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      name: "" 
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      name: event.target.value 
    });
  }

  render () {
    let todo = this.state.name;
    console.log(todo);
    return (
    <div>
      <input type="text" 
      onChange={this.handleChange} 
      value={this.state.value} 
      />
    </div>
   )
  }
}
