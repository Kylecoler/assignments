import React, {Component} from 'react'
import Axios from 'axios'
import HistoryDisplay from './Dragonsdisplay'

class HistoryList extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get('https://api.spacexdata.com/v3/history').then(res=>{
            this.setState(()=>{
                return {arr: res.data}
            })
        })
    }

    render(){
        const history = this.state.arr.map(item=>{
                return <HistoryDisplay name={item.title}/>
            })

        return history
    }

}

export default HistoryList