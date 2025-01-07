import React, { useRef } from 'react'
import "../../css/Carousel.css"
import ResCard from './ResCard'
import { restaurantList } from '../../utils/restaurantData'



const RestaurantCarousel = () => {
  
      const resCarouselRef = useRef(null);
  
      const scrollNext = () => {
        if (resCarouselRef.current) {
          resCarouselRef.current.scrollBy({ left: 850, behavior: 'smooth' });
        }
      };
    
      const scrollPrev = () => {
        if (resCarouselRef.current) {
          resCarouselRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
        }
      };
    // console.log(props)
  return (
    <div className="carousel-section align">
      <div className="carousel-nav">
        <div className="carousel-caption">
          <h2>Top restaurant chains in Coimbatore</h2>
        </div>
        <div className="resCarousel-scroll">
          <button id="prev" onClick={scrollPrev} className="arrow">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button id="next" onClick={scrollNext} className="arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="card-list" ref={resCarouselRef}>
      {restaurantList.map((item, index) => item.restaurants.map((restaurant, subIndex) =>(
          <ResCard {...restaurant.info}
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

export default RestaurantCarousel
