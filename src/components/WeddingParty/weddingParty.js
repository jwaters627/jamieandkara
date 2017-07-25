import React from 'react';

import Willie from '../../../img/willie.png';
import WillD from '../../../img/willD.png';
import Ryan from '../../../img/ryan.png';
import Tim from '../../../img/tim.png';
import Hirsch from '../../../img/hirsch.png';
import Eric from '../../../img/eric.png';
import WillK from '../../../img/willK.png';
import Jess from '../../../img/jess.png';
import Sam from '../../../img/sam.png';
import Katie from '../../../img/katie.png';
import Katelyn from '../../../img/katelyn.png';
import Mandy from '../../../img/mandy.png';
import KatieR from '../../../img/katieR.png';
import Ainsley from '../../../img/ainsley.png';
import Kunkel from '../../../img/kunkel.png';
import Kristen from '../../../img/kristen.png';
import Cal from '../../../img/cal.png';
import Sus from '../../../img/sus.png';
import Lizz from '../../../img/lizz.png';
import Deana from '../../../img/deana.png';
import Ashley from '../../../img/ashley.png';

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
          description: "Willie is Jamie's older brother and best man and was always someone Jamie looked up to and continues to impress now that he is an incredible father to two amazing kids (see 'Ring Boy' and 'Flower Girlie'). Willie is the best competitor you will ever meet and has extended a lobster roll eating contest at Eventide to any takers."
        },
        {
          key: 1,
          name: 'Will Duryea',
          title: 'Groomsman',
          picture: WillD,
          description: "Will is Jamie's brother in law and the two of them can often be found wearing matching clothing. Will has very much become a second brother to Jamie since he started dating and then married Jess."
        },
        {
          key: 2,
          name: 'Tim McLoughlin',
          title: 'Groomsman',
          picture: Tim,
          description: "Tim is Jamie's friend from Brooks. Tim is from North Carolina and essentially lived at the Waters' house during high school. The first time he stayed over he became trapped in the basement because he was scared of 'Sparky' the ferocious dog upstairs. Be sure to ask Tim about this picture and/or his airplane story."
        },
        {
          key: 3,
          name: 'Ryan Armstrong',
          title: 'Groomsman',
          picture: Ryan,
          description: "Ryan is Jamie's oldest friend from Pike and Brooks and the two of them had many 'snow days' playing Lord of the Rings video games and jamming out to Good Charlotte. If you ask Ryan about Jamie as a kid he is guaranteed to laugh until he cries as he talks about Jamie as a fat kid. "
        },
        {
          key: 4,
          name: 'Eric Amoroso',
          title: 'Groomsman',
          picture: Eric,
          description: "Eric is Jamie's friend from Brooks and roommate in the South End when Jamie moved back to Boston. Eric also responds to 'Roso' or 'Ronzio' and aside from Jamie and Kara, Eric will probably know the most people at the wedding."
        },
        {
          key: 5,
          name: 'Sam Jones',
          title: 'Groomsman',
          picture: Sam,
          description: "Sam is Jamie's freshman year roommate from Colby and despite each initially thinking the other was weird (Jamie was too quiet and Sam was too loud), Sam became Jamie's first friend in college. Sam is one of the most outgoing and entertaining people you will ever meet and has plenty of college stories to share."
        },
        {
          key: 6,
          name: 'Matt Hirsch',
          title: 'Groomsman',
          picture: Hirsch,
          description: "Matt (more commonly known as Gary) is Jamie's friend and roommate from Colby. Gary has lived in Jackson Hole and Park City since college, which made for some amazing pit stops on Jamie's road trips to and from California."
        },
        {
          key: 7,
          name: 'Will Kinder',
          title: 'Groomsman',
          picture: WillK,
          description: "Will is Jamie's friend/roommate/soccer co-captain from Colby. Will and Jamie have road tripped west together twice: once when Will moved to Montana after college and a second time when Jamie moved to San Francisco"
        },
        {
          key: 8,
          name: 'Jess Duryea',
          title: 'Bridesmaid',
          picture: Jess,
          description: "Quis mollit officia sint est officia culpa excepteur incididunt veniam mollit labore eiusmod dolore nisi sed sint occaecat."
        },
        {
          key: 9,
          name: 'Katie Dalton',
          title: 'Maid of Honor',
          picture: Katie,
          description: "Katie is Kara's sister and "
        },
        {
          key: 10,
          name: 'Ashley Aubuchon',
          title: 'Bridesmaid',
          picture: Ashley,
          description: "Ashley and Kara became friends in middle school and by high school were such good friends that Kara went through a serious mourning period when Ashley graduated. Ashley and Kara"
        },
        {
          key: 11,
          name: 'Katelyn Wallman',
          title: 'Bridesmaid',
          picture: Katelyn,
          description: "Katelyn and Kara shared a box of crayons in first grade and have been best friends ever since. They've been long distance friends since third grade but luckily had a couple of too-short years as neighbors in Boston post-college before Katelyn became a west coaster. Fun fact: Katelyn lives just a few blocks from where Jamie lived in SF!"
        },
        {
          key: 12,
          name: 'Mandy Eldridge',
          title: 'Bridesmaid',
          picture: Mandy,
          description: "Mandy was Kara’s first friend when she moved to Pepperell in third grade and the two quickly became inseparable, often found in matching outfits and completing each other’s sentences."
        },
        {
          key: 13,
          name: 'Deana Wojcik',
          title: 'Bridesmaid',
          picture: Deana,
          description: "Deana is Kara's oldest friend, starting in kindgergarten when she had to ask permission for Kara to go to the bathroom because Kara was too shy to ask for herself. Kara moved in third grade but found Deana again in their seventh grade advisory at Parker. Ask Deana about her business, the Detroit Mushroom Factory!"
        },
        {
          key: 14,
          name: 'Lizz Chiarelli',
          title: 'Bridesmaid',
          picture: Lizz,
          description: "Lizz and Kara met in seventh grade at Parker and spent endless hours watching Wedding Story on TLC and planning their future weddings. Lizz and Kara will likely be begging the band to play Vanessa Carlton's White Houses and forcing the rest of the Parker ladies to join."
        },
        {
          key: 15,
          name: 'Sarah Waterman',
          title: 'Bridesmaid',
          picture: Kunkel,
          description: "Sarah, more commonly known to Kara as Kunkel or Kunky, and Kara became friends sophomore year at Colby and lived together senior year. There was no one better to live with than Sarah, so luckily they got to spend one more year as roommates in Boston, throwing dinner parties with frozen pizza and two buck chuck."
        },
        {
          key: 16,
          name: "Kristen D'Angelo",
          title: 'Bridesmaid',
          picture: Kristen,
          description: "Kristen and Kara met at Colby sophomore year and lived together senior year. Kristen"
        },
        {
          key: 17,
          name: "Katie Donnelly",
          title: 'Bridesmaid',
          picture: KatieR,
          description: "Katie and Kara became friends sophomore year of college when Katie used to visit her now husband CJ at Colby. They spent a semester abroad together in Australia junior year, and Kara lived down the street from Katie during her brief stint in Washington, DC. "
        },
        {
          key: 18,
          name: "Ainsley Waters",
          title: 'Flower Girlie',
          picture: Ainsley,
          description: "Ainsley is Jamie's Niece and the daughter of Willie and Sus. Ainsley has loved Kara from the moment they met and she is super excited to be the 'Flower Girlie'."
        },
        {
          key: 19,
          name: "Cal Waters",
          title: 'Ring Boy',
          picture: Cal,
          description: "Cal is Jamie's nephew and the son of Willie and Sus and, as his sister has named it, he will be the 'Ring Boy'. As you can clearly see, he is an absolute party animal."
        },
        {
          key: 20,
          name: "Susanna Waters",
          title: 'Officiant',
          picture: Sus,
          description: "Sus is Jamie's Sister in Law and one of the most thoughtful and impressive women you will ever meet and Jamie and Kara immediately agreed upon Sus being the perfect choice to marry them. Sus will likely be leading (and winning) a game of 'bite the bag' at the after party."
        },
      ]
    };
    }

    componentWillMount = () =>{
      let arr = this.state.party;
      let m = arr.length;
      while(m) {
        let i = Math.floor(Math.random() * m--);
          [arr[m], arr[i]] = [arr[i], arr[m]]
      }

      this.setState({party: arr})
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