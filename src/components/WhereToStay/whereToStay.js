import React from 'react';

import styles from './whereToStay.scss'

class WhereToStay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hotels: [
      {
        key: 0,
        name: 'Portland Regency',
        address: '20 Milk St, Portland, ME 04101',
        website: 'http://www.theregency.com/',
        image: 'https://streetsofsalem.files.wordpress.com/2012/01/armory-portland-regency.jpg',
        distance: '0.5 Miles',
        blockInfo: 'This is where we will be staying.  There is a room block for $220 a night.  It may be possible to get a room cheaper through the website depending when you book, so that is worth looking into.'
      },
      {
        key: 1,
        name: 'Hampton Inn',
        address: '209 Fore St, Portland, ME 04101',
        website: 'http://hamptoninn3.hilton.com/en/hotels/maine/hampton-inn-portland-downtown-waterfront-PWMDTHX/index.html',
        image: 'http://hamptoninn3.hilton.com/resources/media/hp/PWMDTHX/en_US/img/shared/full_page_image_gallery/main/HX_extnight2_2_425x303_FitToBoxSmallDimension_Center.jpg',
        distance: '0.2 Miles',
        blockInfo: 'There is a room block and there is a two night minimum at a price of $289 total for the two nights.'
      },
      {
        key: 2,
        name: 'Residence Inn',
        address: '145 Fore St, Portland, ME 04101',
        website: 'http://www.marriott.com/hotels/travel/pwmdt-residence-inn-portland-downtown-waterfront/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2',
        image: 'http://www.waterfrontconcerts.com/assets/LedgeMarriot2009-07-28_043_copy_3-1.jpg',
        distance: '0.1 Mile',
        blockInfo: 'There is a room block for rooms at $230 a night. '
      },
      
      ]
    };
    }

    renderHotels = (hotel) =>{
      return(
        <div className='hotelContainer'>
            <a href={hotel.website}>
              <h3>{hotel.name}</h3>
            </a>
          <div className='otherInfo'>
            <img className='hotelImage' src={hotel.image} />
            <div className='info'>
              <p><b>Address:</b> {hotel.address}</p>
              <p><b>Distance to Venue:</b> {hotel.distance}</p>
              <p><b>Room Block Info and Pricing:</b> {hotel.blockInfo}</p>
            </div>
          </div>
        </div>
      )
    }

  render() {
    return(
      <div className="hotelsContainer">
        {this.state.hotels.map(this.renderHotels, this)}
      </div>

      )

  }
}

export default WhereToStay;