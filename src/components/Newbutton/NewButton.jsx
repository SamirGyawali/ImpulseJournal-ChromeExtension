import React from 'react';
import './newButton.scss';

const NewButton = ({text, imgSrc, onClick}) => {
    return (
        <button className="button" onClick={onClick}>
            {imgSrc && <img src={imgSrc} alt="Button Icon" className='buttonIcon'/>}
            {text}
        </button>
    );
};

export default NewButton;