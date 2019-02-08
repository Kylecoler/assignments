var readline =  require('readline-sync');
// greet players with message
// get players name
// W to walk 1/3 chance to fight
// random enemy bandit, wolf, bear
// attack or run, run 1/2 of attack from enemy
// attack random bettween 5-20, enemy attacks back
// when enemy killed player full health and gets item
// when killed display death meassage
// type print to see name, health, and full inventory

var name = readline.question("What is your name dear typist?:  ")
console.log("Welcome " + name + ", to the world of debuging.")
var sanity = 200
var mainchoice = ["walk", "check tools"]
var tools = ["old laptop"]
var rewards = ["old destop", "new laptop", "new destop", "monitor", ""]

while(sanity > 0){
    readline.keyInSelect(mainchoice, "What do you choose to do?")
    if("walk"){
        function walk(){
            walk
        }
    } else {
        console.log(tools)
    }
}