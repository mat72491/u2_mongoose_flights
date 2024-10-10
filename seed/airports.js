const flightsDatabase = require('../flightsDatabase')
const { Airport } = require('../models')


flightsDatabase.on('error', console.error.bind(console, 'MongoDB connection error:'))

//because we are taking a quick detour out of JS and into Mongo, we need to make sure these are all async functions. That way, even if it only takes .01 of second, it still won't throw things out of order
const main = async () => {
  const airports = [
    {
      name: 'Rome Fiumicino International',
      location: 'Rome, ITA',
      code: '1609'
    },
    {
      name: 'Charles DeGaulle International',
      location: 'Paris, FRA',
      code: '4056'
    },
    {
        name: 'Heathrow International',
        location: 'London, ENG',
        code: '1455'
      },
      {
        name: 'Los Angeles International',
        location: 'Los Angeles, CA',
        code: '978'
      },
      {
        name: 'John F. Kennedy International',
        location: 'New York, NY',
        code: '111'
      },
      {
        name: 'Newark International',
        location: 'Newark, NJ',
        code: '113'
      },
      {
          name: 'Logan International',
          location: 'Boston, MA',
          code: '317'
        },
        {
          name: 'OHare International',
          location: 'Chicago, IL',
          code: '514'
        }
  ]
 
 //running our Mongo commands through JS! How cool is that!
 //it is cool
  await Airport.insertMany(airports)
  // using console.log to see the data we've seen
  console.log('Created arrivals!')
}

//we keep these functions seperate so they can each run independently (Atomically) and perform their necessary task. 
//this is a bit complicated, yes, but it will prevent A Lot of errors we'd see if we didn't do this
const run = async () => {
//runs our main function and awaits for the data to populate
  await main()
  //closes our db after its run so things don't break
  flightsDatabase.close()
}

run()