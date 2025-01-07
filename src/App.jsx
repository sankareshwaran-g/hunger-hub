import React from 'react'
import './App.css'
import Carousel from './components/home/Carousel'
import RestaurantCarousel from './components/home/RestaurantCarousel'
import Header from './components/home/Header'
import RestaurantMenu from './components/home/RestaurantMenu'

function App() {
  

  return (
    <>
      <Header/>
      <Carousel/>
      <RestaurantCarousel/>
      <RestaurantMenu/>
    </>
  )
}

export default App
