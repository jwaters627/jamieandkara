import React from 'react';

import styles from './drawer.scss';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import Close from 'react-material-icons/icons/navigation/close';

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
    let linkOne = classNames(
          'linkOne',
          {
            'open': (this.props.drawer)
          }
        )
    let linkTwo = classNames(
          'linkTwo',
          {
            'open': (this.props.drawer)
          }
        )
    let linkThree = classNames(
          'linkThree',
          {
            'open': (this.props.drawer)
          }
        )
    let linkFour = classNames(
          'linkFour',
          {
            'open': (this.props.drawer)
          }
        )
    let linkFive = classNames(
          'linkFive',
          {
            'open': (this.props.drawer)
          }
        )
    let linkSix = classNames(
          'linkSix',
          {
            'open': (this.props.drawer)
          }
        )
    let linkSeven = classNames(
          'linkSeven',
          {
            'open': (this.props.drawer)
          }
        )
    return(
      <div className={drawerClass}>
        <ul className='navDrawerList'>
          <li onClick={this.props.showDrawer} className='linkZero'><Close style={{'height' :'40px', 'width':'40px', 'float':'right', 'marginTop':'12px', 'marginRight':'12px'}} /></li>
          <li onClick={this.props.showDrawer} className={linkOne}><NavLink className='navLink' to="/about_us">ABOUT US</NavLink></li>
          <li onClick={this.props.showDrawer} className={linkTwo}><NavLink className='navLink' to="/wedding_party">WEDDING PARTY</NavLink></li>
          <li onClick={this.props.showDrawer} className={linkThree}><NavLink className='navLink' to="/weekend_events">WEEKEND EVENTS</NavLink></li>
          <li onClick={this.props.showDrawer} className={linkFour}><NavLink className='navLink' to="/">J + K</NavLink></li>
          <li onClick={this.props.showDrawer} className={linkFive}><NavLink className='navLink' to="/where_to_stay">WHERE TO STAY</NavLink></li>
          <li onClick={this.props.showDrawer} className={linkSix}><NavLink className='navLink' to="/things_to_do">THINGS TO DO</NavLink></li>
          <li onClick={this.props.showDrawer} className={linkSeven}><NavLink className='navLink' to="/registry">REGISTRY</NavLink></li> 
        </ul>
      </div>

      )

  }
}

export default Drawer;