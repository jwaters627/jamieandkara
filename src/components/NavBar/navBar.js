import React from 'react';

import styles from './navBar.scss';
import Drawer from '../Drawer/drawer';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawer: false
    };
    }

    showDrawer = () =>{
      this.setState({drawer: !this.state.drawer})
    }

  render() {
    return(
      <div className="navContainer">
        <ul className='navList'>
          <li className='navListItem'><NavLink className='navLink' to="/about_us">ABOUT US</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/wedding_party">WEDDING PARTY</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/weekend_events">WEEKEND EVENTS</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/">J + K</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/where_to_stay">WHERE TO STAY</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/things_to_do">THINGS TO DO</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/registry">REGISTRY</NavLink></li> 
        </ul>
        <h4 onClick={this.showDrawer} className='menu'>MENU</h4>
        <Drawer showDrawer={this.showDrawer} drawer={this.state.drawer}/>
      </div>

      )

  }
}

export default NavBar;