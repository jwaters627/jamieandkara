import React from 'react';
import styles from './home.scss';

import SlideShow from '../SlideShow/slideShow'
import NavBar from '../NavBar/navBar';
import longLakeSunset from '../../../img/longLakeSunset.png';
import jacksonHole from '../../../img/jacksonHole.png';
import Flamingos from '../../../img/flamingos.png';
import Xmas from '../../../img/xmas.png';
import FloridaSunset from '../../../img/floridaSunset.png';
import Florida from '../../../img/florida.png';
import LongLake from '../../../img/longLake.png';
import KellysWedding from '../../../img/kellysWedding.png';
import KellyWeddingBeach from '../../../img/kellyWeddingBeach.png';
import SamAndMeg from '../../../img/samAndMeg.png';
import Acoaxet from '../../../img/acoaxet.png';
import BeeHive from '../../../img/beeHive.png';
import Boat from '../../../img/boat.png';
import Kayak from '../../../img/kayak.png';
import Pool from '../../../img/pool.png';
import LongLakeDockWithAinsley from '../../../img/longLakeDockWithAinsley.png';


class Main extends React.Component {
  constructor(props) {
    super(props);
	this.state = {
		days: '',
		image: [longLakeSunset, jacksonHole, Xmas, FloridaSunset, LongLake, KellysWedding, KellyWeddingBeach, SamAndMeg, Florida, Acoaxet, BeeHive, Boat, Kayak ]
	};    
  }

  componentWillMount =() =>{
  	let date = new Date("May 19, 2018").getTime();
  	let now = new Date().getTime();
  	let distance = date - now;
  	let days = Math.floor(distance / (1000 * 60 *60 * 24));
  	this.setState({days: days})
  }


  
	render() {
		return( 
			<div className='mainContainer'>
				<h1 className='weddingTitle'>Kara Anne Dalton<br/>+<br/> James Stryker Waters</h1>
				<h2>Ocean Gateway in Portland, Maine</h2>
				<h2>May 19, 2018</h2>
				<SlideShow image={this.state.image}/>
				<h2>{this.state.days} days until the wedding!</h2>
			</div>	
		)
	}
};

export default Main;