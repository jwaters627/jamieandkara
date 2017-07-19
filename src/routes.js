import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Main from './components/Home/home';
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
     <HashRouter history={history}>
		  <div style={{'width':'100%', 'height':'auto', 'minHeight':'100vh', 'backgroundImage':"url(https://image.freepik.com/free-photo/brick-wall_1154-638.jpg)", 'backgroundSize':'cover', 'boxShadow': 'inset 0 0 0 1000px rgba(255,255,255,.5)'}}>
  			
        <NavBar />
        <Route exact path="/" component={Main} />
  			<Route exact path="/weekend_events" component={WeekendEvents} />
  			<Route exact path="/where_to_stay" component={WhereToStay} />
  			<Route exact path="/things_to_do" component={ThingsToDo} />
  			<Route exact path="/registry" component={Registry} />
  			<Route exact path="/wedding_party" component={WeddingParty} />
  			<Route exact path="/about_us" component={AboutUs} />
  		</div>
	   </HashRouter>

      )

  }
}

export default Routes;