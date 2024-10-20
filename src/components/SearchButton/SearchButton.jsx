import React from 'react';
import './searchButton.scss';

const SearchButton = ({text, imgSrc}) => {
    return (

        <div className="buttonContainer">
            <input type="search" className='searchBar' placeholder={text}/>
            <button>
                {imgSrc && <img src={imgSrc} alt="Button Icon" className='buttonIcon'/>}
            </button>
        </div>
    );
};

export default SearchButton;