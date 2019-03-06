import React from 'react'
import Home from './Home'
import ListOfEverything from './ListOfEverything'
import About from './About'
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import './App.css'

const App = () =>{
    return(
        <>
        <NavBar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/ListOfEverything' component={ListOfEverything}/>
            <Route path="/About" component={About}/>
        </Switch>
        </>
    )
}

export default App