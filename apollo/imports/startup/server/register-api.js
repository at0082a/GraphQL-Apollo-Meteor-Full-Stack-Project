import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";

//babel needed to read graphql files  

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}`;

const typeDefs = [testSchema, ResolutionsSchema];

//resolvers are functions that set inputs or values in the schema (TypeDefs)
const resolvers = {
  Query: { 
  hi() {
    return "hello graphql world";
  },
  resolutions() {
    return [
    {
      _id: "sshhksds",
      name: "Brush your teeth"
    }
  ]; 
  }
 }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({schema});