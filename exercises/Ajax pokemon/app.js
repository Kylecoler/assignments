//  uncomment for node \/
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var jasonData = xhr.responseText;
        var data = JSON.parse(jasonData);
        var list = data.objects[0].pokemon
        list.forEach(element => {
            var li = document.createElement("li")
            var text = document.createTextNode(element.name)
            li.appendChild(text)
            document.getElementById("pokemonList").appendChild(li)
            console.log(element.name)
        });
    }
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();