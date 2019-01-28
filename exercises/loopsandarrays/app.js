//loops and arrays

// var evenOnlyArray = []

// function createEvenArray(highestnum = 20){
//     for(i = 0; i <= highestnum; i++){
//         if(i % 2 === 0 && i > 0){
//             evenOnlyArray.push(i)
//         }
//     }
// }

// createEvenArray()

// console.log(evenOnlyArray)

// var evencount = evenOnlyArray.length

// function addOdds(){
//     for(i=0; i < evencount; i++){
//         evenOnlyArray.push(evenOnlyArray[i] + 1)
//     }
// }

// addOdds(evenOnlyArray)

// console.log(evenOnlyArray)

// function sortNums(){
//     evenOnlyArray.sort(function(a,b){return a-b})
// }

// sortNums()

// console.log(evenOnlyArray)

// loops & arrays practice

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var v = 0
for(var i = 0; i< officeItems.length; i++){
    if(officeItems[i]=== "computer"){
        v += 1
    }
}
console.log(v) 

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see Mad Max')
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
    }
}  

