import React from 'react'

const Capsuledata=(props)=>{
    return <div style={{textAlign:"center"}}>
        <p>Capsule Serial: {props.serial}</p>
        <p>Capsule Id: {props.id}</p>
        <p>Status: {props.status}</p>
        <p>Original Launch: {props.launch}</p>
        <p>Original Launch Unix: {props.unix}</p>
        <p>Missions:</p>
        <ul style={{listStylePosition:"inside"}}>
            {props.missions && props.missions.map(mission=>{
                return <li>Name: {mission.name}, Flight: {mission.flight}</li>
            })}
        </ul>
        <p>Landings: {props.landing}</p>
        <p>Type: {props.type}</p>
        <p>Details: {props.details}</p>
        <p>Reuse Count: {props.count}</p>
    </div>
}

export default Capsuledata