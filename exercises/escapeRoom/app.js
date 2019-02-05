var readline = require("readline-sync");

var name = readline.question("What is your name?  ");

console.log("Greetings " + name + ", you find your self in a room.");

var esc = ["Put hand in hole", "open the door", "find the key"];
var esc2 = ["put hand in hole", "open the door"]

var choice1 = readline.keyInSelect(esc, "What do you do");


if(choice1 === 0){
    console.log("You died")
} else if(choice1 === 1){
    var key = false
    while(key == false){
        console.log("The door is locked")
        choice1 = readline.keyInSelect(esc, "What do you do");
        if(choice1 === 2){
            key = true
            console.log("you now have a key")
            var choice2 = readline.keyInSelect(esc2, "What do you do")
        } else if(choice1 === 0){
            console.log("You died")
            break;
        } else if(choice1 === -1){
            break;
        }
    }
} else if(choice1 === 2){
    console.log("you now have a key")
    var choice2 = readline.keyInSelect(esc2, "What do you do")
}

if(choice2 === 0){
    console.log("You died")
} else if(choice2 === 1){
    console.log("You have escaped")
}