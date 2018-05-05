import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Home from './components/Home/home';
import WeekendEvents from './components/WeekendEvents/weekendEvents';
import WhereToStay from './components/WhereToStay/whereToStay';
import ThingsToDo from './components/ThingsToDo/thingsToDo';
import Registry from './components/Registry/registry';
import WeddingParty from './components/WeddingParty/weddingParty';
import AboutUs from './components/AboutUs/aboutUs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  
    };
    }

  render() {
    return(
     <HashRouter history={history}>
      <MuiThemeProvider>
        <div style={{'width':'100%', 'height':'auto', 'minHeight':'100vh',  'background': 'linear-gradient(to top, rgba(255,255,255,0.6), rgba(255,255,255,0.6) 59%, rgba(255,255,255,0.95) 100%),url(https://image.freepik.com/free-photo/brick-wall_1154-638.jpg)' ,'backgroundSize':'cover', 'boxShadow': 'inset 0 0 0 1000px rgba(173,216,235,.1)'}}>
          
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/weekend_events" component={WeekendEvents} />
          <Route exact path="/where_to_stay" component={WhereToStay} />
          <Route exact path="/things_to_do" component={ThingsToDo} />
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/wedding_party" component={WeddingParty} />
          <Route exact path="/venue" component={AboutUs} />
        </div>
      </MuiThemeProvider>
	   </HashRouter>

      )
  }
}

export default Routes;