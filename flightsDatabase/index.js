const mongoose = require('mongoose')



mongoose
  .connect('mongodb+srv://michaeltibbetts1@student-cluster.t8y9r.mongodb.net/flightsDatabase?retryWrites=true&w=majority&appName=student-cluster')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
    
mongoose.set('debug', true)


const flightsDatabase = mongoose.connection


module.exports = flightsDatabase
