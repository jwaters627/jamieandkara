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
        <h1 className='registry'>Registry</h1>
        <a className="registryLink" href="https://www.zola.com/registry/karaandjamie">Zola</a>
        <a className="registryLink" href="https://www.crateandbarrel.com/gift-registry/kara-dalton-and-james-waters/r5769120">Crate & Barrel</a>
      </div>

      )

  }
}

export default Registry;