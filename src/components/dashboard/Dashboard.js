import React, { Component } from 'react'
import Notification from './Notification';
import ProjectList from '../event/EventList';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">

                    {/* section for event list */}
                    <div className="col s12 m6"></div> 
                        <ProjectList />

                    {/* section for notification list
                    <div className="col s12 m5 offset-m1"></div>
                        <Notification /> */}
                </div>
            </div>
        )
    }
}
export default Dashboard;