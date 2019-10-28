import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from "react-apollo";

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution( name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      name: "" 
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange (event) {
    this.setState({
      name: event.target.value 
    });
  }

  submitForm () {
    console.log(this.state.name);
    this.props.createResolution( {
      variables: {
        name: this.state.name
      }
    });
  }

  render () {
    // let todo = this.state.name;
    // console.log(todo);
    return (
    <div>
        <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.value} 
        />
        <button onClick={this.submitForm}> Submit </button>
    </div>
   )
  }
}

export default graphql(createResolution, { name: "createResolution" })(ResolutionForm)
