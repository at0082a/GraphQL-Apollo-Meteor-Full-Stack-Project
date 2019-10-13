import Resolutions from "./resolutions";

export default { 
  Query: { 
      hi() {
        return "hello graphql world";
      },
      resolutions() {
        return Resolutions.find({}).fetch();
    }
  } 
};