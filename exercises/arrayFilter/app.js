var nums = [1,8,9,4,6,3]

// var small = nums.filter(function(num){
//     return num < 5
// })
// console.log(small)

// var even = nums.filter(function(num){
//     return num%2===0 
// })
// console.log (even)

var str = ["dog", "wolf", "by", "family", "eaten", "camping"]

// var shorstr = str.filter(function(item){
//     return item.length < 6
// })
// console.log(shorstr)

var people = [
    {
        name: "Angelina Jolie",
        member: true,
        age:80
    },
    {
        name: "Eric Jones",
        member: false,
        age:2
    },
    {
        name: "Paris Hilton",
        member: true,
        age:5,
    },
    {
        name: "Kayne West",
        member: false,
        age:16,
    },
    {
        name: "Bob Ziroll",
        member: true,
        age:100,
    }
]

// var members = people.filter(function(person){
//     return person.member
// })
// console.log(members)

var viewR = people.filter(function(person){
    return person.age > 17
})
console.log(viewR)