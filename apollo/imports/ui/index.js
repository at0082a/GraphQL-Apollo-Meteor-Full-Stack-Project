import React from "react";
import gql from 'graphql-tag';
import { graphql } from "react-apollo";

const hiQuery = gql`
  {
    hi
  }
`;

const App = ({ data }) => (<h1>{ data.hi }</h1>);

export default graphql(hiQuery)(App)