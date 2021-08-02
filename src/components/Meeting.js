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
        .then(() => {
        setMeetings((prev) => [newMeeting, ...prev]); 
        })
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

    return (
        <Fragment>
            <h1>Events from City of Portland</h1>
            <div className="inputBox">
            <h3>Add New Meeting</h3>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>

            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
            <button onClick={() => addMeeting({ title, desc, id: uuidv4() })}>
                Submit
            </button>
            </div>
            <hr />
            {loading ? <h1>Loading...</h1> : null}
            {meetings.map((meeting) => (
            <div className="meeting" key={meeting.id}>
                <h2>{meeting.title}</h2>
                <p>{meeting.desc}</p>
                <div>
                <button onClick={() => deleteMeeting(meeting)}>X</button>
                <button
                    onClick={() =>
                    editMeeting({ title: meeting.title, desc, id: meeting.id })
                    }
                >
                    Edit
                </button>
                </div>
            </div>
            ))}
        </Fragment>
        );
    }
    

export default Meeting;
