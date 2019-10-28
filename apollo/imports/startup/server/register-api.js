import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";
import merge from 'lodash/merge';

//babel needed to read graphql files  

const testSchema = `
type Query {
  resolutions: [Resolution]
  hi: String
}`;

//djsdk

const typeDefs = [testSchema, ResolutionsSchema];

//resolvers are functions that set inputs or values in the schema (TypeDefs)
const hiResolver = {
  Query: { 
  hi() {
    return "hello graphql world";
  }
 }
};

const resolvers = merge(hiResolver, ResolutionsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({schema});