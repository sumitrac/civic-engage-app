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
    const [title, setTitle] = useState("");
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
            <h1>Events from City of Portland</h1>
            <div className="inputBox">
            <h3>Add New Meeting</h3>

            {/* input section for meeting little */}
            <input
                placeholder ="Meeting Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>

            <input 
                placeholder="Incentive Amount"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} />

        {/* input section for meeting description and works with editing */}
            <textarea 
                placeholder = "Meeting Description"
                value={desc} 
                onChange={(e) => setDesc(e.target.value)} />

            <button onClick={() => addMeeting({ title, desc, amount, id: uuidv4() })}>
                SUBMIT
            </button>
            </div>

            {/* line break */}
            <hr />

            {loading ? <h1>Loading...</h1> : null}
            {meetings.map((meeting) => (
            <div className="meeting" key={meeting.id}>
                <p>{meeting.tag}</p>
                <h2>{meeting.title}</h2>
                <time>{meeting.start_time}</time>
                <time>{meeting.end_time}</time>
                <p>{meeting.desc}</p>
                {/* <p>{meeting.amount}</p> */}
                <div>
                {/* <button onClick={() => deleteMeeting(meeting)}>Delete</button> */}
                {/* <button onClick={() => addIncentive(meeting)}>Add Incentive</button> */}
                <button
                    onClick={() => editMeeting({tag:meeting.tag, title:meeting.title, start_time:meeting.start_time, end_time:meeting.end_time, desc, id: meeting.id })
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
