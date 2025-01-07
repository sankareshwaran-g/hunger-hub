import React from 'react'
import '../../css/ResCard.css'
const ResCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  locality,  
  aggregatedDiscountInfoV3

}) =>{
  // console.log(props)
  return(
      <div className="card-hotels" >
      <figure>
      <img className='card-image'
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
          <figcaption>{aggregatedDiscountInfoV3}</figcaption>
      </figure>
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <p>{lastMileTravelString}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
      
      

    </div>
  )
}
export default ResCard

