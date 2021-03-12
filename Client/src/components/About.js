import React from 'react'
import '../assets/about.css';

function AboutCard() {
    return (
        <div className='about__container'>
            <div className='about__wrapper'>
                <article className='about__article'>
                    <header className='about__header'>
                        <h5>What are 'CANdles?'</h5>
                    </header>
                        <p>Cool things dude.</p>
                </article>
                <article className='about__article'>
                    <header className='about__header'>
                        <h6>Sustainability</h6>
                    </header>
                        <p>We got sustainable stuff.</p>
                </article>
            </div>
        </div>
    )
}

export default AboutCard;
