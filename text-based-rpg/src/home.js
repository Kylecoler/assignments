import React from 'react'
import {Link} from 'react-router-dom'


const Home=()=>{
    return(
        <div>
            <div className='gameCard'>
                <Link to='game1' className='gameLink'>
                    <h3>Game Name</h3>
                    <img src={require("./images/rpg.jpg")} alt="Game pic" width='250pt' height='250pt'/>
                    <p>Summary</p>
                </Link>
            </div>
        </div>
    )
}

export default Home