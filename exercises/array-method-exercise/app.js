var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop()
// console.log(vegetables)

fruit.shift()
// console.log(fruit)

var ind = fruit.indexOf("orange")
// console.log(ind)

fruit.push(ind)
// console.log(fruit)

var len = vegetables.length

vegetables.push(len)
// console.log(vegetables)

var food = fruit.concat(vegetables)
// console.log(food)

food.splice(4,2)
// console.log(food)

food.reverse()
console.log(food)

console.log(food.join())