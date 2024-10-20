import React from 'react';
import './dashboard.scss';
import Toogle from '../../components/toogle/Toogle';
import NewButton from '../../components/Newbutton/NewButton';
import SearchButton from '../../components/SearchButton/SearchButton';
import ListComponent from '../../components/ListComponent/ListComponent';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="profileWrapper">
                <div className="titleWrapper">
                    <h1>Samir Gyawali</h1>
                    <div className="toogleDiv">
                        <Toogle />
                        <span>Mindful Reminder</span>
                    </div>
                </div>
                <img src="../../assets/user2.png" alt="" />
            </div>
            <div className="stats">
                <div className="totalEntries">
                    <span className='title'>Total Entries</span>
                    <span className='total block'>35</span>
                </div>
                <div className="attentionSeeking">
                    <span className='title'>Attention Seeking</span>
                    <span className='attention block'>10</span>
                </div>
                <div className="pleasureDriven">
                    <span className='title'>Pleasure Driven</span>
                    <span className='pleasure block'>15</span>
                </div>
            </div>
            <div className="buttonWrapper">
                    <NewButton text="NEW IMPULSE" fontClass="fontImpulse"/>
                    <SearchButton text="Search by keyword" imgSrc={"../../assets/search.png"}/>
            </div>
            <div className="dayFilters">
                <span className="day">Today</span>
                <span className="day inactive">Last 7 days</span>
            </div>
            <ListComponent />
        </div>
    );
};

export default Dashboard;