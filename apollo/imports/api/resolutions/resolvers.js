import Resolutions from "./resolutions";

export default { 
  Query: { 
      hi() {
        return "hello graphql world";
      },
      resolutions() {
        return Resolutions.find({}).fetch();
    }
  }, 

  Mutation: {
    createResolution() {
      const resolutionId = Resolutions.insert({
        name: "Test Res"
      });
    }
  }
};