import React, {Component} from 'react'
import Axios from 'axios'
import LandingPadsDisplay from './LandingPadsDisplay'

class LandingPadsList extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get('https://api.spacexdata.com/v3/landpads').then(res=>{
            this.setState(()=>{
                return{arr:res.data}
            })
        })
    }

    render(){
        const landing = this.state.arr.map(item=>{
            return <LandingPadsDisplay name={item.full_name}/>
        })
        return landing
    }
}

export default LandingPadsList