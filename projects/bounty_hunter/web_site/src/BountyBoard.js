import React from 'react'

const BountyBoard = ()=>{
    return(
        <div>
            <h4>New Bountys</h4>
            <form >
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="radio" placeholder="Still Alive" value='yes' name='living'/>
                <input type="radio" placeholder="Still Alive" value='no' name='living'/>
                <input type="number" placeholder="Bounty"/>
                <input type="dropdown" placeholder="Side"/>
            </form>
        </div>
    )
}

export default BountyBoard