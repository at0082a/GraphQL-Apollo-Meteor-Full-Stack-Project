import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { ApolloClient} from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "../../ui/index";

const httpLink = new HttpLink ({
  link: Meteor.absoluteUrl('graphql')
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

//ApolloApp is a react component. It renders graphql.
const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById("app"));
});

