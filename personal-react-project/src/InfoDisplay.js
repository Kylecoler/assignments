import React from 'react'

const InfoDisplay = (props)=>{
    return(
        <div style={{textAlign:"center"}}>
            <h1>{props.name}</h1>
            <h3>{props.founder}</h3>
        </div>
    )
}

export default InfoDisplay