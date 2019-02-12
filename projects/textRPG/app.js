var readline =  require('readline-sync');

console.clear()
var name = readline.question("What is your name dear typist?:  ");
function name1(){
    return (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
}
var name1 = name1()
var sanity = 200
var mainchoice = ["Read code", "Check tools"]
var tools = ["old laptop"]
var rewards = ["old destop", "new laptop", "new destop", "monitor", "More desk space", "another moniter", 
                "a rgb mouse", "a rgb keyboard", "good pair of headphones", "more harddrive space"]
var fight = ["Debug", "ignore"]

function walk(){
    var num = Math.random()
    console.clear()
    if(num <= .4){
        console.log("You've found a " + bug())
        debug()
    } else {
        sanity += 5
        console.log("Yah! 20 lines of bug free code")
    }
}
function bug(){
    var num = Math.random()*10
    if(num <= 3){
        return "Misspelled word"
    } else if(num >= 7){
        return "Broken Function"
    } else {
        return "!!grr Just rewrite the code"
    }
}
function debug(){
    var choice = readline.keyInSelect(fight, "Do you accept the challenge")
    if(choice === 0){
        keypressing()
    } else if(choice === 1){
        if( Math.random() <= 5){
        console.log("you've lost sanity")
        sanity -= 5 
        }
    }
}
function keypressing(){
    var bughealth = (Math.floor(Math.random() * 20)+1)
    console.clear()  
        while(bughealth > 0 && sanity > 0){
        console.log("the bug is at " + bughealth)
        bughealth -= Math.floor(Math.random()*3)
        console.log("Your sanity is at " + sanity)
        sanity -= Math.floor(Math.random()*10);
        var continu = readline.keyInYN("continue");
        if(continu === false){
            sanity -= 5;
            return false;
        }
    }
    if(bughealth <= 0){
        console.log("You have succesfully fixed the bug.")
        sanity += (Math.floor(Math.random()*20)+10)
        tools.push(rewards[Math.floor(Math.random()*10)])
    }
}
console.clear()
console.log("Welcome " + name1 + ", to the world of debuging.")
while(sanity > 0){
    var choice = readline.keyInSelect(mainchoice, "What do you choose to do?")
    if(choice === 0){
        walk()
    } else if(choice === 1) {
        console.clear()
        console.log("You Have")
        console.log(tools, "your sanity " + sanity, name1)
    } else {
        break
    }
}
if(sanity < 0){
    console.clear()
    console.log("The buggy code got to you. You are now curled up in a ball, wondering what happened to your stuffed bear timmy.")
}