import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import BountyBoard from './BountyBoard'

const App = ()=>{
    return(
        <>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/bountyboard' component={BountyBoard}/>
                <Route path='/about' component={About}/>
            </Switch>
            <Footer/>
        </>
    )
}

export default App