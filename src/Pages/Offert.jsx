import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/Offert.css';
import toast, { Toaster } from 'react-hot-toast';

const Offert = () => {
  const form = useRef();

  // Notify user for successful submission
  const notifySuccess = () => toast.success('Ditt meddelande har skickats!');

  // Notify user for empty fields
  const notifyError = () => toast.error('Vänligen fyll i alla fält.');

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { from_name, user_email, user_phone, user_postort, message } = form.current;

    if (!from_name.value || !user_email.value || !user_phone.value || !user_postort.value || !message.value) {
      notifyError();
      return; // Stop further execution if fields are empty
    }

    // Send email if all fields are filled
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          notifySuccess();
          e.target.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='offert'>
      <Toaster />
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
};

export default Offert;
