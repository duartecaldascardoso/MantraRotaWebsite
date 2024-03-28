import React from "react";

// Components
import Poster from '../appComponents/Poster/Poster.jsx'
import Card from '../appComponents/Card/Card.jsx'
import Footer from '../appComponents/Footer/Footer.jsx'

const Home = () => {

  return (
    <div className="Home">
      <Poster 
        title={'new Album'} 
        albumTitle={'Nowhere'}
        date={'2020.07.05'}
      />
      <Card />
      <Footer />
    </div>
  )
  
}

export default Home