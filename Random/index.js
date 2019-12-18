const rndnum = function(){
    document.getElementById('animation').classList.add('go')
        reset=()=>{
            document.getElementById('animation').classList.remove('go')
        }
    let DieVal = document.getElementById("DiceValue").value
    let DieNum = document.getElementById("DiceNum").value
    const Result = []
    for (i = 0; i < DieNum; i++){
        Result.push(Math.floor(Math.random() * Math.floor(DieVal))+1)
    }
    document.getElementById('result').innerHTML = Result
}