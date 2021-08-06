import React, { useEffect, useState, Fragment } from "react";
import firebase from "../firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
// import './App.css';
// import App from "./src/app";
import { v4 as uuidv4 } from "uuid";

function Meeting() {
    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState("");
    const [title, setTitle] = useState("");
    const [start_date, setStart_date] = useState("");
    const [end_date, setEnd_date] = useState("")
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");

    const ref = firebase.firestore().collection("meetings");
    // console.log(ref)

    // GET FUNCTION 
    function getMeetings(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const meetingList = [];
            querySnapshot.forEach((doc) => {
            meetingList.push(doc.data());

            });
            console.log(meetingList)
            setMeetings(meetingList);
            setLoading(false);
        });
        }

    useEffect(() => {
        getMeetings();
    }, []);

    // ADD FUNCTION 
    function addMeeting(newMeeting) {
        ref 
            .doc(newMeeting.id)
            .set(newMeeting)
            // .then(() => {
            // setMeetings((prev) => [newMeeting, ...prev]); 
            // })
            .catch((err) => {
            console.error(err);
            });
        }

    // DELETE FUNCTION 
    function deleteMeeting(meeting) {
        ref
            .doc(meeting.id)
            .delete()
            .catch((err) => {
            console.error(err);
            });
        }

    // EDIT FUNCTION
    function editMeeting(updatedMeeting) {
    setLoading();
        ref
            .doc(updatedMeeting.id)
            .update(updatedMeeting)
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

            <button onClick={() => addMeeting({ tag, title, start_date, end_date, desc, amount, id: uuidv4() })}>
                SUBMIT
            </button>
            </div>

            {/* line break */}
            <hr />
            <h1>Check out events from the City of Portland!</h1>

            {loading ? <h1>Loading...</h1> : null}
            {meetings.map((meeting) => (
            <div className="meeting" key={meeting.id}>
                <p>{meeting.tag}</p>
                <h2>{meeting.title}</h2>
                <time>{meeting.start_date}</time>
                <time>{meeting.end_date}</time>
                <p>{meeting.desc}</p>
                {/* <p>{meeting.amount}</p> */}
                <div>
                <button onClick={() => deleteMeeting(meeting)}>Delete</button>
                {/* <button onClick={() => addIncentive(meeting)}>Add Incentive</button> */}
                <button
                    onClick={() => editMeeting({tag:meeting.tag, title:meeting.title, start_date:meeting.event_start, end_date:meeting.event_end, desc, id: meeting.id })
                    }>
                    Edit
                </button>
                </div>
            </div>
            ))}
        </Fragment>
        );
    }
    

export default Meeting;
