import React, {Component} from 'react'
import Axios from 'axios'
import HistoryDisplay from './HistoryDisplay'

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
                return <HistoryDisplay title={item.title}/>
            })

        return history
    }

}

export default HistoryList