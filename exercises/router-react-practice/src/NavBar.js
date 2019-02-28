import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const Styles ={
        display: 'flex',
        justifyContent: 'space-around',
        background:"rgba(137, 43, 226, 0.5)",
        fontSize:'30px',
        height: '60px',
        alignItems:"center"
    }


    return (
        <div style={Styles}>
            <Link to="./" style={{color:"yellow"}}>Home</Link>
            <Link to='./About' style={{color:"yellow"}}>About</Link>
            <Link to='./Contact' style={{color:"yellow"}}>Contact</Link>
        </div>
    )
}

export default NavBar