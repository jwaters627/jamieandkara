import React from 'react';

import styles from './drawer.scss';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

class Drawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    }

   

  render() {

    let drawerClass = classNames(
          'drawerContainer',
          {
            'open': (this.props.drawer)
          }
        )
    return(
      <div className={drawerClass}>
        <ul className='navDrawerList'>
          <li onClick={this.props.showDrawer} className='navDrawerListItem'><NavLink className='navLink' to="/about_us">ABOUT US</NavLink></li>
          <li onClick={this.props.showDrawer} className='navDrawerListItem'><NavLink className='navLink' to="/wedding_party">WEDDING PARTY</NavLink></li>
          <li onClick={this.props.showDrawer} className='navDrawerListItem'><NavLink className='navLink' to="/weekend_events">WEEKEND EVENTS</NavLink></li>
          <li onClick={this.props.showDrawer} className='navDrawerListItem'><NavLink className='navLink' to="/">J + K</NavLink></li>
          <li onClick={this.props.showDrawer} className='navDrawerListItem'><NavLink className='navLink' to="/where_to_stay">WHERE TO STAY</NavLink></li>
          <li onClick={this.props.showDrawer} className='navDrawerListItem'><NavLink className='navLink' to="/things_to_do">THINGS TO DO</NavLink></li>
          <li onClick={this.props.showDrawer} className='navDrawerListItem'><NavLink className='navLink' to="/registry">REGISTRY</NavLink></li> 
        </ul>
      </div>

      )

  }
}

export default Drawer;