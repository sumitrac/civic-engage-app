const initState = {
    events: [
        {id: '1', title: 'find', content: 'blah blah blah'},
        {id: '2', title: 'collect', content: 'blah blah blah'},
        {id: '3', title: 'hunt', content: 'blah blah blah'}
    ]
}

const eventReducer = (state = initState, action) => {
    return state;
};

export default eventReducer;