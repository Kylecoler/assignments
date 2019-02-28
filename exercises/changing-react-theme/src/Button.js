import React, {Component} from  'react';

class Switch extends Component{
    constructor(){
        super()

        this.state={
            theme: true
        }
    }
    Switcher = () =>{
        this.setState(prevState => ({theme: !prevState.theme}))
    }
    render(){
        const Comp = this.props.component;
        return (
            <Comp on={this.state.theme} toggle={this.Switcher}{...this.props}/>
        )
    }
}

export default Switch

export function themeSwitch(C){
    return function (props){
        <Switch component={C}{...props}/>
    }
}