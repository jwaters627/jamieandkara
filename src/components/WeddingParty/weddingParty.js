import React from 'react';
import PropTypes from 'prop-types';
import Person from '../Person/person';
import RightArrow from 'react-material-icons/icons/hardware/keyboard-arrow-right';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Willie from '../../../img/willie.png';
import Willie2 from '../../../img/willie2.png';
import Willie3 from '../../../img/willie3.png';
import Willie4 from '../../../img/willie4.png';
import Willie5 from '../../../img/willie5.png';
import Willie6 from '../../../img/willie6.png';
import Willie7 from '../../../img/willie7.png';
import WillD from '../../../img/willD.png';
import WillD2 from '../../../img/willD2.png';
import WillD4 from '../../../img/willD4.png';
import WillD5 from '../../../img/willD5.png';
import WillD6 from '../../../img/willD6.png';
import Ryan from '../../../img/ryan.png';
import Ryan2 from '../../../img/ryan2.png';
import Ryan3 from '../../../img/ryan3.png';
import Ryan4 from '../../../img/ryan4.png';
import Ryan5 from '../../../img/ryan5.png';
import Tim from '../../../img/tim.png';
import Tim2 from '../../../img/tim2.png';
import Tim3 from '../../../img/tim3.png';
import Tim4 from '../../../img/tim4.png';
import Tim5 from '../../../img/tim5.png';
import Tim6 from '../../../img/tim6.png';
import Hirsch from '../../../img/hirsch.png';
import Hirsch2 from '../../../img/hirsch2.png';
import Hirsch3 from '../../../img/hirsch3.png';
import Hirsch4 from '../../../img/hirsch4.png';
import Hirsch5 from '../../../img/hirsch5.png';
import Eric from '../../../img/eric.png';
import Eric2 from '../../../img/eric2.png';
import Eric3 from '../../../img/eric3.png';
import Eric4 from '../../../img/eric4.png';
import Eric5 from '../../../img/eric5.png';
import WillK from '../../../img/willK.png';
import WillK2 from '../../../img/willK2.png';
import WillK3 from '../../../img/willK3.png';
import WillK4 from '../../../img/willK4.png';
import WillK5 from '../../../img/willK5.png';
import Jess from '../../../img/jess.png';
import Jess2 from '../../../img/jess2.png';
import Jess3 from '../../../img/jess3.png';
import Jess4 from '../../../img/jess4.png';
import Jess5 from '../../../img/jess5.png';
import Jess6 from '../../../img/jess6.png';
import Jess7 from '../../../img/jess7.png';
import Jess8 from '../../../img/jess8.png';
import Sam from '../../../img/sam.png';
import Sam2 from '../../../img/sam2.png';
import Sam3 from '../../../img/sam3.png';
import Sam4 from '../../../img/sam4.png';
import Sam5 from '../../../img/sam5.png';
import Katie from '../../../img/katie.png';
import Katie2 from '../../../img/katie2.png';
import Katie3 from '../../../img/katie3.png';
import Katie4 from '../../../img/katie4.png';
import Katie5 from '../../../img/katie5.png';
import Katie6 from '../../../img/katie6.png';
import Katelyn from '../../../img/katelyn.png';
import Katelyn2 from '../../../img/katelyn2.png';
import Katelyn3 from '../../../img/katelyn3.png';
import Katelyn4 from '../../../img/katelyn4.png';
import Katelyn5 from '../../../img/katelyn5.png';
import Katelyn6 from '../../../img/katelyn6.png';
import Katelyn7 from '../../../img/katelyn7.png';
import Mandy from '../../../img/mandy.png';
import Mandy2 from '../../../img/mandy2.png';
import Mandy3 from '../../../img/mandy3.png';
import Mandy4 from '../../../img/mandy4.png';
import Mandy5 from '../../../img/mandy5.png';
import Mandy6 from '../../../img/mandy6.png';
import KatieR from '../../../img/katieR.png';
import KatieR2 from '../../../img/katieR2.png';
import KatieR3 from '../../../img/katieR3.png';
import KatieR4 from '../../../img/katieR4.png';
import KatieR5 from '../../../img/katieR5.png';
import Ainsley from '../../../img/ainsley.png';
import Ainsley2 from '../../../img/ainsley2.png';
import Ainsley3 from '../../../img/ainsley3.jpg';
import Ainsley4 from '../../../img/ainsley4.png';
import Ainsley5 from '../../../img/ainsley5.png';
import Ainsley6 from '../../../img/ainsley6.png';
import Ainsley7 from '../../../img/ainsley7.png';
import Ainsley8 from '../../../img/ainsley8.png';
import Ainsley9 from '../../../img/ainsley9.png';
import Ainsley10 from '../../../img/ainsley10.png';
import Kunkel from '../../../img/kunkel.png';
import Kunkel2 from '../../../img/kunkel2.png';
import Kunkel3 from '../../../img/kunkel3.png';
import Kunkel4 from '../../../img/kunkel4.png';
import Kunkel5 from '../../../img/kunkel5.png';
import Kunkel6 from '../../../img/kunkel6.png';
import Kristen from '../../../img/kristen.png';
import Kristen2 from '../../../img/kristen2.png';
import Kristen3 from '../../../img/kristen3.png';
import Kristen4 from '../../../img/kristen4.png';
import Kristen5 from '../../../img/kristen5.png';
import Kristen6 from '../../../img/kristen6.png';
import Kristen7 from '../../../img/kristen7.png';
import Cal from '../../../img/cal.png';
import Cal2 from '../../../img/cal2.png';
import Cal3 from '../../../img/cal3.png';
import Cal4 from '../../../img/cal4.png';
import Cal5 from '../../../img/cal5.png';
import Cal6 from '../../../img/cal6.png';
import Sus from '../../../img/sus.png';
import Sus2 from '../../../img/sus2.png';
import Sus3 from '../../../img/sus3.png';
import Sus4 from '../../../img/sus4.png';
import Lizz from '../../../img/lizz.png';
import Lizz2 from '../../../img/lizz2.png';
import Lizz3 from '../../../img/lizz3.png';
import Lizz4 from '../../../img/lizz4.png';
import Lizz5 from '../../../img/lizz5.png';
import Lizz6 from '../../../img/lizz6.png';
import Deana from '../../../img/deana.png';
import Deana2 from '../../../img/deana2.png';
import Deana3 from '../../../img/deana3.png';
import Deana4 from '../../../img/deana4.png';
import Deana5 from '../../../img/deana5.png';
import Ashley from '../../../img/ashley.png';
import Ashley2 from '../../../img/ashley2.png';
import Ashley3 from '../../../img/ashley3.png';
import Ashley4 from '../../../img/ashley4.png';
import Ashley5 from '../../../img/ashley5.png';
import Ashley6 from '../../../img/ashley6.png';
import Ashley7 from '../../../img/ashley7.png';
import Nikki from '../../../img/nikki.png';
import Nikki2 from '../../../img/nikki2.png';
import Nikki3 from '../../../img/nikki3.png';

import styles from './weddingParty.scss'

class WeddingParty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      person: false,
      party: [
        {
          key: 0,
          name: 'Willie Waters',
          title: 'Best Man',
          images: [Willie, Willie2, Willie3, Willie4, Willie5, Willie6, Willie7],
          picture: Willie,
          description: "Willie is Jamie's older brother and best man and was always someone Jamie looked up to and continues to impress now that he is an incredible father to two amazing kids (see 'Ring Boy' and 'Flower Girlie'). Willie is the best competitor you will ever meet and has extended a lobster roll eating contest at Eventide to any takers."
        },
        {
          key: 1,
          name: 'Will Duryea',
          title: 'Groomsman',
          images: [WillD, WillD2, WillD6, WillD4, WillD5],
          picture: WillD,
          description: "Will is Jamie's brother in law and the two of them can often be found wearing matching clothing. Will has very much become a second brother to Jamie since he started dating and then married Jess."
        },
        {
          key: 2,
          name: 'Tim McLoughlin',
          title: 'Groomsman',
          images: [Tim, Tim2, Tim3, Tim4, Tim5, Tim6],
          picture: Tim,
          description: "Tim is Jamie's friend from Brooks. Tim is from North Carolina and essentially lived at the Waters' house during high school. The first time he stayed over he became trapped in the basement because he was scared of 'Sparky' the ferocious dog upstairs. Be sure to ask Tim about this picture and/or his airplane story."
        },
        {
          key: 3,
          name: 'Ryan Armstrong',
          title: 'Groomsman',
          images: [Ryan, Ryan2, Ryan3, Ryan4, Ryan5],
          picture: Ryan,
          description: "Ryan is Jamie's oldest friend from Pike and Brooks and the two of them had many 'snow days' playing Lord of the Rings video games and jamming out to Good Charlotte. If you ask Ryan about Jamie as a kid he is guaranteed to laugh until he cries as he talks about Jamie as a fat kid. "
        },
        {
          key: 4,
          name: 'Eric Amoroso',
          title: 'Groomsman',
          images: [Eric, Eric2, Eric3, Eric4, Eric5],
          picture: Eric,
          description: "Eric is Jamie's friend from Brooks and roommate in the South End when Jamie moved back to Boston. Eric also responds to 'Roso' or 'Ronzio' and aside from Jamie and Kara, Eric will probably know the most people at the wedding."
        },
        {
          key: 5,
          name: 'Sam Jones',
          title: 'Groomsman',
          images: [Sam5, Sam2, Sam, Sam3, Sam4],
          picture: Sam5,
          description: "Sam is Jamie's freshman year roommate from Colby and despite each initially thinking the other was weird (Jamie was too quiet and Sam was too loud), Sam became Jamie's first friend in college. Sam is one of the most outgoing and entertaining people you will ever meet and has plenty of college stories to share."
        },
        {
          key: 6,
          name: 'Matt Hirsch',
          title: 'Groomsman',
          images: [Hirsch, Hirsch2, Hirsch3, Hirsch4, Hirsch5],
          picture: Hirsch,
          description: "Matt (more commonly known as Gary) is Jamie's friend and roommate from Colby. Gary has lived in Jackson Hole and Park City since college, which made for some amazing pit stops on Jamie's road trips to and from California."
        },
        {
          key: 7,
          name: 'Will Kinder',
          title: 'Groomsman',
          images: [WillK, WillK2, WillK3, WillK4, WillK5],
          picture: WillK,
          description: "Will is Jamie's friend/roommate/soccer co-captain from Colby. Will and Jamie have road tripped west together twice: once when Will moved to Montana after college and a second time when Jamie moved to San Francisco."
        },
        {
          key: 8,
          name: 'Jess Duryea',
          title: 'Bridesmaid',
          images: [Jess, Jess2, Jess3, Jess4, Jess5, Jess6, Jess7, Jess8],
          picture: Jess,
          description: "Jess is Jamie's younger sister and had the honor of being present for Kara and Jamie's first 'date' at Cape Ann Brewery. Since then, Kara and Jess have become close friends, between trips to Naples, Acadia, and Montreal, and countless lazy Sundays in Boston. With countless adventures to come, Jess is pretty much the best sister-in-law Kara can imagine."
        },
        {
          key: 9,
          name: 'Katie Dalton',
          title: 'Maid of Honor',
          images: [Katie, Katie2, Katie3, Katie4, Katie5, Katie6],
          picture: Katie,
          description: "Katie is Kara's younger sister and counter-part in many years of imaginary games. Katie is also the most bad-ass athlete you'll probably ever meet; despite being two years younger, Katie attempted to coach Kara in soccer (unfortunately, she didn't have much luck) and had a distinct advantage in any wrestling match."
        },
        {
          key: 10,
          name: 'Ashley Aubuchon',
          title: 'Bridesmaid',
          images: [Ashley, Ashley2, Ashley3, Ashley4, Ashley5, Ashley6, Ashley7],
          picture: Ashley,
          description: "Ashley and Kara became friends in middle school and by high school were such good friends that Kara went through a serious mourning period when Ashley graduated. After a long five years apart, they reunited in the Boston area. Ashley and Jamie share an interest in using logic to poke fun of Kara."
        },
        {
          key: 11,
          name: 'Katelyn Wallman',
          title: 'Bridesmaid',
          images: [Katelyn, Katelyn2, Katelyn3, Katelyn4, Katelyn5, Katelyn6, Katelyn7],
          picture: Katelyn,
          description: "Katelyn and Kara shared a box of crayons in first grade and have been best friends ever since. They've been long distance friends since third grade but luckily had a couple of too-short years as neighbors in Boston post-college before Katelyn became a west coaster. Fun fact: Katelyn lives just a few blocks from where Jamie lived in SF!"
        },
        {
          key: 12,
          name: 'Mandy Eldridge',
          title: 'Bridesmaid',
          images: [Mandy, Mandy2, Mandy3, Mandy4, Mandy5, Mandy6],
          picture: Mandy,
          description: "Mandy was Kara’s first friend when she moved to Pepperell in third grade and the two quickly became inseparable, often found in matching outfits, completing each other’s sentences, and getting used to being called by the other's name. A true testament to their friendship, Mandy has a unique ability to understand Kara's speed-talking. "
        },
        {
          key: 13,
          name: 'Deana Wojcik',
          title: 'Bridesmaid',
          images: [Deana3, Deana2, Deana, Deana4, Deana5],
          picture: Deana3,
          description: "Deana is Kara's oldest friend, starting in kindgergarten when she had to ask permission for Kara to go to the bathroom because Kara was too shy to ask for herself. Kara moved in third grade but found Deana again in their seventh grade advisory at Parker. Ask Deana about her business, the Detroit Mushroom Factory!"
        },
        {
          key: 14,
          name: 'Lizz Chiarelli',
          title: 'Bridesmaid',
          images: [Lizz, Lizz2, Lizz3, Lizz4, Lizz5, Lizz6],
          picture: Lizz,
          description: "Lizz and Kara met in seventh grade at Parker and spent endless hours watching Wedding Story on TLC and planning their future weddings. Lizz and Kara will likely be begging the band to play Vanessa Carlton's White Houses and forcing everyone around them to join in the sing a long."
        },
        {
          key: 15,
          name: 'Sarah Waterman',
          title: 'Bridesmaid',
          images: [Kunkel6, Kunkel2, Kunkel3, Kunkel4, Kunkel5, Kunkel],
          picture: Kunkel6,
          description: "Sarah, more commonly known to Kara as Kunkel or Kunky, and Kara became friends sophomore year at Colby and lived together senior year. There was no one better to live with than Sarah, so luckily they got to spend one more year as roommates in Boston, throwing dinner parties with frozen pizza and two buck chuck."
        },
        {
          key: 16,
          name: "Kristen D'Angelo",
          title: 'Bridesmaid',
          images: [Kristen, Kristen2, Kristen3, Kristen4, Kristen5, Kristen6, Kristen7],
          picture: Kristen,
          description: "Kristen and Kara met at Colby sophomore year, lived together senior year, and had the chance to travel together in Australia and Italy. In addition to her knack for having the best theme/costume party outfits, Kristen is one of the kindest people you'll ever meet and Kara feels so grateful that Kristen is finally back in Boston!"
        },
        {
          key: 17,
          name: "Katie Donnelly",
          title: 'Bridesmaid',
          images: [KatieR, KatieR2, KatieR3, KatieR4, KatieR5],
          picture: KatieR,
          description: "Katie and Kara became friends sophomore year when Kara decided that Katie needed girl time during her trips to visit her now husband CJ at Colby. They grew closer during their semester abroad together in Australia and as neighbors during Kara's brief stint in Washington, DC, where she benefitted from Katie's skill in uniting people on party boats/buses."
        },
        {
          key: 18,
          name: "Ainsley Waters",
          title: 'Flower Girlie',
          images: [Ainsley, Ainsley2, Ainsley8, Ainsley3, Ainsley4, Ainsley5, Ainsley10, Ainsley6, Ainsley7, Ainsley9],
          picture: Ainsley,
          description: "Ainsley is Jamie's and Kara's niece and the daughter of Willie and Sus. Ainsley has loved Kara from the moment they met and she is super excited to be the 'Flower Girlie'."
        },
        {
          key: 19,
          name: "Cal Waters",
          title: 'Ring Boy',
          images: [Cal, Cal2, Cal3, Cal4, Cal5, Cal6],
          picture: Cal,
          description: "Cal is Jamie's and Kara's nephew and the son of Willie and Sus and, as his sister has named it, he will be the 'Ring Boy'. As you can clearly see, he is an absolute party animal."
        },
        {
          key: 20,
          name: "Susanna Waters",
          title: 'Officiant',
          images: [Sus, Sus2, Sus3, Sus4],
          picture: Sus,
          description: "Sus is Jamie's Sister in Law and one of the most thoughtful and impressive women you will ever meet. Jamie and Kara immediately agreed upon Sus being the perfect choice to marry them. Sus will likely be leading (and winning) a game of 'bite the bag' at the after party."
        },
        {
          key: 21,
          name: "Nikki Tyler",
          title: 'Bridesmaid',
          images: [Nikki, Nikki2, Nikki3],
          picture: Nikki,
          description: "Nikki is Kara's younger cousin, and, from the ages of 5-10, Kara pretended she was Nikki's second mother (Nikki even gave her Mother's Day gifts for a few years). Now Nikki is the kind of friend that having a glass of wine with can easily turn into a 4 am conversation. Fun fact: Nikki makes a mean Moscow Mule."
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
        <div onClick={ (e) => {this.setPerson(e, person)}} className='personContainer'>
          <img className='personImage' src={person.picture} />
          <div className="rightContainer">
            <div className='nameAndTitleContainer'>
              <p className='personName'>{person.name}</p>
              <p className='personTitle'>{person.title}</p>
            </div>
            <div className='personDescriptionContainer'>
              <p className='personDescription'>{person.description}</p>
            </div>
            <div className='more'>
              <p className='moreText'>MORE</p>
              <RightArrow style={{'display': 'inline-block', 'float': 'right'}} />
            </div>
          </div>
        </div>)
    }

    setPerson = (e, person) =>{
      this.setState({person: person})
    }

    close = (e) =>{
      if(e.target.className == 'fullContainer' || e.target.tagName == 'path' || e.target.tagName =='svg'){
        this.setState({person: false})
      }
    }

  render() {
    let person = (<div></div>);
    if(this.state.person){
      person = <Person close={this.close} person={this.state.person}/>
    }
    return(
      <div className="partyContainer">
        {this.state.party.map(this.renderParty, this)}
        {person}
      </div>

      )

  }
}

export default WeddingParty;