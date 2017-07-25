import React from 'react';
import styles from './home.scss';

import AboutUs from '../AboutUs/aboutUs'
import NavBar from '../NavBar/navBar';
import longLakeSunset from '../../../img/longLakeSunset.png';
import jacksonHole from '../../../img/jacksonHole.png';


class Main extends React.Component {
  constructor(props) {
    super(props);
	this.state = {};    
  }

  
	render() {
		return( 
			<div className='mainContainer'>
				<h1 className='weddingTitle'>Kara Anne Dalton<br/>+<br/> James Stryker Waters</h1>
				<h2>Ocean Gateway in Portland, Maine</h2>
				<h2>May 19, 2018</h2>
				<AboutUs />
			</div>	
		)
	}
};

export default Main;