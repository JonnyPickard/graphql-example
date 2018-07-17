const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const users = [
  { id: '20', firstName: 'Jonny', age: 26 },
  { id: '44', firstName: 'Kate', age: 32 }
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    height: {
      cm: GraphQLInt,
      inches: GraphQLInt
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return users.find(({ id }) => args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
