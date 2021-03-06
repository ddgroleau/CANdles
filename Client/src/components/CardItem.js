import React from 'react';
import '../assets/cards.css';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <a className='cards__item__link' href={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt="cards" 
                        className='cards__item__img' />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className='cards__item__text'>{props.listing}</h5>
                    </div>
                </a>
            </li>
        </>
    )
}

export default CardItem;

