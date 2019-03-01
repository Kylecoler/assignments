import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeT from './HomeT'
import Assign from './Assignments'
import NavBar from './NavBar'

const App = () =>{
    return(
        <div>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={HomeT}/>
                <Route path='/Assingments' component={Assign}/>
            </Switch>
        </div>
    )
}

export default App