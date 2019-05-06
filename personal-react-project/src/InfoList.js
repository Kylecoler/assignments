import React, {Component} from 'react'
import Axios from 'axios'
import InfoDisplay from './InfoDisplay'

class InfoList extends Component{
    constructor(){
        super()

        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get("https://api.spacexdata.com/v3/info").then(res=>{
            this.setState(()=> {
                return {arr: [res.data]}
            })
        })
    }

    render(){
        const info = this.state.arr.map(item=>{
            return (<InfoDisplay name={item.name} founder={item.founder}/>)
        })

        return info
    }
}

export default InfoList