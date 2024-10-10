const flightsDatabase = require('./flightsDatabase')
const { Airport, Flight } = require('./models')
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

// // show all flight information
app.get('/flights', async (req,res) => {
    const flights = await Flight.find({})
    .populate('departingAirport')
    .populate('arrivalAirport')
    res.json(flights)
})

//-------------------------------------------------------------------------------

// // find flights by ID
app.get('/flights/:id', async (req, res) => {
    try {
        const { id } = req.params
        const flight = await Flight.findById(id)
        .populate('departingAirport')
        .populate('arrivalAirport')
        if (!flight) throw Error ('404 flight not found')
            res.json(flight)
    } catch(e){
        console.log(e)
        res.send('Flight not found')
    }
})

//-------------------------------------------------------------------------------

// const main = async () => {
  const flightUpdate = await new Flight({
    airline: 
    flightNumber: 
    price: 
    numberOfSeats: 
    departingAirport: 
    arrivalAirport: 
    departureDateTime: 
  })
  flightUpdate.save()}

//--------------------------------------------------------------------

const updateFlights = async () => {
    if (Flight._id = '6707180526ce34eb9b453b49') {
        await Flight.updateOne({flightNumber: 351 }, {flightNumber: 353})
    }console.log(updateFlights)
}

const updateAirport = async () => {
    if (Airport._id = '67085e3a1dc229b4a370c23d'){
        await Airport.updateOne({code: 4056}, {code: 4057})
    }console.log(updateArrivals)
}


//----------------------------------------------------------------

const deleteFlight = async () => {
    let deleted = await Flight.deleteOne({flightNumber: 353})
    console.log(deleted)
}

const deleteAirport = async () => {
    let deleted = await Airport.deleteOne({name: ""})
    console.log(deleted)
}



async function main() {
    try {
      await getFlightDetails()
      await getFlightsByObjectID()
      await insertOne()
      await updateFlight()
      await updateAirport()
      await deleteFlight()
      await deleteAirport()
      await create()
    } 
    catch (error) {
      console.log(error)
    } finally {
      await flightsDatabase.close()
    }
}

  main()

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })