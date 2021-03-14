import React from 'react';
import '../assets/homeSection.css';
import '../assets/app.css';
import { Button } from './Button'
import video2 from "../assets/videos/video-2.mp4"

function HomeSection() {
    return (
        <div className='home-container'>
            <video src={video2} autoPlay loop muted playsinline />
            
            <h1>CANdles</h1>
            <p>Earth-friendly wax + recycled craft beer cans.</p>
            
            <div className="home-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                page="https://www.etsy.com/shop/CANdles5280"
                >
                    ETSY
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                page="/contact"
                >
                    CONTACT
                </Button>
            
            </div>
        </div>
    );
}

export default HomeSection;


