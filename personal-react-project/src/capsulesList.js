import React, {Component} from 'react'
import Display from './Capsuledisplay'
import Axios from 'axios'
import {Link} from 'react-router-dom'

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
        })
    }
    
    render(){
        // const param = this.state.list.find((caps)=>{return(caps.capsule_serial === "C101")})
        // console.log(param)
        const ship = this.state.list.map(item=> {
            return(
                <Link   to={`/listOfEverything/${item.capsule_serial}`} 
                        style={{textAlign:"center", color:"white", 
                        textDecoration:"none"}}>
                    <Display 
                    capsule_id={item.capsule_id} 
                    mission={item.missions}
                    key={item.capsule_serial}/>
                </Link>
            )
        })
        return ship
    }
}

export default SpaceX