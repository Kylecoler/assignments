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

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// var v = 0
// for(var i = 0; i< officeItems.length; i++){
//     if(officeItems[i]=== "computer"){
//         v += 1
//     }
// }
// console.log(v) 

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 

  
// for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//     var sex = (peopleWhoWantToSeeMadMaxFuryRoad[i].gender)
//     var name1 = (peopleWhoWantToSeeMadMaxFuryRoad[i].name)
//     if (sex  === "male"){sex = "him"
//         } else {
//             sex = "her"
//         }
//     if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17){
//         console.log(name1 + " is old enough to see Mad Max. Don't let " + sex + " in.")
//     } else {
//         console.log(name1 + " is not old enough to see Mad Max. Don't let " + sex + " in.")
//     }
// }  

 // "The light is on"
   // "The light is on"
      // "The light is off"


function light(switches){
    for(var i = 0; i < switches.length; i++ ){
        var lightState = false
        if (switches[i]%2 !== 0){
            lightState = !lightState}
            // console.log(lightState)
    }
    return(lightState)
}


console.log(light([2, 5, 435, 4, 3]));
console.log(light([1, 1, 1, 1, 3]));
console.log(light([9, 3, 4, 2]));