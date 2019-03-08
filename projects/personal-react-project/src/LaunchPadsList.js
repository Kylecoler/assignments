import React, {Component} from 'react'
import Axios from 'axios'
import LaunchPadsDisplay from './Dragonsdisplay'

class LaunchPadsList extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get('https://api.spacexdata.com/v3/launchpads').then(res=>{
            this.setState(()=>{
                return {arr:res.data}
            })
        })
    }
    
    render(){
        const launchpad = this.state.arr.map(item=>{
            return <LaunchPadsDisplay name={item.location.name}/>
        })
        return launchpad
    }
}

export default LaunchPadsList