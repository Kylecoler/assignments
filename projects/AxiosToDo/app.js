// var axios = require("axios")

axios.get("https://api.vschool.io/kyle/todo/").then((response)=>{
    response.data.forEach((object)=>{
        showData(object)
        console.log(object._id)
    })
})

function showData(input){
    var div = document.createElement("div")
    var pard = document.createElement("p")
    var parp = document.createElement("p")
    var pari = document.createElement("img")
    var che = document.createElement("input")
    var part = complete(input)
    che.type = "checkbox"
    che.id = `${input._id}`
    part.appendChild(document.createTextNode(`Title: ${input.title}`))
    pard.appendChild(document.createTextNode(`Description: ${input.description}`))
    parp.appendChild(document.createTextNode(`Price: ${input.price}`))
    pari.setAttribute('src', `${input.imgUrl}`)
    pari.setAttribute('width', '200px')
    pari.setAttribute('height', '200px')
    div.appendChild(part)
    div.appendChild(che)
    div.appendChild(pard)
    div.appendChild(parp)
    div.appendChild(pari)
    document.getElementById("stuff").appendChild(div)
}

function complete(input1){
    var newp = document.createElement("p")
    if(input1.completed){
        newp.style.textDecoration = "line-through"
    }
    return newp
}

document.addEventListener("submit", function(e){
    e.preventDefault();

    newTodo = {
        title: document.newToDo.title.value,
        description: document.newToDo.description.value,
        price: document.newToDo.price.value,
        imgUrl: document.newToDo.imgUrl.value
    }

    axios.post("https://api.vschool.io/kyle/todo/", newTodo).then(function(response){
        // console.log(response.data)
        showData(response.data)
    })
})