const { GraphQLSchema, GraphQLObjectType } = require('graphql')

// Import queries
const GetTest = require('./queries/getTest')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    test: GetTest
  })
})

const ncSchema = new GraphQLSchema({
  query: RootQueryType
})

module.exports = ncSchema
