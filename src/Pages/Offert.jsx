import React from 'react'
import './CSS/Offert.css';

const Offert = () => {
  return (
    <div className='offert'>
      <div className="offert-container">
        <h1>Kontakta oss!</h1>
        <div className="offert-fields">
          <input type="text" placeholder='Namn' />
          <input type="email" placeholder='E-postadress' />
          <input type="phone" placeholder='Telefon' />
          <input type="text" placeholder='Postord' />
          <textarea name="message" type="text" id="input-message" placeholder="Vad behöver du hjälp med?"></textarea>
        </div>
        <button>Skicka</button>
      </div>
    </div>
  )
}

export default Offert