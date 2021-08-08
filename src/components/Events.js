import React, { useEffect, useState, Fragment } from "react";
import firebase from "../firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
// import './App.css';
// import App from "./src/app";
import { v4 as uuidv4 } from "uuid";

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState("");
    const [title, setTitle] = useState("");
    const [start_date, setStart_date] = useState("");
    const [end_date, setEnd_date] = useState("")
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");

    const ref = firebase.firestore().collection("events");
    // console.log(ref)

    // GET FUNCTION 
    function getEvents(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const eventList = [];
            querySnapshot.forEach((doc) => {
            eventList.push(doc.data());

            });
            console.log(eventList)
            setEvents(eventList);
            setLoading(false);
        });
        }

    useEffect(() => {
        getEvents();
    },[]);

    // ADD FUNCTION 
    function addEvent(newEvent) {
        ref 
            .doc(newEvent.id)
            .set(newEvent)
            // .then(() => {
            // setMeetings((prev) => [newMeeting, ...prev]); 
            // })
            .catch((err) => {
            console.error(err);
            });
        }

    // DELETE FUNCTION 
    function deleteMeeting(event) {
        ref
            .doc(event.id)
            .delete()
            .catch((err) => {
            console.error(err);
            });
        }

    // EDIT FUNCTION
    function editMeeting(updatedEvent) {
    setLoading();
        ref
            .doc(updatedEvent.id)
            .update(updatedEvent)
            .catch((err) => {
            console.error(err);
            });
        }
    // Add Incentive 
    function addIncentive(addPayment) {
        ref 
            .doc(addPayment.id)
            .set(addPayment)
            .catch((err) => {
            console.error(err);
            });
        }

    return (
        <Fragment>
            {/* <h1>Events from City of Portland</h1> */}

            {/* if frontend user input do this? */}

            <div className="eventInput">
                <h3>Add New Event</h3>

                {/* input section for event tag */}
                <label> Enter Event Tag:
                    <input
                        placeholder ="Event Tag"
                        type="text"
                        // name="Event Tag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}/>
                </label>

                {/* input section for event title */}
                <label>Enter Event Title:
                    <input
                        placeholder ="Event Title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                </label>

                {/* input section for event start date */}
                <label>Enter Event Start Date:
                    <input
                        placeholder ="Event start date"
                        type="date"
                        value={start_date}
                        onChange={(e) => setStart_date(e.target.value)}/>    
                </label>

                {/* input section for event end date */}
                <label>Enter Event End Date:
                    <input
                        placeholder ="Event end date"
                        type="date"
                        value={end_date}
                        onChange={(e) => setEnd_date(e.target.value)}/>   
                </label>

                {/* input section for event description */}
                <label>Enter Event Description:
                    <textarea 
                        placeholder = "Meeting Description"
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} />
                </label>

                {/* input section for incentive amount */}
                <input 
                    placeholder="Incentive Amount"
                    type="number"
                    value={amount}
                    prefix= {'$'}
                    onChange={(e) => setAmount(e.target.value)} />

                <button onClick={() => addEvent({ tag, title, start_date, end_date, desc, amount, id: uuidv4() })}>
                    SUBMIT
                </button>
            </div>

            {/* line break */}
            
            {/* if backend data, do this? */}
            <hr />
            <h1>Check out events from the City of Portland!</h1>
            {loading ? <h1>Loading...</h1> : null}

            {events.map((event) => (
            <div className="event" key={event.id}>
                <p>{event.tag}</p>
                <h2>{event.title}</h2>
                <time>{event.start_date}</time>
                <time>{event.end_date}</time>
                <p>{event.desc}</p>
                <p>{event.info_link}</p>
                <p>{event.amount}</p>

                <div>
                    <button onClick={() => deleteMeeting(event)}>Delete</button>
                    {/* <button onClick={() => addIncentive(event)}>Add Incentive</button> */}
                    <button
                        onClick={() => editMeeting({tag: event.tag, title: event.title, start_date: event.event_start, end_date: event.event_end, desc: event.desc, id: event.id })
                        }>
                        Edit
                    </button>
                </div>
            </div>
            ))}
        </Fragment>
        );
    }
    

export default Events;
