import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar =()=> {
    const Style = {
        display:"grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(50pt, 1fr))",
        textAlign:"center",
        background:"rgba(255, 30, 190, 0.3)",
        height:"70pt",
        alignItems:"center"
    }
    return( 
        <div style={Style}>
            <div>
                <Link to="./" className="link">Home</Link> 
            </div>
            <div>
                <Link to="./Assingments" className="link">Assignments</Link>
            </div>
            <div>
                <Link to="" className="link">Events</Link>
            </div>
            <div>
                <Link to="" className="link">Students</Link>
            </div>
            <div>
                <h3>Welcome: <span>Teacher</span></h3>
                <p><span>teacher</span><span>math</span></p>
            </div>
        </div>)
}

export default NavBar