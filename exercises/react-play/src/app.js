import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super()

        this.state = {
            counter: 0,
            box1: 'gold',
            box2: 'gold',
            box3: 'gold',
            box4: 'gold',
            isWhite: true,
            styles: {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                width: "200px"
            }
        }
    }

    add = () => {
        this.setState(prevState => {
            return{
                counter: prevState.counter +1}
            
        })
    }

    BW = () => {
        if(this.state.isWhite){
            this.setState({box1: 'black', box2: "black", box3:"black", box4: 'black', isWhite:false})
        } else {
            this.setState({box1: 'white', box2: "white", box3:"white", box4: 'white', isWhite:true})
        }
    }

    purple = () => {this.setState({box1: 'purple', box2: 'purple'})}

    lb=()=>{this.setState({box3: 'blue'})}
    rb=()=>{this.setState({box4: 'blue'})}
    tlr=()=>{this.setState({box1:"orange"})}
    trr=()=>{this.setState({box2:"green"})}
    blr=()=>{this.setState({box3:"pink"})}
    brr=()=>{this.setState({box4:"red"})}

    render(){
        const style1 = {
            width:"100px",
            height:"100px",
            background: this.state.box1
        }
        const style2 = {
            width:"100px",
            height:"100px",
            background: this.state.box2
        }
        const style3 = {
            width:"100px",
            height:"100px",
            background: this.state.box3
        }
        const style4 = {
            width:"100px",
            height:"100px",
            background: this.state.box4
        }
        return(
            <div style={this.state.styles}>
                <div style={style1}>{this.state.counter}</div>
                <div style={style2}>{this.state.counter}</div>
                <div style={style3}>{this.state.counter}</div>
                <div style={style4}>{this.state.counter}</div>
                {/* <button onClick={this.add}>num +</button> */}
                <button onClick={this.BW}>Black/White</button>
                <button onClick={this.purple}>Top purple</button>
                <button onClick={this.lb}>bottom left blue</button>
                <button onClick={this.rb}>bottom right blue</button>
                <button onClick={this.tlr}>top left random</button>
                <button onClick={this.trr}>top right random</button>
                <button onClick={this.blr}>bottom left random</button>
                <button onClick={this.brr}>bottom right random</button>
            </div>
        )
    }
}

export default App