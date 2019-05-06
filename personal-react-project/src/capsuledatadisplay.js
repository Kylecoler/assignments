import React, {Component} from 'react'
import Axios from 'axios'
import Capsuledata from './capsuledata'

class CapsuleDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],
            props:props
        }
    }
    
    componentDidMount(){
        Axios.get('https://api.spacexdata.com/v3/capsules').then(res=>{
            this.setState(()=>{
                return {arr:res.data}
            })
        })
    }
    
    render(){
        const param = this.state.arr.find((caps)=>{return(caps.capsule_serial === this.state.props.match.params.id)})
        return(
            <Capsuledata
                serial={param && param.capsule_serial}
                id={param && param.capsule_id}
                status={param && param.status}
                launch={param && param.original_launch}
                unix={param && param.original_launch_unix}
                missions={param && param.missions}
                landing={param && param.landings}
                type={param && param.type}
                details={param && param.details}
                count={param && param.reuse_count}
            />
        )
    }
}

export default CapsuleDetails