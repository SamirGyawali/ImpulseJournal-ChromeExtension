import React from "react";
import "./ListComponent.scss";

const ListComponent = () => {
  return (
    <div className="listComponent">
        <div className="textWrapper">
            <div className="dateTime">
                <span className="date">2024/10/25</span><span className="time">10:45 am</span>
            </div>
            <div className="textCollections">
                <h4 className="title">Trying to do something on github</h4>
                <span className="description">To get attention from someone.</span>
            </div>
        </div>
        <div className="textWrapper">
            <div className="dateTime">
                <span className="date">2024/10/25</span><span className="time">12:00 pm</span>
            </div>
            <div className="textCollections">
                <h4 className="title">Watching Youtube</h4>
                <span className="description">In order to do something “spiritual” or maybe to fill the void</span>
            </div>
        </div>
        <div className="textWrapper">
            <div className="dateTime">
                <span className="date">2024/10/25</span><span className="time">1:15 pm</span>
            </div>
            <div className="textCollections">
                <h4 className="title">Listen Music</h4>
                <span className="description">Strong impulse to listen to the music, it’s been so long, there’s a thought i deserve it.( PLEASURE DRIVEN )</span>
            </div>
        </div>
        <div className="textWrapper">
            <div className="dateTime">
                <span className="date">2024/10/25</span><span className="time">2:00 pm</span>
            </div>
            <div className="textCollections">
                <h4 className="title">Trying to do something on github</h4>
                <span className="description">To get attention from someone.</span>
            </div>
        </div>
        <div className="textWrapper">
            <div className="dateTime">
                <span className="date">2024/10/25</span><span className="time">2:27 pm</span>
            </div>
            <div className="textCollections">
                <h4 className="title">Trying to do something on github</h4>
                <span className="description">To get attention from someone.</span>
            </div>
        </div>
        <div className="textWrapper">
            <div className="dateTime">
                <span className="date">2024/10/25</span><span className="time">2:45 pm</span>
            </div>
            <div className="textCollections">
                <h4 className="title">Trying to do something on github</h4>
                <span className="description">To get attention from someone.</span>
            </div>
        </div>
        <span className="showMore">Show more...</span>
    </div>
  );
};

export default ListComponent;
