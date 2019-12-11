const rndnum = function(){
    let DieVal = document.getElementById("DiceValue").value
    let DieNum = document.getElementById("DiceNum").value
    const Result = []
    for (i = 0; i < DieNum; i++){
        Result.push(Math.floor(Math.random() * Math.floor(DieVal))+1)
    }
    // document.getElementById('result').innerHTML = Math.floor(Math.random() * 10)
    document.getElementById('result').innerHTML = Result
}