import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/Offert.css';

const Offert = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("Ditt meddelande har skickats!");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='offert'>
      <div className="offert-container">
        <h1>Kontakta oss!</h1>
        <form ref={form} onSubmit={sendEmail} className="offert-fields">
          <input type="text" name="from_name" placeholder='Namn' />
          <input type="email" name="user_email" placeholder='E-postadress' />
          <input type="phone" name="user_phone" placeholder='Telefon' />
          <input type="text" name="user_postort" placeholder='Postort' />
          <textarea name="message" id="input-message" placeholder="Vad behöver du hjälp med?"></textarea>
          <button type="submit">Skicka</button>
        </form>
      </div>
    </div>
  );
}

export default Offert