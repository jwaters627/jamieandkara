import React from 'react';

import NavBar from './NavBar/navBar';
import WeekendEvents from './WeekendEvents/weekendEvents';
import longLakeSunset from '../../img/longLakeSunset.png';
import jacksonHole from '../../img/jacksonHole.png';


class Main extends React.Component {
  constructor(props) {
    super(props);
	this.state = {};    
  }

  content() {
		if(this.props.children) {
			return (
				this.props.children
				)
		} else {
			return (
				<WeekendEvents />
			)
		}
	}
	render() {
		return( 
			<div style={{'width':'100%', 'height':'auto', 'minHeight':'100vh', 'backgroundImage':"url("+jacksonHole + ")", 'backgroundSize':'cover'}}>
				<NavBar />
					{this.content()}
			</div>	
		)
	}
};

export default Main;