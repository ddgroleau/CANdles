import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import '../assets/cards.css';
import Account from './EtsyAPI';

function Cards() {
const [listings, setListings] = useState([{
    title: "",
    listing_id: "",
    url: '/products',
    price: "",
    MainImage: {"url_fullxfull": ""}
}]);
useEffect(() => {
    Account.getJsonpListing().then(res => setListings(res))
}, []); 
    return (
        <div className='cards'>
            <h1>Check it out broh!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    {listings.map((listing, id) => 
                        <CardItem           
                        src={listing.MainImage.url_fullxfull}
                        listing={listing.title.slice(0,listing.title.indexOf("-"))}
                        label={"$" + listing.price}
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

