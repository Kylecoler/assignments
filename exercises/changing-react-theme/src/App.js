import React from 'react';
import {themeSwitch} from './Button'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

const App = ({Switcher})=>{
    return(
        <div className="">
            <Header/>
            <button onClick={Switcher}></button>
            <Body/>
            <Footer/>
        </div>
    )
}

export default themeSwitch(App)