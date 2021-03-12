import React from 'react';
import '../assets/button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button =({
    children, 
    type, 
    onClick,
    page, 
    buttonStyle, 
    buttonSize
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

        return (
            <a href={page} target="_blank" rel="noreferrer" className='btn-mobile'>
                <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >{children}</button>
            </a>
        )
    };


