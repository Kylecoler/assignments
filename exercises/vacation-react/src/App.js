import React from 'react';
import Arr from "./arr"

const App = () => {
    const vacspot = Arr.map(spot => {
            

        const style1 = {
            height: "210px"
        }
        if(spot.timeToGo === "Spring"){
            style1.background = "linear-gradient(yellow, skyblue 80%, green 10%)"
        } else if(spot.timeToGo === "Summer"){
            style1.background = "linear-gradient(yellow,orange,red)"
        } else if (spot.timeToGo === "Winter"){
            style1.background = "linear-gradient(white, aqua, blue)"
        } else {
            style1.background = "linear-gradient(gold 50%, brown, darkred)"

        }
        
        let cosst = ()=>{
            if(spot.price <= 500){
                return "$"
            } else if (spot.price > 500 && spot.price < 1000){
                return "$$"
            } else {
                return "$$$"
            }
        }


        return (
            <div style={style1}>
                <h1>{spot.place}</h1>
                <h3>Best time to see: {spot.timeToGo}</h3>
                <p>Cost: {cosst()}{spot.price}</p>
            </div>
        )
    })


    const style = {
        display:"grid",
        gridTemplateColumns: "repeat(auto-fit,350px)",
        gridGap:"5px",
        textAlign: "center",
        justifyContent: "space-around"
    }

    return (
        <div style={style}>
            {vacspot}
        </div>
    )
}

export default App