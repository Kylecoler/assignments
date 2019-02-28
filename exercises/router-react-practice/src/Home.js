import React from 'react'
import img from './brain.jpg'

const Home = () =>{
    const Styles ={
        h1:{
            background: `url(${img}) no-repeat top center`,
            height: 500,
            textAlign: 'center'
        },
        p:{
            textAlign: "center"
        }
    }
    return(
        <React.Fragment>
            <div style={Styles.h1}>
                <h1>Real Thought</h1>
            </div>
            <div style={Styles.p}>
                <p>Welcome to real thought, were your wildest ideas can come true.</p>
                <p>Have a plan, come to us to help make it real</p>
                <p>Latest projects</p>
            </div>
        </React.Fragment>
    )
}

export default Home