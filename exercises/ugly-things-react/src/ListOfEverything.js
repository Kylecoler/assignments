import React from 'react'
import ShipList from './capsulesList'
import SideBar from './SideBar'
import {Switch ,Route} from 'react-router-dom'
import CoresList from './CoreList'

const ListOfEverything = () =>{
    return(
        <div style={{display:"grid", gridTemplateColumns:"1fr 9fr"}}>
            <SideBar/>
            <div>
            <Switch>
                <Route path="/ListOfEverything/capsulesList" component={ShipList}/>
                <Route path="/ListOfEverything/CoresList" component={CoresList}/>
            </Switch>
            </div>
        </div>
    )
}

export default ListOfEverything

// style={{display:"inline-block", verticalAlign:"top"}}