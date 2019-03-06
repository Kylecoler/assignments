import React from 'react'

const Display = (props)=>{
    return(
        <div style={{textAlign:"center"}}>
            <h1>{props.capsule_id}</h1>
            {
                props.mission[0] && props.mission[0].name 
                ? (props.mission.map(name =>{
                    return(<p key={name.flight}>{name.name}</p>)
                })): "not flown"
            }
        </div> )

}
export default Display