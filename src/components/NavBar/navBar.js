import React from 'react';

import styles from './navBar.scss';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    }

  render() {
    return(
      <div className="navContainer">
        <ul className='navList'>
          <li className='navListItem'><NavLink className='navLink' to="/where_to_stay">WHERE TO STAY</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/things_to_do">THINGS TO DO</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/registry">REGISTRY</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/wedding_party">WEDDING PARTY</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/about_us">ABOUT US</NavLink></li>
        </ul>
      </div>

      )

  }
}

export default NavBar;