import React, {Component} from 'react'
import Axios from 'axios'
import ShipDisplay from './Dragonsdisplay'

class ShipList extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }
    componentDidMount(){
        Axios.get("https://api.spacexdata.com/v3/ships").then(res=>{
            this.setState(()=>{
                return {arr:res.data}
            })
        })
    }
    render(){
        const ship = this.state.arr.map(item=>{
            return <ShipDisplay name={item.ship_name}/>
        })
        return ship
    }
}

export default ShipList