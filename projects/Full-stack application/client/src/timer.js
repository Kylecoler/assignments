import React, {Component} from 'react'

class Timer extends Component{
    constructor(){
        super()
        const today= new Date()
        this.state={
            tick:today.getSeconds()
        }
    }

    time(){
        setInterval(()=>{
            this.setState(()=>{
                const today1 = new Date()
                return{tick: today1.getSeconds()}
            })
        },1000)
    }

    render(){
        this.time()
        return(
            <div>
                {this.state.tick}
            </div>
        )
    }
}

export default Timer