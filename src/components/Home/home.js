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
				<div style={{'width':'60%', 'marginLeft':'20%', 'marginTop':'20px', 'height':'auto', 'minHeight':'60vh', 'backgroundImage':"url("+ jacksonHole + ")", 'backgroundSize':'cover', 'border': '6px solid rgba(0,0,0,1)'}}>
					
				</div>
				<h1 className='weddingTitle'>Kara Anne Dalton and James Stryker Waters</h1>
				<p>Ocean Gateway Portland Maine</p>
				<p>May 19, 2018</p>
			</div>	
		)
	}
};

export default Main;