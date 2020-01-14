import React from 'react';
import image from '../images/gif/loading-arrow.gif';
const Loading = () => {
    return (
        <div className="loading">
            <h4>Rooms images loading</h4>
            <img src={image} alt="data"></img>
            
        </div>
    );
}

export default Loading;
