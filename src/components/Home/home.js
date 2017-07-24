import React from 'react';
import styles from './home.scss';

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
				
				<h1 className='weddingTitle'>Kara Anne Dalton and James Stryker Waters</h1>
				<p>Ocean Gateway Portland Maine</p>
				<p>May 19, 2018</p>
				<div className='imageDiv'>
					
				</div>
			</div>	
		)
	}
};

export default Main;