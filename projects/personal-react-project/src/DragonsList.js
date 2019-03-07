import React, {Component} from 'react'
import Dragondisplay from './Dragonsdisplay'
import Axios from 'axios'

class DragonList extends Component{
    constructor(){
        super()

        this.state={
            arr:[]
        }
    }

    componentDidMount(){
        Axios.get('https://api.spacexdata.com/v3/dragons').then(res=>{
            this.setState( ()=>{
                return {arr: res.data}
            })
        }
        )
    }

    render(){
        const dragon = this.state.arr.map(item=>{
            return(
                <Dragondisplay name={item.name}/>
            )
        })

        return dragon
    }

}

export default DragonList