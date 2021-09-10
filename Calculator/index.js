let sValue = ''
let result = []

const cumput = function(operate){
    if(result.length<3){
        return
    }
    else{
        let temp = 0
        switch(result[1]){
            case '+':
                temp = result[0] + result[2]
                result.splice(0,3,temp)
                console.log(result)
            break;
            case '-':
                temp = result[0] - result[2]
                result.splice(0,3,temp)
                console.log(result)
            break;
            case '*':
                temp = result[0] * result[2]
                result.splice(0,3,temp)
                console.log(result)
            break;
            case '/':
                temp = result[0] / result[2]
                result.splice(0,3,temp)
                console.log(result)
            break;
        }
    }
}

const upDateScreen = function(value){
    if(value=='/'||value=='*'||value=='-'||value=='+'){
        result.push(Number(sValue));
        result.push(value)
        console.log(result,result.length)
        sValue = ''
        cumput(value)
    }
    else if(value!='='){
        sValue = sValue.concat(value)
        document.getElementById("screen").innerHTML = sValue
    }
    else {
        result.push(Number(sValue))
        sValue = ''
        cumput(value)
        document.getElementById('screen').innerHTML = result
        result = []
    }      
}