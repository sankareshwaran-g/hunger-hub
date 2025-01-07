import React from 'react'
import "../../css/Carousel.css"
import "../../css/RestaurantMenu.css"
import MenuList from './MenuList'
import { restaurantList } from '../../utils/restaurantData'
const RestaurantMenu = () => {

  return (
    <div className='menu-section align'>
        <div className="menu-caption">
          <h2>Restaurants with online food delivery in Coimbatore</h2>
        </div>
        <div className="filter-button">
            <button>Filter</button>
            <button>Sort By</button>
            <button>Fast Delivery</button>
            <button>New on HungryHub</button>
            <button>Ratings 4.0+</button>
            <button>Pur Veg</button>
            <button>Offers</button>
            <button>Rs. 300-Rs. 600</button>
            <button>Less than Rs. 600</button>
        </div>
        <div className="Menu-list ">
              {restaurantList.map((item, index) => item.restaurants.map((restaurant, subIndex) =>(
                  <MenuList {...restaurant.info}
                    key={restaurant.info.id}
                    name={restaurant.info.name}
                    avgRating={restaurant.info.avgRating}
                    cuisines={restaurant.info.cuisines}
                    cloudinaryImageId={restaurant.info.cloudinaryImageId}
                    locality={restaurant.info.locality}
                    lastMileTravelString={restaurant.info.sla.lastMileTravelString}
                    aggregatedDiscountInfoV3={
                      restaurant.info.aggregatedDiscountInfoV3
                        ? [
                            restaurant.info.aggregatedDiscountInfoV3.header,
                            restaurant.info.aggregatedDiscountInfoV3.subHeader,
                          ]
                            .filter(Boolean)
                            .join(" ") // Filters out falsy values like null/undefined
                        : " "
                    }
                    
                    
                  />
                )))}
                </div>
                <div style={{borderBottom: '1px solid #e0e0e0', marginTop: '20px'}}>  </div>
    </div>
  )
}

export default RestaurantMenu
