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
        description:'Homemade breakfast spot with upscale diner classics. We stopped in for brunch and enjoyed the great nitro cold brew coffee, fried green tomato eggs benedict, and corned beef breakfast sandwich.',
        website: "http://hotsuppa.com/"
      },
      {
        key: 4,
        name: 'Central Provisions',
        image: 'https://static1.squarespace.com/static/56e19bc9b6aa6041bb33d9b7/5727cee420c6474962115f98/5877abf2db29d625a2961462/1484238526365/central+provisions_KH_025_20160511.jpg?format=1500w',
        address: '414 Fore St, Portland, ME 04101',
        linkToMap: 'https://www.google.com/maps/place/Central+Provisions/@43.656028,-70.253784,15z/data=!4m2!3m1!1s0x0:0xceb0bf4cecdfd7ef?sa=X&ved=0ahUKEwje6tXm5Z_VAhXBCD4KHXvaAvoQ_BIIdjAN',
        description:"We actually haven't been here yet, but it's on our list and we've heard great things about their small plates and cocktails!",
        website: "http://www.central-provisions.com/"
      },
      {
        key: 5,
        name: 'Scales',
        image: 'https://downeast.com/wp-content/uploads/2016/08/LR_DiningInterior_084.png',
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
        description:"Brewery with great beer. A slight drive from Old Port, but well worth it!",
        website: "http://www.bissellbrothers.com/",
      },
      {
        key: 2,
        name: "Top of the East",
        image: 'http://topoftheeast.restaurantengine.com/files/2015/03/photo1-800x500.jpg',
        address: '157 High St, Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/Top+of+the+East/@43.6548779,-70.263817,15z/data=!4m2!3m1!1s0x0:0xd8d4728ee5319d1f?sa=X&ved=0ahUKEwjWvryj8Z_VAhVCeD4KHQ0_Cf4Q_BIIfjAM",
        description:'Bar and lounge at the top of the Westin Hotel with great views of the city. A mini Top of the Hub (if you are from Boston)!.',
        website: "http://www.thetopoftheeast.com/",
      },
      {
        key: 3,
        name: "Oxbow Brewing Co.",
        image: 'http://www.abvchicago.com/wp-content/uploads/2015/07/Oxbow-taproom.jpg',
        address: '274 Jones Woods Rd, Newcastle, ME 04553',
        linkToMap: "https://www.google.com/maps/place/Oxbow+Brewing+Company/@44.0828099,-69.5637063,15z/data=!4m2!3m1!1s0x0:0xf9812a15d7183c62?sa=X&ved=0ahUKEwjFmOzQ8Z_VAhWLGD4KHdTTARgQ_BIIfDAN",
        description:'Cool low-key brewery specializing in farmhouse beers. Walkable from Old Port.',
        website: "http://oxbowbeer.com/",
      },
      {
        key: 4,
        name: "Shipyard Brewing Co.",
        image: 'http://shipyard.com/wp-content/uploads/2016/09/ship_visit_bg_1.jpg',
        address: '86 Newbury St, Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/Shipyard+Brewing+Company/@43.6612707,-70.2488227,15z/data=!4m2!3m1!1s0x0:0x9e5aea47b177a7b8?sa=X&sqi=2&ved=0ahUKEwjmxpzQ8p_VAhUDPD4KHV2oAGsQ_BIIgAEwDA",
        description:'Most famous brewery in town with a brand new tasting room. Super close to the Hampton Inn, Residence Inn, and Ocean Gateway.',
        website: "https://shipyard.com/",
      },
      {
        key: 5,
        name: "Sebago Brewing Co.",
        image: 'http://mainetoday.com/wp-content/uploads/2014/03/sebago2_tables_570.jpg',
        address: '211 Fore St, Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/Sebago+Brewing+Company/@43.6590856,-70.2507748,15z/data=!4m2!3m1!1s0x0:0xda11e3b9fd74e720?sa=X&ved=0ahUKEwjGkIX98p_VAhXDOj4KHfdxBTMQ_BIIhAEwCg",
        description:'Brewery and bar located on the first floor of the Hampton Inn in Old Port.',
        website: "http://www.sebagobrewing.com/",
      },
      {
        key: 6,
        name: "Bull Feeny's",
        image: 'http://americanpublichouse.com/2010.12/bull_feeneys_portland_maine/bar.jpg',
        address: '375 Fore St, Portland, ME 04101',
        linkToMap: "https://www.google.com/maps/place/Bull+Feeney's/@43.656668,-70.2530665,15z/data=!4m2!3m1!1s0x0:0x3dab8ff7ef9e1b9?sa=X&ved=0ahUKEwj8gYqy85_VAhVFGj4KHXadAQoQ_BIIdzAK",
        description:'Divey bar in the middle of Old Port with local beers or $1 rolling rocks',
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
        address: 'Portland, Maine',
        linkToMap: 'https://www.google.com/maps/place/Casco+Bay+Lines/@43.6629938,-70.2473714,13z/data=!4m8!1m2!2m1!1sPeaks+island+ferry!3m4!1s0x0:0x5337b3dc0cb1ee62!8m2!3d43.6569823!4d-70.2486527',
        description:"Take the ferry out to Peak's Island",
        website: "https://www.cascobaylines.com/schedules/peaks-island-schedule/",
      },
      {
        key: 1,
        name: "Crescent Beach state park",
        image: 'http://multifiles.pressherald.com/uploads/sites/4/2012/09/portland-press-herald_3662550.jpg',
        address: 'Cape Elizabeth, ME',
        linkToMap: 'https://www.google.com/maps/place/Crescent+Beach+State+Park/@43.5636961,-70.2349551,17z/data=!3m1!4b1!4m5!3m4!1s0x4cad6076a977bdb7:0x833399393949d0c3!8m2!3d43.5636922!4d-70.2327664',
        description:"Head to the beach to enjoy the nice weather and views.",
        website: "http://www.maine.gov/cgi-bin/online/doc/parksearch/details.pl?park_id=4",
      },
      {
        key: 2,
        name: "Walk around the Old Port",
        image: 'http://trekhound.com/wp-content/uploads/2012/06/Old-Port-Festival.jpg',
        address: 'Portland, ME',
        linkToMap: 'https://www.google.com/maps/place/Old+Port,+Portland,+ME+04101/@43.6580535,-70.2572148,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb29c6ab4eb3f8d:0xa073be26e028bb0b!8m2!3d43.6580535!4d-70.2550261',
        description:"Walk around the Old Port and take in the cobblestoned streets, restaurants, bars and shopping.",
        website: "",
      },
      {
        key: 3,
        name: "Portland Sea Dogs Game",
        image: 'https://cdn.vox-cdn.com/thumbor/d0DWv6DbeRKKyhMUkEGdu14_awQ=/0x0:2000x1500/1200x800/filters:focal(0x0:2000x1500)/cdn.vox-cdn.com/uploads/chorus_image/image/46940252/portland_sea_dogs_hadlock_stadium_baseball_field.0.0.JPG',
        address: '271 Park Ave, Portland, ME 04102',
        linkToMap: 'https://www.google.com/maps?q=portland+sea+dogs&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjl_rSAqKPVAhVCej4KHeZkDeIQ_AUICygC',
        description:"Go to a Portland Sea Dogs game.",
        website: "http://www.milb.com/index.jsp?sid=t546",
      },
      {
        key: 4,
        name: "Eastern Promenade",
        image: 'http://media.landvest.com/pics/property/36232691/8/v3/',
        address: 'Portland, ME',
        linkToMap: 'https://www.google.com/maps?q=eastern+promenade&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjXyriHqaPVAhXIZj4KHZQRCP0Q_AUICigB',
        description:"The Eastern Prom is a 68 acre public park with paved trails along Portland's waterfront.",
        website: "http://trails.org/our-trails/eastern-prom-trail/",
      },
      {
        key: 5,
        name: "Portland Head Light and Fort Williams Park",
        image: 'data:image/jpeg;base64,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',
        address: 'Cape Elizabeth, ME',
        linkToMap: 'https://www.google.com/maps/search/portland+head+light/@43.6642901,-70.3304993,12z/data=!3m1!4b1',
        description:"In addition to the iconic lighthouse, there is an arboretum, cliffside trails, and a rocky beach.",
        website: "https://portlandheadlight.com/what-to-do",
      },
      {
        key: 6,
        name: "Freeport",
        image: 'https://www.llbean.com/shop/retailStores/media/images/161226_freeportcampus.jpg',
        address: 'Freeport, ME',
        linkToMap: 'https://www.google.com/maps/search/freeport+maine+outlet/@43.8496607,-70.1199557,15z/data=!3m1!4b1',
        description:"Outdoor outlet shopping and the iconic twenty-four hour LL Bean flagship store.",
        website: "http://www.onefreeportvillagestation.com/",
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
      <div className="thingsToDoContainer">
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