import React, {Component} from 'react'

class Select extends Component{
    constructor(props){
        super(props)
        this.state={
            index:1
        }
        this.setIndex = this.setIndex.bind(this)
    }

    setIndex(num){
        this.setState(()=>({index:num}))
        
    }

    render(){
        const index = this.state.index
        const {component, ...props} =this.props
        const C = component
        return(
            <C index={index} setIndex={this.setIndex}{...props}/>
        )
    }
}

export const withSelect = C => props => <Select component={C}{...props}/>