import React, {Component} from 'react'

class Game1 extends Component{
    constructor(){
        super()
        this.state={
            text:"Welcome Adventurer, what shall we call you by?",
            userInput:'',
            name:'',
        }
    }

    readfunction=(e)=>{
        e.preventDefault()
        if(!this.state.name){
            this.setState(()=>{
                return{name:this.state.userInput,
                       text:`Greetings ${this.state.userInput}, our village has been raided by undead will you help us?  Yes or No`,
                       userInput:''
                }
            })
        } else {
            switch(this.state.userInput){
                case 'left':
                    this.setState(()=>{
                        return{text:'you have turned left'}
                    })
                    break;
                default:
                    this.setState(()=>{
                        return{text:"Either you spelled something wrong or you found a path I didn't plan on"}
                    })
            }
        }
    }

    change=(e)=>{
        const value = e.target.value
        this.setState(()=>{
            return{userInput:value}
        })
    }

    render(){
        return(
            <div className='gameContainer'>
                <p>{this.state.text}</p>
                <form onSubmit={this.readfunction}>
                    <input type="text" onChange={this.change} value={this.state.userInput} className='input' name='input'/>
                    <input type="submit" className='submit'/>
                </form>
            </div>
        )
    }
}

export default Game1