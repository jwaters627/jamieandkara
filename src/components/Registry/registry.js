import React from 'react';

import styles from './registry.scss'

class Registry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    }

  render() {
    return(
      <div className="eventsContainer">
        <h1 className='names'>Registry</h1>
      </div>

      )

  }
}

export default Registry;