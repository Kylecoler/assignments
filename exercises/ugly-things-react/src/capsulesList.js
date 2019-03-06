import React, {Component} from 'react'
import Display from './Capsuledisplay'
import Axios from 'axios'

class SpaceX extends Component{
    constructor(){
        super()
        this.state = {
            list:[]
        }
    }

    componentDidMount(){
        Axios.get('https://api.spacexdata.com/v3/capsules').then(res =>{
            this.setState( ()=>{
                return {list: res.data}
            })
            console.log(this.state.list)
        })
    }
    
    render(){


        const ship = this.state.list.map(item=> {
            return(
                <Display 
                capsule_id={item.capsule_id} 
                mission={item.missions}
                key={item.capsule_serial}/>
                )
        })
        return ship
    }
}

export default SpaceX