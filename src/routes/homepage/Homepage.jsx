import React from 'react';
import './homepage.scss';
import NewButton from '../../components/Newbutton/NewButton';
import ListComponent from '../../components/ListComponent/ListComponent';

const Homepage = () => {
    return (
        <div className='homePage'>
            <div className="topWrapper">
                <div className="topNav">
                    <div className="dateTime">
                        <span className="date">2024/10/25</span><span className="time">12:00 pm</span>
                    </div>
                    <button className='circle'></button>
                </div>
                <div className="textFieldWrapper">
                    <textarea name="impulsetxt" id="" placeholder='Impulse' className='impulse'></textarea>
                    <div className="wrap">
                        <textarea name="motivationtxt" id="" placeholder='Motivation / What triggred this?' className='motivation'></textarea>
                        <NewButton text="CREATE" className="createButton"/>

                    </div>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="filters">
                    <span className='recent'>Recent Impulse</span>
                    <span className='repeated inactive'>Repeated Impulse</span>
                </div>
                <ListComponent/>
            </div>
        </div>
    );
};

export default Homepage;