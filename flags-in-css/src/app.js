import React, {Component} from 'react'
import './style.css'

class Flag extends Component{
    constructor(){
        super()
        this.state={
            index:1
        }
    }

    setIndex = (num) => {
        this.setState(()=>({index:num}))
    }

    render(){
        const flags = [
            <div class="flag" id="france">
                <div class="blue inlineblock width30 height100"></div>
                <div class="white inlineblock width30 height100"></div>
                <div class="red inlineblock width30 height100"></div>
            </div>,
            <div class="flag" id="germany">
                <div class="black width100 height30"></div>
                <div class="red width100 height30"></div>
                <div class="yellow width100 height30"></div>
            </div>,
            <div class="flag" id="madagascar">
                <div class="inlineblock white height100 width30"></div>
                <div class="inlineblock width60 height100">
                    <div class="red width100 height50"></div>
                    <div class="green  width100 height50"></div>
                </div>
            </div>,
            <div class="square white" id="switzerland">
                <div class="width100 height42">
                    <div class="inlineblock height100 width42 red"></div>
                    <div class="inlineblock height50 width16 red top"></div>
                    <div class="inlineblock height100 width42 red"></div>
                </div>
                <div class="width100 height16">
                    <div class="inlineblock height100 width16 red"></div>
                    <div class="inlineblock height100 width60"></div>
                    <div class="inlineblock height100 width16 red right"></div>
                </div>
                <div class="width100 height42">
                    <div class="inlineblock height100 width42 red"></div>
                    <div class="inlineblock height50 width16 red"></div>
                    <div class="inlineblock height100 width42 red"></div>
                </div>
            </div>,
            <div class="flag" id="sweden">
                <div class="height42">
                    <div class="inlineblock blue height100 width30"></div>
                    <div class="inlineblock yellow height100 width16"></div>
                    <div class="inlineblock blue height100 width49"></div>
                </div>
                <div class="yellow height16 width100"></div>
                <div class="height42"> 
                    <div class="inlineblock blue height100 width30"></div>
                    <div class="inlineblock yellow height100 width16"></div>
                    <div class="inlineblock blue height100 width49"></div>
                </div>
            </div>,
            <div class="flag" id="gambia">
                <div class="width100 height30 red"></div>
                <div class="width100 height30 blue border"></div>
                <div class="width100 height30 green"></div>
            </div>,
            <div class="flag red" id="tonga">
                <div class="corner ">
                    <div class="width100 height42">
                        <div class="inlineblock height100 width42 white"></div>
                        <div class="inlineblock height50 width16 white top"></div>
                        <div class="inlineblock height100 width42 white"></div>
                    </div>
                    <div class="width100 height16">
                        <div class="inlineblock height100 width16 white"></div>
                        <div class="inlineblock height100 width60"></div>
                        <div class="inlineblock height100 width16 white right"></div>
                    </div>
                    <div class="width100 height42">
                        <div class="inlineblock height100 width42 white"></div>
                        <div class="inlineblock height50 width16 white"></div>
                        <div class="inlineblock height100 width42 white"></div>
                    </div>
                </div>
            </div>,
            <div class="flag white" id="japan">
                <div class="center red circle"></div>
            </div>,
            <div class="flag" id="greece">
                <div class="width30 height50 corner inlineblock white">
                    <div class="width100 height42">
                        <div class="inlineblock height100 width42 blue"></div>
                        <div class="inlineblock height50 width16 white top"></div>
                        <div class="inlineblock height100 width42 blue"></div>
                    </div>
                    <div class="width100 height16">
                        <div class="inlineblock height100 width16 white"></div>
                        <div class="inlineblock height100 width60"></div>
                        <div class="inlineblock height100 width16 white right"></div>
                    </div>
                    <div class="width100 height42">
                        <div class="inlineblock height100 width42 blue"></div>
                        <div class="inlineblock height50 width16 white"></div>
                        <div class="inlineblock height100 width42 blue"></div>
                    </div>
                </div>
                <div class="inlineblock width60 height50">
                    <div class="blue width100 height20"></div>
                    <div class="white width100 height20"></div>
                    <div class="blue width100 height20"></div>
                    <div class="white width100 height20"></div>
                    <div class="blue width100 height20"></div>
                </div>
                <div class="width100 height12 white"></div>
                <div class="width100 height12 blue"></div>
                <div class="width100 height12 white"></div>
                <div class="width100 height12 blue"></div>
            </div>,
            <div class="flag" id="niger">
                <div class="width100 height30 orange"></div>
                <div class="width100 height30 white">
                    <div class="center orange circle2"></div>
                </div>
                <div class="width100 height30 green"></div>
            </div>,
            <div class="flag red" id="maldives">
                <div class="green center width60 height50">
                    <div class="center circle3 white"></div>
                    <div class="offset circle3 green"></div>
                </div>
            </div>,
            <div class="flag blue border1" id="challangeAccepted">
                <div class="circle4 white center">
                    <div class="circle5 center relative">
                        <div class="leaf1">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf2">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf3">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf4">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf5">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf6">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf7">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf8">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf9">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf10">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf11">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf12">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf13">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf14">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf15">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf16">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf17">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf18">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf19">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf20">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf21">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                        <div class="leaf22">
                            <div>
                                <div class="circle6 green " ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                            <div class="rotate">
                                <div class="circle6 green" ></div>
                                <div class="circle6 white petal"></div>
                            </div>
                        </div>
                    </div>
                    <div class="circle5 center relative">
                        <div class="shield">
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            <div>

            </div>
        ]
        return(
            <div className='main'>
                <div>
                    <p onClick={()=>{this.setIndex(0)}}>France</p>
                    <p onClick={()=>{this.setIndex(1)}}>Germany</p>
                    <p onClick={()=>{this.setIndex(2)}}>Madagascar</p>
                    <p onClick={()=>{this.setIndex(3)}}>Switzerland</p>
                    <p onClick={()=>{this.setIndex(4)}}>Sweden</p>
                    <p onClick={()=>{this.setIndex(5)}}>Gambia</p>
                    <p onClick={()=>{this.setIndex(6)}}>Tonga</p>
                    <p onClick={()=>{this.setIndex(7)}}>Japan</p>
                    <p onClick={()=>{this.setIndex(8)}}>Greece</p>
                    <p onClick={()=>{this.setIndex(9)}}>Niger</p>
                    <p onClick={()=>{this.setIndex(10)}}>Maldives</p>
                </div>
                {flags[this.state.index]}
            </div>
        )
    }
}
export default Flag