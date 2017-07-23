import React from 'react';

import styles from './whereToStay.scss'

class WhereToStay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hotels: [
      {
        key: 0,
        name: 'Hampton Inn',
        address: '209 Fore St, Portland, ME 04101',
        website: 'http://hamptoninn3.hilton.com/en/hotels/maine/hampton-inn-portland-downtown-waterfront-PWMDTHX/index.html',
        image: 'http://hamptoninn3.hilton.com/resources/media/hp/PWMDTHX/en_US/img/shared/full_page_image_gallery/main/HX_extnight2_2_425x303_FitToBoxSmallDimension_Center.jpg',
        distance: '0.2 Miles',
        blockInfo: ''
      },
      {
        key: 1,
        name: 'Residence Inn',
        address: '145 Fore St, Portland, ME 04101',
        website: 'http://www.marriott.com/hotels/travel/pwmdt-residence-inn-portland-downtown-waterfront/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2',
        image: 'http://www.waterfrontconcerts.com/assets/LedgeMarriot2009-07-28_043_copy_3-1.jpg',
        distance: '0.1 Mile',
        blockInfo: ''
      },
      {
        key: 2,
        name: 'Portland Regency',
        address: '20 Milk St, Portland, ME 04101',
        website: 'http://www.theregency.com/',
        image: 'https://streetsofsalem.files.wordpress.com/2012/01/armory-portland-regency.jpg',
        distance: '0.5 Miles',
        blockInfo: ''
      }
      ]
    };
    }

    renderHotels = (hotel) =>{
      return(
        <div className='hotelContainer'>
          <div className='hotelInfoContainer'>
            <a href={hotel.website}>
              <h3>{hotel.name}</h3>
            </a>
            <h6>{hotel.address}</h6>
            <img className='hotelImage' src={hotel.image} />
          </div>
          <div className='otherInfo'>
            <p><b>Distance to Venue:</b> {hotel.distance}</p>
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