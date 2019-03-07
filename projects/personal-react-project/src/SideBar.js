import React from 'react'
import {Link} from 'react-router-dom'

const SideBar = ()=>{
    const style ={
        background:"grey",
        color:"white",
        fontSize:"20pt",
        display:"block"
    }
    const Style={
        display:"inline-block"
    }
    return(
        <div style={Style}>
            <Link to="/ListOfEverything/capsulesList" className="link">Capsules</Link>
            <Link to='/ListOfEverything/CoresList' className="link">Cores</Link>
            <Link to='/ListOfEverything/DragonsList' className="link">Dragons</Link>
            <Link to='/ListOfEverything/HistoryList' className="link">History</Link>
            <Link to='/ListOfEverything/InfoList' className="link">Info</Link>
            <Link to='/ListOfEverything/LandingPadsList' className="link">Landing Pads</Link>
            <Link to='/ListOfEverything/LaunchesList' className="link">Launches</Link>
            <Link to='/ListOfEverything/LaunchPadsList' className="link">Launch Pads</Link>
            <Link to='/ListOfEverything/MissionsList' className="link">Missions</Link>
            <Link to='/ListOfEverything/PayloadsList' className="link">Payloads</Link>
            <Link to='/ListOfEverything/RocketsList' className="link">Rockets</Link>
            <Link to='/ListOfEverything/RoadsterList' className="link">Roadster</Link>
            <Link to='/ListOfEverything/ShipsList' className="link">Ships</Link>
        </div>
    )
}

export default SideBar