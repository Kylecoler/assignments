import React, {Component}from 'react'
import Core from './CoreDisplay'
import Axios from 'axios'

class CoreList extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get("https://api.spacexdata.com/v3/cores").then(res=>{
            this.setState( ()=>{
                return {arr: res.data}
            })
        })
    }
    
    render(){
        const core = this.state.arr.map(aCore=>{
                return <Core core_serial={aCore.core_serial}/>
        })
        return core
    }
}

export default CoreList