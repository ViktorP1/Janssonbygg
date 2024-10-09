import React from 'react'
import './Footer.css'
import footer_icon from '../Assets/JBRlogo2.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_icon} alt=""/>
        </div>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <p>Skicka e-post : <a href="mailto:viktor1pavlov2@gmail.com">ove1jbr@gmail.com</a></p>
            </div>
            <div className="footer-icons-container">
                <p>Telefon : <a href="tel:+4670-745 28 29">070-745 28 29</a></p>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright © 2023 Jansson Bygg & Rör AB | Krogtäppan 33 137 68 Jordbro | 070-745 28 29</p>
        </div>
    </div>
  )
}

export default Footer