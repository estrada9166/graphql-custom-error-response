const TestType = require('../types/test')

const { errorName } = require('../../constants')

module.exports = {
  type: TestType,
  resolve: async (obj, args, ctx) => {
    try {
      // Add your logic here
      throw new Error(errorName.UNAUTHORIZED)
    } catch (err) {
      throw err.message
    }
  }
}
