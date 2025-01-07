import React from 'react'
import '../../css/ResCard.css'
import '../../css/RestaurantMenu.css'
import {RES_MENU_IMG} from '../../utils/constants'

const MenuList = ({
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
      <div className="menuCard-hotels" >
      <figure>
      <img className='menuCard-image'
        src={RES_MENU_IMG + cloudinaryImageId }
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

export default MenuList
