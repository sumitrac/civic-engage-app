import React from 'react';
import Meeting from '../Meeting';

const EventPage = () => {
    return (
    <div
        // style={{
        // display: 'flex',
        // justifyContent: 'Right',
        // alignItems: 'Right',
        // height: '100vh'
        // }}
    >
        <h1>Check out all events</h1>
        {<Meeting/>}
    </div>
    );
    };

export default EventPage;