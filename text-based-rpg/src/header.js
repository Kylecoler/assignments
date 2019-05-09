import React from 'react'
import {Link} from 'react-router-dom'

const Header = ()=>{
    return (
        <div className='header'>
            <p><Link to='/' className='link'>Home</Link></p>
            <p><Link to='/about' className='link'>About</Link></p>
        </div>)
}

export default Header