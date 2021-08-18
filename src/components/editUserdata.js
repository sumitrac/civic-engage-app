
const editUserdata = () => {
    const user = useContext(UserContext);

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState("");
    const [title, setTitle] = useState("");
    const [start_date, setStart_date] = useState("");
    const [end_date, setEnd_date] = useState("")
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");

    const [incentive, setIncentive] = useState(false)
    const [editEvents, seteditEvents] = useState(false)

    const ref = firebase.firestore().collection("events")

    const editEvents(updatedEvent) {
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
    return (
        {user &&  (
            <div>
                <button onClick={() => seteditEvents({tag: event.tag, title: event.title, start_date: event.start_date, end_date: event.end_date, desc: event.desc, id: uuidv4, id: event.id })
                    }>Edit</button>
                
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


                <button onClick={(events) => editEvents({ tag, title, start_date, end_date, desc, amount, id: uuidv4() })}>
                    SUBMIT
                </button>

            </div>
        )
    )};