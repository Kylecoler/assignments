var goomba = document.getElementById("goomba")
var bobomb = document.getElementById("bob-omb")
var cheep = document.getElementById("cheep")

goomba.addEventListener("change",function gommbakilled(){
        document.getElementById("ggone").innerHTML = (
            goomba.value *5)
})

bobomb.addEventListener("change",function bobombkilled(){
        document.getElementById("bgone").innerHTML = (
            bobomb.value * 7)
})

cheep.addEventListener("change", function bobombkilled(){
        document.getElementById("cgone").innerHTML = (
            cheep.value * 11)
})

window.addEventListener("change",
    function(){
        (document.getElementById("total").innerHTML = (
            (goomba.value * 5)+(bobomb.value*7)+(cheep.value*11)
        ))
})