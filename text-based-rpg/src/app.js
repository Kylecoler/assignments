import React from 'react'
import Header from './header'
import Home from './home'
import {Switch, Route} from 'react-router-dom'
import About from './about'
import Game1 from './game1'
import './style.css'

const App = () =>{
    return (
    <>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path="/game1" component={Game1}/>
        </Switch>
    </>)
}

export default App