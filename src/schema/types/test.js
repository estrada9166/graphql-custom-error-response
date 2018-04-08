const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

const TestType = new GraphQLObjectType({
  name: 'Test',
  fields: () => {
    return {
      test: { type: GraphQLNonNull(GraphQLString) }
    }
  }
})

module.exports = TestType
