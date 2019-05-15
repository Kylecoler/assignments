import React from 'react'

const About = ()=>{
    return(
        <div>
            <img src={require("./images/handsome.jpg")} alt="My Face" height="300pt"/>
            <p>Many years ago I discoverd "text based adventures", and since then I have always wanted to play them.
                now that I am a software engineer I figured I might as well build my own.
            </p>
            <p>linkdin</p>
            <p>github</p>
        </div>
    )
}

export default About