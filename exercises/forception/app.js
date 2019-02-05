var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var newarr = []

function arr(one, two){
    for(i=0; i<one.length; i++){
        newarr.push(one[i])
        for(u=0; u<two.length; u++){
            newarr.push(two[u])
        }
    }
}
arr(people, alphabet)
console.log(newarr)