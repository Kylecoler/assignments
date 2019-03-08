import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = ()=>{
    const styles ={
        display:'grid',
        gridTemplateColumns:"1fr 1fr 1fr 1fr",
        textAlign:"Center",
        background:"black",
        height:"60pt",
        fontSize:"20pt"
    }
    return(
        <div style={styles}>
            <Link to="/" className="link1">Home</Link>
            <Link to='/ListOfEverything' className="link1">List Of Everything</Link>
            <Link to="/About" className="link1">About</Link>
            <a href="https://www.spacex.com" className="link1" target="_blank" rel="noopener noreferrer">SpaceX Home Page</a>
        </div>
    )
}

export default NavBar