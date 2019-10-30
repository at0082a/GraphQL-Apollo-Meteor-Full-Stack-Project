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
    createResolution(obj, { name }, context) {
      console.log(name);
      const resolutionId = Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionId);
    }
  }
};