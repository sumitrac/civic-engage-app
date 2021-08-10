import React, { Component } from 'react'
import Notification from './Notification';
import EventList from '../event/EventList';
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { events } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">

                    {/* section for event list */}
                    <div className="col s12 m6"></div> 
                        <EventList events={events} />

                    {/* section for notification list
                    <div className="col s12 m5 offset-m1"></div>
                        <Notification /> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.event.events
    }
}
export default connect(mapStateToProps)(Dashboard);