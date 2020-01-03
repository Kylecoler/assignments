
const rndnum = function(){
    let DieVal = document.getElementById("DiceValue").value
    let DieNum = document.getElementById("DiceNum").value
    const Result = []
    for (i = 0; i < DieNum; i++){
        Result.push(Math.floor(Math.random() * Math.floor(DieVal))+1)
    }
    document.getElementById('result').innerHTML = Result
    setTimeout(reset, 5000)
    if(DieVal == 4){
        document.getElementById('d4animation').classList.add('go')
        document.getElementById("d4animation").classList.toggle('hide')
        setTimeout(toggle=()=>{
            document.getElementById('d4animation').classList.toggle('hide')
        },5000)
    } else if(DieVal == 6){
        document.getElementById('d6animation').classList.add('go')
        document.getElementById("d6animation").classList.toggle('hide')
        setTimeout(toggle=()=>{
            document.getElementById('d6animation').classList.toggle('hide')
        },5000)
    } else if(DieVal == 8){
        document.getElementById('d8animation').classList.add('go')
        document.getElementById('d8animation').classList.toggle('hide')
        setTimeout(toggle=()=>{
            document.getElementById('d8animation').classList.toggle('hide')
        },5000)
    }
}

reset = function(){
    document.getElementById('d4animation').classList.remove('go')
    document.getElementById('d6animation').classList.remove('go')
    document.getElementById('d8animation').classList.remove('go')
}
// possibly adding cloned elements
// add cool D&D background