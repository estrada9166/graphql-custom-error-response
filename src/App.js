const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

app.set('port', process.env.PORT || 7000)

const ncSchema = require('./schema')
const getErrorCode = require('./utils/errors')

app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema: ncSchema,
    graphiql: process.env.NODE_ENV === 'development',
    context: { req },
    formatError: (err) => {
      const error = getErrorCode(err.message)
      return ({ message: error.message, statusCode: error.statusCode })
    }
  })(req, res)
})

const server = app.listen(app.get('port'), () => {
  console.log(`Server running -> PORT ${server.address().port}`)
})

module.exports = app
