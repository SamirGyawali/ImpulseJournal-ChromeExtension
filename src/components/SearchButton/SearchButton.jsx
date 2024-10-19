import React from 'react';
import './searchButton.scss';

const SearchButton = ({text, imgSrc}) => {
    return (

        <div className="buttonContainer">
            {imgSrc && <img src={imgSrc} alt="Button Icon" className='buttonIcon'/>}
            <input type="search" className='searchButton' placeholder={text}/>
        </div>
    );
};

export default SearchButton;