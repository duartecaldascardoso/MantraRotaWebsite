import React, {useRef, useEffect} from "react";
import {TweenMax, Power3} from 'gsap'

// Style
import '../appComponents/Ticket/tickets.css'

// Components
import Tickets from '../appComponents/Ticket/Tickets.jsx'
import Footer from "../appComponents/Footer/Footer.jsx";

const Shows = () => {
    let headerAnime = useRef(null)
    
    useEffect(function(){
      TweenMax.from(headerAnime, .90, {opacity: 0, ease: Power3.easeIn})
    }, [])
    
      return (

        <div>
          <div className="content">
            <p ref={el => headerAnime = el} className='TicketHeaderTitle'>Upcoming Dates</p>
            <Tickets />
            <Footer />
          </div>
        </div>
      )
      
    }
    
    export default Shows