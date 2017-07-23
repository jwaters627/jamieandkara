import React from 'react';

import styles from './thingsToDo.scss'

class ThingsToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      food: [
      {
        key: 0,
        name: 'Eventide Oyster',
        image: 'http://multifiles.pressherald.com/uploads/sites/4/2012/10/portland-press-herald_3683484.jpg',
        address: '86 Middle St, Portland, ME 04101',
        linkToMap: 'https://www.google.com/maps/place/Eventide+Oyster+Co./@43.6594596,-70.2511733,15z/data=!4m2!3m1!1s0x0:0x813963588ca398b1?sa=X&ved=0ahUKEwis1NOf4Z_VAhVDoD4KHdyWBikQ_BIIlgEwCg',
        description:'Eventide is one of the most popular spots in Portland and the place to try if you are a seafood lover. The raw bar and brown butter lobster roll are amazing and they always have interesting new beers on tap.',
        website: "http://www.eventideoysterco.com/"
      },
      {
        key: 1,
        name: 'Empire',
        image: 'http://multifiles.pressherald.com/uploads/sites/4/2013/12/20131208_576528.xml-20131127_DineOutME__01.jpg',
        address: '575 Congress St, Portland, ME 04101',
        linkToMap: 'https://www.google.com/maps/place/Empire/@43.654899,-70.26252,15z/data=!4m2!3m1!1s0x0:0x457cf83f0ed9af6?sa=X&ved=0ahUKEwjCobnA5J_VAhUBEz4KHdhaBMAQ_BIIgAEwDA',
        description:'Empire is an amazing Chinese/dim sum restaurant.  This is probably the place that Jamie and Kara eat at most frequently in Portland. Empire is a great place for a casual meal to split a bunch of different dishes. The different buns are all delicious and definitely worth trying.',
        website: "http://www.portlandempire.com/kitchen/index.html"
      },
      {
        key: 2,
        name: 'Duck Fat',
        image: 'http://1.bp.blogspot.com/-6wT2QaszkTY/UYmVwwtTSLI/AAAAAAAAGNw/wrwnz6McIBs/s1600/East_Ender_interior_Maine.jpg',
        address: '43 Middle St, Portland, ME 04101',
        linkToMap: 'https://www.google.com/maps/place/Duckfat/@43.6602459,-70.2503933,15z/data=!4m2!3m1!1s0x0:0x6bf6e940504b1256?sa=X&ved=0ahUKEwiHh9yb5Z_VAhVHMj4KHbZ3CIsQ_BIIfTAM',
        description:"Gourmet sandwiches and fries and great beer selection. The poutine is a must try and Jamie's brother in law Will says the cubano and fries go great with some local Maine beers.",
        website: "http://duckfat.com/"
      },
      {
        key: 3,
        name: 'Hot Suppa',
        image: 'http://www.georgesmithmaine.com/sites/default/files/imagecache/webpage_large/inside%20looking%20out.JPG',
        address: '703 Congress St, Portland, ME 04102',
        linkToMap: 'https://www.google.com/maps/place/Hot+Suppa/@43.6531597,-70.2684045,15z/data=!4m2!3m1!1s0x0:0x7314215f780218a2?sa=X&ved=0ahUKEwj-0by-5Z_VAhUDrD4KHVcgB2cQ_BIIgQEwCg',
        description:'Homemade breakfast spot with upscale diner classics. We stopped in for brunch and enjoyed the great nitro cold brew coffee, fried green tomato eggs benedict, and corn beef breakfast sandwich.',
        website: "http://hotsuppa.com/"
      },
      {
        key: 4,
        name: 'Central Provisions',
        image: 'https://static1.squarespace.com/static/56e19bc9b6aa6041bb33d9b7/5727cee420c6474962115f98/5877abf2db29d625a2961462/1484238526365/central+provisions_KH_025_20160511.jpg?format=1500w',
        address: '414 Fore St, Portland, ME 04101',
        linkToMap: 'https://www.google.com/maps/place/Central+Provisions/@43.656028,-70.253784,15z/data=!4m2!3m1!1s0x0:0xceb0bf4cecdfd7ef?sa=X&ved=0ahUKEwje6tXm5Z_VAhXBCD4KHXvaAvoQ_BIIdjAN',
        description:'',
        website: "http://www.central-provisions.com/"
      },
      {
        key: 5,
        name: 'Scales',
        image: 'http://static1.squarespace.com/static/54986a05e4b08b1b04486713/54986ed2e4b0d669a5b96c8a/57c2e96a15d5db588da13349/1472738356886/Scales+%7C+Portland%2C+Maine+%7C+The+Stopover+blog+%7C+MeaghanMurray.com',
        address: '68 Commercial St, Portland, ME 04101',
        linkToMap: 'https://www.google.com/maps/place/Scales/@43.6568238,-70.2497059,15z/data=!4m2!3m1!1s0x0:0x99114a7f9f34cc67?sa=X&sqi=2&ved=0ahUKEwicrvSJ5p_VAhVLMz4KHfGACZ4Q_BIIfzAK',
        description:"Locally sourced fresh seafood with wine and craft cocktails. Jamie's sister Jess says the fish and chips are awesome!",
        website: "http://www.scalesrestaurant.com/"
      },
      {
        key: 6,
        name: 'Fore Street',
        image: 'https://static1.squarespace.com/static/53bae253e4b013a11d6897d6/53e3d8d9e4b0c611b6bc3fe9/53ea378be4b033543e725a2d/1407858595054/jendeanphoto.1682.jpg',
        address: '288 Fore St, Portland, ME 04101',
        linkToMap: 'https://www.google.com/maps/place/Fore+Street/@43.6580204,-70.2508918,15z/data=!4m2!3m1!1s0x0:0x880dc2fda94fdd1a?sa=X&ved=0ahUKEwi_q5W05p_VAhUKcz4KHfmcAhgQ_BIIiAEwCg',
        description:'Upscale American food with a beautiful brick oven and open kitchen. Also a great place to stop in for a drink at the bar.',
        website: "http://www.forestreet.biz/",
      },
      ]
    };
    }

    renderFood = (item) =>{
      return(
          <div className='restaurantContainer'>
            <img className='restaurantImage' src={item.image} />
            <div className='descriptionContainer'>
              <a className='siteLink' href={item.website}><h5>{item.name}</h5></a>
              <p>{item.description}</p>
              <a href={item.linkToMap}><p>{item.address}</p></a>
            </div>
          </div>
        )
    }

  render() {
    return(
      <div className="eventsContainer">
        <h1 className='names'>Things to do in Portland</h1>
        <h3>Eat: Try out some of our favorite spots</h3>
        {this.state.food.map(this.renderFood, this)}

      </div>

      )

  }
}

export default ThingsToDo;