import React from 'react'
import Nav from './nav'
import {withSelect} from './select'
import './style.css'

const Flag = ({setIndex, index})=>{
    const flags = [
        <div className="japan">can u see this</div>, 
        <div className="germany">something else</div>
    ]
    return(
        <div className='main'>
            <Nav/>
            {flags[index]}
        </div>
    )
}

export default withSelect(Flag)