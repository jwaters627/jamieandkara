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

  
	render() {
		return( 
			<div>
				<NavBar />
			</div>	
		)
	}
};

export default Main;