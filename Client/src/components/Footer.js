import React from 'react';
import '../assets/footer.css';
import { Button } from './Button';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Something down here Broh!
                </p>
                <p className='footer-subscription-text'>
                    More stuff down here Broh...
                </p>
                <div className='input areas'>
                    <form action="/subscribers" method="POST">
                        <input type='email' name='email' placeholder="Your email"
                        className='footer-input' />
                        <button type="submit" className='btn--outline'>Subscribe To Me Mortal</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer
