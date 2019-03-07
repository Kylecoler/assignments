import React, {Component} from 'react'
import Axios from 'axios'
import LauchDisplay from './LaunchDisplay'

class LaunchesList extends Component{
    constructor(){
        super()

        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get('https://api.spacexdata.com/v3/launches').then(res=>{
            this.setState(()=>{
                return {arr:res.data}
            })
        })
    }

    render(){
        const launch = this.state.arr.map(item=>{
           return <LauchDisplay name={item.mission_name}/>
        })
        return launch
    }

}

export default LaunchesList