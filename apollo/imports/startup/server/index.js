import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Query {
  hi: String
}`;

//resolvers are functions that set inputs or values in the schema (TypeDefs)
const resolvers = {
  Query: { 
  hi() {
    return "hello graphql world";
  }
 }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({schema});
