import React from 'react';
import './homepage.scss';
import Toogle from '../../components/Toogle';

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className="titleWrapper">
                <h1>Samir Gyawali</h1>
                <Toogle />
            </div>
            <img src="../../assets/user.png" alt="" />
        </div>
    );
};

export default Homepage;