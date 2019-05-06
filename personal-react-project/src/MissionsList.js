import React, {Component} from 'react'
import Axios from 'axios'
import MissionDisplay from './Dragonsdisplay'

class MissionList extends Component{
    constructor(){
        super()

        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get("https://api.spacexdata.com/v3/missions").then(res=>{
            this.setState(()=>{
                return {arr:res.data}
            })
        })
    }

    render(){
        const mission = this.state.arr.map(item=>{
            return <MissionDisplay name={item.mission_name}/>
        })
        return mission
    }
}

export default MissionList