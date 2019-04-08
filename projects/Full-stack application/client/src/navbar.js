import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login In</Link>
            <Link to='/calendar'>Calendar</Link>
        </div>
    )
}

export default Navbar