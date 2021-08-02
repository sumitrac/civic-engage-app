import React, { Fragment } from "react";
import Meeting from './components/Meeting';
import firebase from "./firebase";
// import firebase from 'firebase';
// import * as firebase from 'firebase';
import 'firebase/firestore';
// import './App.css';

function App() {
  return (
    <Fragment>
      {<Meeting/>}
    </Fragment>
  )}

export default App;



//   const [meetings, setMeetings] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const ref = firebase.firestore().collection("meetings");
//   // console.log(ref)

// // Function to get meeting from firestore 
//   function getMeetings(){
//     setLoading(true);
//     ref.onSnapshot((querySnapshot) => {
//       const meetingList = [];
//       querySnapshot.forEach((doc) => {
//         meetingList.push(doc.data());

//       });
//       setMeetings(meetingList);
//       setLoading(false);
//     });
//   }

//     useEffect(() => {
//       getMeetings();
//     }, []);

// // Function to add new meeting to firestore 
//   function addMeeting(newMeeting) {
//     ref 
//       .doc(newMeeting.document_id)
//       .set(newMeeting)
//       .then(() => {
//         setMeetings((prev) => [newMeeting, ...prev]); 
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//     }

// // Function to delete 
    

//   if (loading) {
//     return <h1>Loading.....</h1>
//   }

//   return (
//     <div>
//       <h1>Events from City of Portland</h1>
//       {meetings.map((meeting) => (
//         <div key={meeting.document_id}>
//           <h2>{meeting.title}</h2>
//           <h2>{meeting.tag}</h2>
//           <p>{meeting.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
