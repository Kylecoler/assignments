import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from "./Home"
import About from './About'
import Contact from './Contact'

const App = () => {
    return(
        <React.Fragment>
            <NavBar />
            <br/>
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route path ="/About"component={About}/>
                <Route path= "/Contact" component={Contact}/>
            </Switch>
            <br/>
            <Footer />
        </React.Fragment>
    )
}

export default App