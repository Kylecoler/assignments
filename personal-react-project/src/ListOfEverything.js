import React from 'react'
import CapsulesList from './capsulesList'
import SideBar from './SideBar'
import {Switch ,Route} from 'react-router-dom'
import CoresList from './CoreList'
import DragonsList from './DragonsList'
import HistoryList from './HistoryList'
import InfoList from './InfoList'
import LandingPadsList from './LandingPadsList'
import LaunchesList from './LaunchesList'
import LaunchPadsList from './LaunchPadsList'
import MissionsList from './MissionsList'
import PayloadsList from './PayloadsList'
import RocketsList from './RocketsList'
import RoadsterList from './RoadsterList'
import ShipList from './ShipList'
import Capsuledata from './capsuledatadisplay';

const ListOfEverything = () =>{
    return(
        <div style={{display:"grid", gridTemplateColumns:"1fr 9fr"}}>
            <SideBar/>
            <div>
            <Switch>
                <Route path="/ListOfEverything/capsulesList" component={CapsulesList}/>
                <Route path="/ListOfEverything/CoresList" component={CoresList}/>
                <Route path='/ListOfEverything/DragonsList' component={DragonsList}/>
                <Route path='/ListOfEverything/HistoryList' component={HistoryList}/>
                <Route path='/ListOfEverything/InfoList' component={InfoList}/>
                <Route path='/ListOfEverything/LandingPadsList' component={LandingPadsList}/>
                <Route path='/ListOfEverything/LaunchesList' component={LaunchesList}/>
                <Route path='/ListOfEverything/LaunchPadsList' component={LaunchPadsList}/>
                <Route path='/ListOfEverything/MissionsList' component={MissionsList}/>
                <Route path='/ListOfEverything/PayloadsList' component={PayloadsList}/>
                <Route path='/ListOfEverything/RocketsList' component={RocketsList}/>
                <Route path='/ListOfEverything/RoadsterList' component={RoadsterList}/>
                <Route path='/ListOfEverything/ShipsList' component={ShipList}/>
                <Route path="/listOfEverything/:id" component={Capsuledata}/>
            </Switch>
            </div>
        </div>
    )
}

export default ListOfEverything

// style={{display:"inline-block", verticalAlign:"top"}}