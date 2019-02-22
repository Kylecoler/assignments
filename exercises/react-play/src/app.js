import React, {Component} from 'react'

class App extends Component {
    constructor (){
        super()

        this.state = {
            clicks: 200,
            subTotal: 0,
            addTotal: 0
        }
    }

    render(){
        const styles ={
            width: '200px',
            height: "200px",
            border: "solid 5px black"
        }
        const style = {
            display: 'grid',
            gridTemplateColumns:'1fr 1fr',
            width: "400px"
        }

        return (
            <div>
                <div style={style}>
                    <div style={styles}>1</div>
                    <div style={styles}>2</div>
                    <div style={styles}>3</div>
                    <div style={styles}>4</div>
                </div>
            </div>
        )
    }
}

export default App