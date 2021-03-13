import React from 'react';
import '../assets/contact.css';

const handleClick = async () => {
    const name = document.getElementById('name__input').value;
    const email = document.getElementById('email__input').value;
    const message = document.getElementById('message__textarea').value;  
    if (name === "" || email === "" || message === "") {
        console.log("click");
    } else {
        const request = await fetch('/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, email: email, message: message})
        });
        const response = await request.json();
        console.log(response);
    }
}

function ContactForm() {    
    return (
        <div className='contact__container'>
            <div className='contact__wrapper'>
                <h1>Send us a message!</h1>
                <div className='contact__form__container'>
                    <input 
                    className="name__input"
                    id="name__input"
                    placeholder="What's your name?"
                    ></input>
                    <input 
                    className="email__input"
                    id="email__input"
                    type="email"
                    placeholder="What's your email?"
                    ></input>
                    <textarea 
                    className="message__textarea"
                    id="message__textarea"
                    placeholder="Your message to us:"
                    ></textarea>
                    <button
                    className="btn--contact"
                    type="submit"
                    onClick={handleClick}
                    >Send it!</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
