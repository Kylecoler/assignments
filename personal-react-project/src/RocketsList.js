import React, {Component} from 'react'
import Axios from 'axios'
import RocketsDisplay from './RocketsDisplay'

class RocketsList extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get("https://api.spacexdata.com/v3/rockets").then(res=>{
            this.setState(()=>{
                return {arr:res.data}
            })
        })
    }

    render(){
        const rocket = this.state.arr.map(item=>{
            return <RocketsDisplay name={item.id}/>
        })
        return rocket
    }

}

export default RocketsList