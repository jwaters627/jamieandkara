import React from 'react';

import Willie from '../../../img/willie.png';
import Will from '../../../img/will.png';
import Ryan from '../../../img/ryan.png';
import styles from './weddingParty.scss'

class WeddingParty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      party: [
        {
          key: 0,
          name: 'Willie Waters',
          title: 'Best Man',
          picture: Willie,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 1,
          name: 'Will Duryea',
          title: 'Groomsmen',
          picture: Will,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 2,
          name: 'Ryan Armstrong',
          title: 'Groomsmen',
          picture: Ryan,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },

      ]
    };
    }

    renderParty = (person) =>{
      return(
        <div className='personContainer'>
          <img className='personImage' src={person.picture} />
          <div className="rightContainer">
            <div className='nameAndTitleContainer'>
              <p className='personName'>{person.name}</p>
              <p className='personTitle'>{person.title}</p>
            </div>
            <div className='personDescriptionContainer'>
              <p className='personDescription'>{person.description}</p>
            </div>
          </div>
        </div>)
    }

  render() {
    return(
      <div className="partyContainer">
        {this.state.party.map(this.renderParty, this)}
      </div>

      )

  }
}

export default WeddingParty;