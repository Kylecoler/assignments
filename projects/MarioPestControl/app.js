var goomba = document.getElementById("goomba").value;

document.getElementById("goomba").onchange(function(){
    document.getElementById("ggone").innerHTML += `${goomba*5}`
})




// document.getElementById("goomba").addEventListener("change", function(){
//     document.getElementById("ggone").innerHTML += goomba * 5}
// )

// document.getElementById("bob-omb").addEventListener("change"){
//     document.getElementById("bgone").innerHTML += "bob-omb" *7
// }

// document.getElementById("cheep").addEventListener("change"){
//     document.getElementById("cgone").innerHTML += "cheep" * 11
// }

// "ggone" + "bgone" + "cgone" = "total"