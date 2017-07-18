import React from 'react';

import styles from './weddingParty.scss'

class WeddingParty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    }

  render() {
    return(
      <div className="eventsContainer">
        <h1 className='names'>Wedding Party</h1>
      </div>

      )

  }
}

export default WeddingParty;