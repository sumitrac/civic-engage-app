import React from 'react';
import Meeting from '../components/Meeting';

const Events = () => {
    return (
    <div
        // style={{
        // display: 'flex',
        // justifyContent: 'Right',
        // alignItems: 'Right',
        // height: '100vh'
        // }}
    >
        <h1>Check out events from city of Portland</h1>
        {<Meeting/>}
    </div>
    );
    };

export default Events;