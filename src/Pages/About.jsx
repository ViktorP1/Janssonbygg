import React, { useEffect } from 'react'
import './CSS/About.css'

const About = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutus">
      <div className="aboutus-container">
        <h2>Om Oss</h2>
          <p>
            Jansson Bygg & Rör har utvecklats från att enbart arbeta med VVS, till att vara en heltäckande leverantör av tjänster inom VVS, bygg, måleri och plattsättning för privatpersoner och företag. Vårt mål är att dina idéer med hjälp av vår professionalism och långa erfarenhet ska resultera i bästa tänkbara resultat.<br/>
          </p>
      </div>
    </div>
  )
}

export default About