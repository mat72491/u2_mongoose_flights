const flightsDatabase = require('../flightsDatabase')
const { Airport, Flight } = require('../models')


flightsDatabase.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rome = await Airport.findOne({ name: 'Rome Fiumicino International' })
  const paris = await Airport.findOne({ name: 'Charles DeGaulle International' })
  const london = await Airport.findOne({ name: 'Heathrow International' })
  const losAngeles = await Airport.findOne({ name: 'Los Angeles International' })

  const newYork = await Airport.findOne({ name: 'John F. Kennedy International' })
  const newark = await Airport.findOne({ name: 'Newark International' })
  const boston = await Airport.findOne({ name: 'Logan International' })
  const chicago = await Airport.findOne({ name: 'OHare International' })



const flights = [
    {
    airline: "Delta",
    flightNumber: 351,
    price: 850,
    numberOfSeats: 250,
    departingAirport: newYork._id,
    arrivalAirport: paris._id,
    departureDateTime: "10/10/2024 ; 4:30PM"
    },
    {
        airline: "Delta",
        flightNumber: 409,
        price: 900,
        numberOfSeats: 300,
        departingAirport: chicago._id,
        arrivalAirport: london._id,
        departureDateTime: "10/10/2024 ; 1:30PM"
        },
        {
            airline: "American",
            flightNumber: 231,
            price: 500,
            numberOfSeats: 176,
            departingAirport: boston._id,
            arrivalAirport: losAngeles._id,
            departureDateTime: "10/10/2024 ; 7:30AM"
            },   
            {
                airline: "Air France",
                flightNumber: 111,
                price: 500,
                numberOfSeats: 150,
                departingAirport: newark._id,
                arrivalAirport: paris._id,
                departureDateTime: "10/10/2024 ; 5:30PM"
                },
                {
                    airline: "Continental",
                    flightNumber: 550,
                    price: 550,
                    numberOfSeats: 200,
                    departingAirport: newark._id,
                    arrivalAirport: london._id,
                    departureDateTime: "10/10/2024 ; 7:00AM"
                    },
                    {
                        airline: "Southwest",
                        flightNumber: 784,
                        price: 250,
                        numberOfSeats: 150,
                        departingAirport: chicago._id,
                        arrivalAirport: losAngeles._id,
                        departureDateTime: "10/10/2024 ; 5:30AM"
                        },
                        {
                            airline: "ITA",
                            flightNumber: 300,
                            price: 1000,
                            numberOfSeats: 350,
                            departingAirport: newYork._id,
                            arrivalAirport: rome._id,
                            departureDateTime: "10/10/2024 ; 10:00AM"
                            }
                        ]

await Flight.insertMany(flights) 
console.log('Created airports with flights!')
}
const run = async () => {
await main()
flightsDatabase.close()
}

run()