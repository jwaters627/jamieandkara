import React from 'react';
import classNames from 'classnames';
import styles from './thingsToDo.scss'

class ThingsToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      section: 'food',
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
        description:'Empire is an amazing Chinese/dim sum restaurant. This is probably the place that Jamie and Kara eat at most frequently in Portland. It is a great place for a casual meal to split several dishes. The different buns are all delicious and definitely worth trying.',
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
      
      ],
      bars: [
        {
        key: 0,
        name: "Gritty McDuff's",
        image: 'http://www.squirrelfarts.com/sfblog/wp-content/uploads/2011/08/grittysint.jpg',
        address: '396 Fore Street Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/Gritty+McDuff's+Portland+Brew+Pub/@43.656247,-70.25341,15z/data=!4m2!3m1!1s0x0:0xeef4b4cd2ad6d68c?sa=X&ved=0ahUKEwjxlv6q75_VAhWKOD4KHVEdChgQ_BIIgAEwDQ",
        description:'Great old divey bar and brewpub that brews their own beer.',
        website: "http://grittys.com/",
      },
      {
        key: 1,
        name: "Bissel Brothers Brewing",
        image: 'https://cdn.beeradvocate.com/assets/uploads/2016/07/114FromtheSource-820x564.jpg',
        address: '4 Thompsons Point #108, Portland, ME 04102',
        linkToMap: "https://www.google.com/maps/place/Bissell+Brothers+Brewing+Company/@43.6514239,-70.290559,15z/data=!4m2!3m1!1s0x0:0x3320e07eae2d3ece?sa=X&ved=0ahUKEwjXm-fM75_VAhWE8j4KHYZ8CAEQ_BIIlgEwDg",
        description:'Brewery with great beer',
        website: "http://www.bissellbrothers.com/",
      },
      {
        key: 2,
        name: "Top of the East",
        image: 'http://topoftheeast.restaurantengine.com/files/2015/03/photo1-800x500.jpg',
        address: '157 High St, Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/Top+of+the+East/@43.6548779,-70.263817,15z/data=!4m2!3m1!1s0x0:0xd8d4728ee5319d1f?sa=X&ved=0ahUKEwjWvryj8Z_VAhVCeD4KHQ0_Cf4Q_BIIfjAM",
        description:'Bar and lounge at the top of the Westin Hotel with great views of the city and .',
        website: "http://www.thetopoftheeast.com/",
      },
      {
        key: 3,
        name: "Oxbow Brewing Co.",
        image: 'http://www.abvchicago.com/wp-content/uploads/2015/07/Oxbow-taproom.jpg',
        address: '274 Jones Woods Rd, Newcastle, ME 04553',
        linkToMap: "https://www.google.com/maps/place/Oxbow+Brewing+Company/@44.0828099,-69.5637063,15z/data=!4m2!3m1!1s0x0:0xf9812a15d7183c62?sa=X&ved=0ahUKEwjFmOzQ8Z_VAhWLGD4KHdTTARgQ_BIIfDAN",
        description:'Brewery specializing in farmhouse beers.',
        website: "http://oxbowbeer.com/",
      },
      {
        key: 4,
        name: "Shipyard Brewing Co.",
        image: 'http://shipyard.com/wp-content/uploads/2016/09/ship_visit_bg_1.jpg',
        address: '86 Newbury St, Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/Shipyard+Brewing+Company/@43.6612707,-70.2488227,15z/data=!4m2!3m1!1s0x0:0x9e5aea47b177a7b8?sa=X&sqi=2&ved=0ahUKEwjmxpzQ8p_VAhUDPD4KHV2oAGsQ_BIIgAEwDA",
        description:'Brewery.',
        website: "https://shipyard.com/",
      },
      {
        key: 5,
        name: "Sebago Brewing Co.",
        image: 'http://mainetoday.com/wp-content/uploads/2014/03/sebago2_tables_570.jpg',
        address: '211 Fore St, Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/Sebago+Brewing+Company/@43.6590856,-70.2507748,15z/data=!4m2!3m1!1s0x0:0xda11e3b9fd74e720?sa=X&ved=0ahUKEwjGkIX98p_VAhXDOj4KHfdxBTMQ_BIIhAEwCg",
        description:'Brewery and bar located on the first floor of the Hampton Inn in old port.',
        website: "http://www.sebagobrewing.com/",
      },
      {
        key: 6,
        name: "Bull Feeny's",
        image: 'http://americanpublichouse.com/2010.12/bull_feeneys_portland_maine/bar.jpg',
        address: '375 Fore St, Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/Bull+Feeney's/@43.656668,-70.2530665,15z/data=!4m2!3m1!1s0x0:0x3dab8ff7ef9e1b9?sa=X&ved=0ahUKEwj8gYqy85_VAhVFGj4KHXadAQoQ_BIIdzAK",
        description:'Divey bar in the middle of old port local beers or $1 rolling rocks',
        website: "https://www.facebook.com/BullFeeneys/",
      },
      {
        key: 7,
        name: "Portland Hunt and Alpine Club",
        image: 'https://lh3.ggpht.com/-tcI9_3JuTy4/WU79Km17JrI/AAAAAAAAbtA/RgEa1vP8zpwrLy_3RSWOAHIgYB68QZbOwCLIBGAYYCw/w512-h384-n/',
        address: '75 Market St, Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/The+Portland+Hunt+%26+Alpine+Club/@43.658114,-70.2543135,15z/data=!4m2!3m1!1s0x0:0x20208ce586299232?sa=X&ved=0ahUKEwj91pvS95_VAhXGcD4KHdNCA-8Q_BIIhwEwDw",
        description:'Good spot for some upscale cocktails.',
        website: "http://huntandalpineclub.com/",
      },
      ],
      explore: [
        {
        key: 0,
        name: "Peak's Island",
        image: 'https://photos.smugmug.com/Aerials/Maine/Maine-Islands/Casco-Bay-Islands-ME-aerial/i-T8ZzszL/1/d1f1163a/S/is%202010-06-0911-25-29%C2%A9Dave_Cleaveland%2C%20Maine_Imaging1-S.jpg',
        address: '',
        linkToMap: '',
        description:"Take the ferry out to Peak's Island",
        website: "",
      },
      {
        key: 1,
        name: "Crescent Beach state park",
        image: 'http://multifiles.pressherald.com/uploads/sites/4/2012/09/portland-press-herald_3662550.jpg',
        address: '',
        linkToMap: '',
        description:"Head to the beach to enjoy the nice weather and views.",
        website: "",
      },
      {
        key: 2,
        name: "Walk around the Old Port",
        image: 'http://trekhound.com/wp-content/uploads/2012/06/Old-Port-Festival.jpg',
        address: '',
        linkToMap: '',
        description:"Walk around the Old Port and take in the cobblestoned streets, restaurants, bars and shopping.",
        website: "",
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

    renderDrink = (item) =>{
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

    renderExplore = (item) =>{
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

    setSectionEat = () =>{
      this.setState({section: 'food'})
    }

    setSectionDrink = () =>{
      this.setState({section: 'drink'})
    }

    setSectionExplore = () =>{
      this.setState({section: 'explore'})
    }

  render() {
    let toRender = (<div><h3>Eat: Try out some of our favorite spots to eat!</h3>
        {this.state.food.map(this.renderFood, this)}
        </div>
          )
    if(this.state.section == 'drink'){
      toRender = (<div><h3>Drink: Try out some of our favorite bars and breweries!</h3>
        {this.state.bars.map(this.renderDrink, this)}
        </div>
          )
    }
    if(this.state.section == 'explore'){
      toRender = (<div><h3>Explore: Try out some of our favorite things to do in Portland!</h3>
        {this.state.explore.map(this.renderExplore, this)}
        </div>
          )
    }
    let eatClass = classNames(
          'eat',
          {
            'open': (this.state.section == 'food'),
          }
    )
    let drinkClass = classNames(
          'drink',
          {
            'open': (this.state.section == 'drink'),
          }
    )
    let exploreClass = classNames(
          'explore',
          {
            'open': (this.state.section == 'explore'),
          }
    )
    return(
      <div className="eventsContainer">
        <h1 className='names'>Things to do in Portland</h1>
        <div className='subNav'>
          <p className={eatClass} onClick={this.setSectionEat}>Eat</p>
          <p className={drinkClass} onClick={this.setSectionDrink}>Drink</p>
          <p className={exploreClass} onClick={this.setSectionExplore}>Explore</p>
        </div>
        {toRender}

      </div>

      )

  }
}

export default ThingsToDo;