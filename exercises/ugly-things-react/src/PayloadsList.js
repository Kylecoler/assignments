import React, {Component} from 'react'
import Axios from 'axios'
import PayloadsDisplay from './PayloadsDisplay'

class PayloadsList extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get('https://api.spacexdata.com/v3/payloads').then(res=>{
            this.setState(()=>{
                return {arr:res.data}
            })
        })
    }

    render(){
        const payload = this.state.arr.map(item=>{
            return <PayloadsDisplay name={item.payload_id}/>
        })
        return payload
    }

}

export default PayloadsList