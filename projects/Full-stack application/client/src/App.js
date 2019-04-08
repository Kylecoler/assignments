import React from 'react'
import Calender from './calendar'
import Navbar from './navbar'
import Login from './login'
import Signup from './signup'
import {Switch, Route} from 'react-router-dom'

const App = ()=>{
    return(
        <div>
            <Navbar/>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/calendar' component={Calender}/>
            </Switch>
        </div>
    )
}

export default App