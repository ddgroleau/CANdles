import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import '../assets/cards.css';
import Account from './API';
import img9 from '../assets/images/img-9.jpg';

function Cards() {
const [listings, setListings] = useState([{
    title: "",
    listing_id: "",
    url: '/products'
}]);
useEffect(() => {
    Account.getJsonpListing().then(res => setListings(res))
}, []); 
console.log(listings);
    return (
        <div className='cards'>
            <h1>Check it out broh!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    
                    {listings.map((listing, id) => 
 <CardItem           
 src={img9}
 listing={listing.title}
 label="1"
 key={id}
 path={listing.url}
/>
                    )}  
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

