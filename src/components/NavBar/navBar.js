import React from 'react';

import styles from './navBar.scss';
import Drawer from '../Drawer/drawer';
import {NavLink} from 'react-router-dom';
import Burger from 'react-material-icons/icons/navigation/menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class NavBar extends React.Component {


    static childContextTypes =
    {
        muiTheme: React.PropTypes.object
    }

    getChildContext()
    {
        return {
            muiTheme: getMuiTheme({
                palette:{
                   
                }
            })
        }
    }

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
          <li className='navListItem'><NavLink className='navLink' to="/venue">VENUE</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/wedding_party">WEDDING PARTY</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/weekend_events">WEEKEND EVENTS</NavLink></li>
          <li className='navListItem initials'><NavLink className='initialsItem' to="/">J + K</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/where_to_stay">WHERE TO STAY</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/things_to_do">THINGS TO DO</NavLink></li>
          <li className='navListItem'><NavLink className='navLink' to="/registry">REGISTRY</NavLink></li> 
        </ul>
        <div className='menu'>
          <Burger onClick={this.showDrawer} style={{'width':'40px', 'height': '40px', 'marginLeft':'12px', 'marginTop':'12px'}}/>
        </div>
        <Drawer showDrawer={this.showDrawer} drawer={this.state.drawer}/>
      </div>

      )

  }
}

export default NavBar;