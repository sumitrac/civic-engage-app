import { UserContext } from "../providers/UserProvider";
import { useState, useContext } from "react";
import firebase from "../firebase";
// import { v4 as uuidv4 } from "uuid";

const EachEvent = ({event}) => {
    const user = useContext(UserContext);
    const [incentive, setIncentive] = useState(false);
    const [amount, setAmount] = useState("");


    // DELETE FUNCTION 
    function deleteEvent(event) {
        const ref = firebase.firestore().collection("events")
        ref
            .doc(event.id)
            .delete()
            .catch((err) => {
            console.error(err);
            });
        }

    // EDIT FUNCTION
    function editEvent(updatedEvent) {
        const ref = firebase.firestore().collection("events")
        // newEvent.email = user.email 
        // console.log('hello')
        // setLoading();
        ref
            .doc(updatedEvent.id)
            .update(updatedEvent)
            .catch((err) => {
            console.error(err);
            });
        }
    // Add Incentive 
    function addIncentive(event, amount) {
        const ref = firebase.firestore().collection("events")
        ref 
            .doc(event.id)
            .update({amount:amount})
            .then(() => {
                setIncentive(false)
            }) 
            .catch((err) => {
            console.error(err);
            });
        }


    return (
            <div className="event_list">
                 {/* key={event.id}> */}
                {/* <p>{event.id}</p> */}
                <p>{event.tag}</p>
                <h2>{event.title}</h2>
                <time>{event.start_date}</time>
                <time>{event.end_date}</time>
                <p>{event.desc}</p>
                {/* <p>{event.info_link}</p> */}
                <p>{event.amount}</p>
                {/* <p>posted by {event.user}</p> */}

            {/* This happen when user is login and login email match */}
                {user && event.email === user.email && (
                <div>
                    <div> 
                        <button onClick={() => deleteEvent(event)}>Delete</button>

                        {/* both method not working */}
                        {/* <button onClick={() => editEvent(updatedEvent)}>Edit event</button> */}
                        <button onClick={() => editEvent({tag: event.tag, 
                        title: event.title, 
                        start_date: event.start_date, 
                        end_date: event.end_date,
                        desc: event.desc, 
                        // id: uuidv4, 
                        id: event.id })

                        }>Edit</button>
                    </div>
                </div>
                )
                }

                {user &&  (
                <div>
                    <button onClick={() => setIncentive(true)}>Add Incentive</button>
                    
                    {incentive && (
                    <>
                    <input 
                    placeholder="Incentive Amount"
                    type="number"
                    value={amount}
                    prefix= {'$'}
                    onChange={(e) => setAmount(e.target.value)}/>
                
                    <button onClick={() => addIncentive(event, amount)}>
                        SUBMIT
                    </button> 
                    </> 
                    ) }
                </div>
                )
                }
            </div>
    )}

export default EachEvent;