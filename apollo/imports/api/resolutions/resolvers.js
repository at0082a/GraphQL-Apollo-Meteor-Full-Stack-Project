
export default { 
  Query: { 
      hi() {
        return "hello graphql world";
      },
      resolutions() {
        return [
        {
          _id: "sshhksds",
          name: "Brush your teeth"
        },
        {
          _id: "alextalex",
          name: "Do Laundry"
        }
      ]; 
    }
  } 
};