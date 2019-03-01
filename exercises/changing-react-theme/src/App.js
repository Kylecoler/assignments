import React from 'react';
import {themeSwitch} from './Button'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import './App.css'

const App = ({switcher, theme})=>{
    console.log(switcher)
    return(
        <div className={theme ? "light" : "dark"}>
        {/* <div className="light"> */}
            <Header/>
            <button onClick={switcher}>Theme</button>
            <Body/>
            <Footer/>
        </div>
    )
}

export default themeSwitch(App)