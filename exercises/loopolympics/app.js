//preliminarys

// for(i=0; i<9; i++){
//     console.log (i + 1)
// }

// for(i=9; i>0; i--){
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for( i=0; i <fruit.length; i++){
//     console.log(fruit[i])
// }

//bronze medal

// var array9 = []

// for(i=0; i<9; i++){
//     array9.push(i+1)
// }

// console.log(array9)

// for(i=0; i <101; i++){
//     if(i%2 === 0 || i === 0){
//         console.log(i)
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// var selectfruit = []

// for(i=0; i<fruit.length; i++){
//     if(i%2 === 0 || i === 0){
//         selectfruit.push(fruit[i])}
// }

// console.log(selectfruit)


//silver medal

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

// for(i=0; i<peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }  

// var name=[]

// var occupation=[]

// for(i=0; i<peopleArray.length; i++){
//     name.push(peopleArray[i].name)
//     occupation.push(peopleArray[i].occupation)
// }

// console.log(name, occupation)

// for(i=0; i<peopleArray.length; i++){
//   if(i%2===0 || i===0){
//     name.push(peopleArray[i].name)
//   } else {
//     occupation.push(peopleArray[i].occupation)
//   }
// }

// console.log(name, occupation)

//gold medal

// [[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[1,1,1],[2,2,2]],[[0,1,2],[0,1,2],[0,1,2]] then change numbers to x

var a0 = []

for(i=0; i<3; i++){
  a0.push([])
  for(u=0; u<3; u++){
    a0[i].push(0)
  }
}

console.log(a0)

var a1 = []

for(i=0; i<3; i++){
  a1.push([])
  for(u=0; u<3; u++){
    a1[i].push(i)
  }
}

console.log(a1)

var a2 = []

for(i=0; i<3; i++){
  a2.push([])
  for(u=0; u<3; u++){
    a2[i].push(u)
  }
}

console.log(a2)

for(i=0; i<a2.length; i++){
  for(u=0; u<a2.length; u++){
    a2[i][u] = 'x';
  }
}

console.log(a2)