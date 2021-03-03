import React from 'react';
import CardItem from './cardItem';
import '../assets/cards.css'
import img9 from '../assets/images/img-9.jpg';
import img2 from '../assets/images/img-2.jpg';
import img1 from '../assets/images/img-1.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check it out broh!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src={img9}
                        text="dope image!"
                        label="Listing"
                        path='/products'
                         />
                          <CardItem
                        src={img2}
                        text="Anotha dope image!"
                        label="Listing2"
                        path='/products'
                         />
                    
                        <CardItem
                        src={img1}
                        text="Yo mama!"
                        label="Listing3"
                        path='/products'
                         />
                          <CardItem
                        src={img3}
                        text="Pictures are kool"
                        label="Listing4"
                        path='/products'
                         />
                            <CardItem
                        src={img4}
                        text="Ur image!"
                        label="Listing5"
                        path='/products'
                         />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

