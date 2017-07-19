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
          description: "Ex duis aliqua cupidatat ut in nostrud mollitiam deserunt aliqua consectetur id elit veniam consequat ut. Veniam aliqua mollit tempor dolor aliquip et ad sint. Ex cillum nisi in non sed ullamco sint ex. Dolore aliquip aliquip commodo non veniam occaecat veniam exercitation duis nisi esse ex sit in minim incididunt cillum tempor. Dolore pariatur sint ad fugiat anim eu cupidatat veniam mollit non culpa commodo nulla anim. Sint dolor eiusmod dolor dolore magna officia cillum fugiat id in ut tempor eiusmod tempor dolor ut excepteur nisi. Lorem ipsum id pariatur nostrud sint ut laboris non consectetur voluptate dolor mollit aliqua qui elit. Culpa fugiat nulla ullamco labore esse et do laborum proident enim amet est quis sint qui eiusmod ea dolor. Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 1,
          name: 'Will Duryea',
          title: 'Groomsmen',
          picture: Will,
          description: "Lorem ipsum ut ex voluptate excepteur ad tempor cillum duis aute reprehenderit d nulla eiusmod sed aliquip consequat culpa est aute ea aliqua ut pariatur mollit fugiat consectetur tempor. Nulla id tempor aliqua mollit amet nulla quis occaecat. Culpa duis nulla aliquip dolore sit aliquip nulla cillum veniam in eu cupidatat reprehenderit nulla ut et. Lorem ipsum velit ea excepteur nulla ex duis deserunt ut consequat. Lorem ipsum commodo exercitation id velit sint exercitation aliqua dolore ut quis ullamco anim qui nisi exercitation excepteur. Adipisicing pariatur dolor laboris excepteur magna ullamco sunt ad sint laborum nisi enim nostrud. Exercitation reprehenderit esse aliqua in sint officia aliqua voluptate aute id sit proident veniam sunt do deserunt. Excepteur est dolore nulla aute in pariatur dolor quis dolore exercitation minim consequat commodo in. "
        },
        {
          key: 2,
          name: 'Ryan Armstrong',
          title: 'Groomsmen',
          picture: Ryan,
          description: "Lorem ipsum ut ex voluptate excepteur ad tempor cillum duis aute culpa aliquip enim consectetur occaecat occaeca ut pariatur mollit fugiat consectetur tempor. Nulla id tempor aliqua mollit amet nulla quis occaecat. Culpa duis nulla aliquip dolore sit aliquip nulla cillum veniam in eu cupidatat reprehenderit nulla ut et. Lorem ipsum velit ea excepteur nulla ex duis deserunt ut consequat. Lorem ipsum commodo exercitation id velit sint exercitation aliqua dolore ut quis ullamco anim qui nisi exercitation excepteur. Adipisicing pariatur dolor laboris excepteur magna ullamco sunt ad sint laborum nisi enim nostrud. Exercitation reprehenderit esse aliqua in sint officia aliqua voluptate aute id sit proident veniam sunt do deserunt. Excepteur est dolore nulla aute in pariatur dolor quis dolore exercitation minim consequat commodo in. "
        },

      ]
    };
    }

    renderParty = (person) =>{
      return(
        <div className='personContainer'>
          <img className='personImage' src={person.picture} />
          <div className='nameAndTitleContainer'>
            <p className='personName'>{person.name}</p>
            <p className='personTitle'>{person.title}</p>
          </div>
          <div className='personDescriptionContainer'>
            <p className='personDescription'>{person.description}</p>
          </div>
        </div>)
    }

  render() {
    return(
      <div className="eventsContainer">
        {this.state.party.map(this.renderParty, this)}
      </div>

      )

  }
}

export default WeddingParty;