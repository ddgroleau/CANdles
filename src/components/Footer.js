import React from 'react';
import '../assets/footer.css';
import { Button } from './button';

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
                    <form>
                        <input type='email' name='email' placeholder="Yo mama!"
                        className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe To Me Mortal</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer
