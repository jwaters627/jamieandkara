import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Main from './components/main';
import WeekendEvents from './components/WeekendEvents/weekendEvents';
import WhereToStay from './components/WhereToStay/whereToStay';
import ThingsToDo from './components/ThingsToDo/thingsToDo';
import Registry from './components/Registry/registry';
import WeddingParty from './components/WeddingParty/weddingParty';
import AboutUs from './components/AboutUs/aboutUs';

import longLakeSunset from '../img/longLakeSunset.png';
import jacksonHole from '../img/jacksonHole.png';


class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	currentComponent:'',
    	backgroundImage: jacksonHole
    };
    }

  render() {
    return(
     <BrowserRouter >
		<div style={{'width':'100%', 'height':'auto', 'minHeight':'100vh', 'backgroundImage':"url("+ this.state.backgroundImage + ")", 'backgroundSize':'cover'}}>
			
			<Route path="/" component={Main} />
			<Route path="/weekend_events" component={WeekendEvents} />
			<Route path="/where_to_stay" component={WhereToStay} />
			<Route path="/things_to_do" component={ThingsToDo} />
			<Route path="/registry" component={Registry} />
			<Route path="/wedding_party" component={WeddingParty} />
			<Route path="/about_us" component={AboutUs} />
		</div>
	</BrowserRouter>

      )

  }
}

export default Routes;