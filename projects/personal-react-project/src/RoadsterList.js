import React, {Component} from 'react'
import Axios from 'axios'
import RoadsterDisplay from './Dragonsdisplay'

class RoadsterList extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get('https://api.spacexdata.com/v3/roadster').then(res=>{
            this.setState(()=>{
                return {arr:[res.data]}
            })
        })
    }

    render(){
        const roadster = this.state.arr.map(item=>{
            return <RoadsterDisplay name={item.name}/>
        })
        return roadster
    }
}

export default RoadsterList