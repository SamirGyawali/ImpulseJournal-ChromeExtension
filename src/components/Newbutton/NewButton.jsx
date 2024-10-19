import React from 'react';
import './newButton.scss';

const NewButton = ({text, imgSrc}) => {
    return (
        <button className="button">
            {imgSrc && <img src={imgSrc} alt="Button Icon" className='buttonIcon'/>}
            {text}
        </button>
    );
};

export default NewButton;