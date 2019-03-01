import React, {Component} from  'react';

class Switch extends Component{
    constructor(){
        super()

        this.state={
            theme: true
        }
    }
    switcher = () =>{
        this.setState(prevState => ({theme: !prevState.theme}))
    }
    render(){
        const Comp = this.props.component;
        return (
            <Comp theme={this.state.theme} switcher={this.switcher}{...this.props}/>
        )
    }
}

export default Switch;

export function themeSwitch(C){
    return function (props){
        return <Switch component={C}{...props}/>
    }
}