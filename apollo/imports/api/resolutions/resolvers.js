import Resolutions from "./resolutions";

export default { 
  Query: { 
      hi() {
        return "hello graphql world";
      },
      resolutions(obj, args, { userId }) {
        return Resolutions.find({ userId }).fetch();
    }
  }, 

  Mutation: {
    createResolution(obj, { name }, { userId }) {
      if (userId) {
        const resolutionId = Resolutions.insert({
          name, 
          userId
        });
        return Resolutions.findOne(resolutionId);
      }
    }
  }
};