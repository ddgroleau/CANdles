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
                        <p>Hand-crafted candles, made from recycled craft beer cans and a mix of soy and recycled wax.</p>
                </article>
                <article className='about__article'>
                    <header className='about__header'>
                        <h6>Sustainability</h6>
                    </header>
                        <p>We use all-natural or recycled products in every CANdle.</p>
                </article>
            </div>
        </div>
    )
}

export default AboutCard;
