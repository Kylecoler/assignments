const rndnum = function(){
    document.getElementById('animation').classList.add('go')
    document.getElementById('d4animation').classList.add('go')
    setTimeout(reset, 5000)
    let DieVal = document.getElementById("DiceValue").value
    let DieNum = document.getElementById("DiceNum").value
    const Result = []
    for (i = 0; i < DieNum; i++){
        Result.push(Math.floor(Math.random() * Math.floor(DieVal))+1)
    }
    document.getElementById('result').innerHTML = Result
}

reset = function(){
    document.getElementById('animation').classList.remove('go')
    document.getElementById('d4animation').classList.remove('go')
}