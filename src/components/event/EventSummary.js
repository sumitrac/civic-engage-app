import React from 'react'


const EventSummary = ({ event }) => {
    return (
        <div className="card z-depth-0 event-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{event.title}</span>
                <p>Posted by the ....</p>
                <p className="grey-text"> August 9th</p>
            </div>
        </div>

    )
}

export default EventSummary; 
    