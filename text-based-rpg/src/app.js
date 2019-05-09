import React from 'react'
import Header from './header'
import Home from './home'
import {Switch, Route} from 'react-router-dom'
import About from './about'
import './style.css'

const App = () =>{
    return (
    <>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Switch>
    </>)
}

export default App