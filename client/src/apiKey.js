if (process.env.NODE_ENV === 'production') {
  module.exports = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  }
} else {
  module.exports = {
    clientId: '5e2f02affe9a10e3632f',
    clientSecret: 'f179e10c4d55a8acd988ce7c636e28a2a69b0dde'
  }
}