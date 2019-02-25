import React from 'react';
import values from "./hero-list.json";

// const phrase = ()=>{
//     alert("name")
// }


const App = () => {

    const heroCard = ()=>{
        const arr = (Object.values(values))

        return(arr.map((obj, i) => {
            console.log(obj)
            const styles = {
                display:"table",
                background: `url(${obj.imgUrl})`,
                width: "200px",
                height: "200px",
                textAlign: "center",
                color:"gold"
            }
            return (
                <div style={styles} key={i+obj.name} onClick={()=>{alert(obj.catch)}}>
                    <h1 style={{display:"table-cell", verticalAlign:"middle"}}>{obj.name}</h1>
                </div>
            )})
    )}

    return (
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))"}} >
            {heroCard()}
        </div>
    )
}

export default App