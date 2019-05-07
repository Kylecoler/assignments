import React from 'react'
import {withSelect} from './select'

const Nav = ({setIndex, index})=>{
    return(
        <div>
            <p onClick={()=>{setIndex(0)}}>Japan</p>
            <p onClick={()=>{setIndex(1)}}>Germany</p>
        </div>
    )
}

export default withSelect(Nav)