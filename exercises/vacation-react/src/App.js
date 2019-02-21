import React from 'react';

const App = () => {
    return (
        <div>

        </div>
    )
}

export default App

let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]

// Change the background color of your card depending on the timeToGo property.
// Give each card 1, 2, or 3 dollar signs ($) depending on if it's less than $500, less than $1000, or more than $1000