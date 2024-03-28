import React from "react";

// Components
import HeaderPic from '../appComponents/headerPicture/headerPic'
import BioText from '../appComponents/BioText/BioText'
import Footer from '../appComponents/Footer/Footer'

const About = () => {

  return (

    <div>
      <div className="aboutContent">
        <HeaderPic />
        <BioText />
        <Footer />
      </div>
    </div>
  )
  
}

export default About