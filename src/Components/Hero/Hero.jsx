import React from 'react'
import './Hero.css'
import logo_icon from '../Assets/LoggaJBR.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-right">
            <img src={logo_icon} alt=""></img>
        </div>
        <div className='hero-left'>
            <h2>Välkommen!</h2>
            <div>
                <p>
                Jansson Bygg & Rör AB har sedan starten 2021 levererat pålitliga och högkvalitativa tjänster inom bygg och VVS. Med över 12 års erfarenhet i branschen och som Säker Vatten-certifierade, erbjuder vi trygga och effektiva lösningar för både privatpersoner och företag.
                <br/>
                Vi är specialister på VVS-arbeten men erbjuder även ett brett utbud av tjänster inom bland annat bygg & måleri. Vår målsättning är att omvandla dina idéer till verklighet med hjälp av vår professionalism och expertis. 
                Kontakta oss idag för att diskutera ditt nästa projekt och se hur vi kan hjälpa dig att nå bästa möjliga resultat. 
                </p>
            </div>

            <Link style={{ textDecoration: 'none'}} to='/offert'>
            <div className="hero-offert-btn">
            <div>Kontakta oss!</div>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Hero