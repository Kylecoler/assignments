import React, {Component} from 'react'

class Game1 extends Component{
    constructor(){
        super()
        this.state={
            text:"Welcome Adventurer, what shall we call you by?",
            userInput:'',
            name:'',
            inventory:['stick, ','leather armor, ','0 health potions, '],
            path:'0a'
        }
    }

    readfunction=(e)=>{
        e.preventDefault()
        if(!this.state.name){
            this.setState(()=>{
                let newName = this.state.userInput.charAt(0).toUpperCase() + this.state.userInput.slice(1).toLowerCase()
                return{name:newName,
                        text:`Greetings ${newName}, our village has been raided by undead will you help us,  
                             Yes or No?`,
                        userInput:''
                }
            })
        } else if(this.state.userInput.toLowerCase() === 'quit'|| this.state.userInput.toLowerCase() === 'inventory') {
            switch(this.state.userInput.toLowerCase()){
                case 'quit':
                    this.setState(()=>{
                        return{text:'Welcome Adventurer, what shall we call you by?',
                                userInput:'',
                                name:''
                        }
                    })
                    break
                case 'inventory':
                    this.setState(()=>{
                        return{text:this.state.inventory, userInput:''}
                    })
                    break
                default:
                    this.default()
            }
        } else {
            switch(this.state.path){
                case '0a':
                    this.path0a()
                    break
                case '0b':
                    this.path0b()
                    break
                default:
                    this.default()
            }
        }
    }

    path0a=()=>{
        switch(this.state.userInput.toLowerCase()){
            case 'yes':
                this.setState(()=>{
                    return{text:'Thank you, we have been plagued by the undead.', userInput:'',path:'0b'}
                })
                break;
            case 'no':
                this.setState(()=>{
                    return{text:'I see, adventurer, is it money you seek?', userInput:''}
                })
                break
            default:
                this.default()
        }        
    }
    path0b=()=>{}
    path1a=()=>{}
    path1b=()=>{}
    default=()=>{
        this.setState(()=>{
            return{text:"Either you spelled something wrong or you found a path I didn't plan on"}
        })
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