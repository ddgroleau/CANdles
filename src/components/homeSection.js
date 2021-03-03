import React from 'react';
import '../assets/homeSection.css';
import '../assets/app.css';
import { Button } from './button'
import video2 from "../assets/videos/video-2.mp4"

function HomeSection() {
    return (
        <div className='home-container'>
            <video src={video2} autoPlay loop muted />
            <h1>Beer Can Candles Broh!</h1>
            <p>So sick!</p>
            <div className="home-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    CONTACT
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    ETSY
                </Button>
            
            </div>
        </div>
    );
}

export default HomeSection;


