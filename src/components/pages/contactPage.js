import contactForm from '../form';

const contactPage = () => {
    return (
    
    <div>
        <h2>This is a contact page</h2>
        {<contactForm/>}
    </div>

    );
}
export default contactPage;












// import firebase from "../firebase";
// import 'firebase/firestore';

// const container = document.querySelector('.container');
// const loading = document.querySelector('.loading');

// // store last document retrieved
// let latestDoc = null;

// const getNextEvents = async (doc) => {
//     loading.classList.add('active');

//     const ref = firebase.firestore().collection("events")
//         // .orderBy('createdAt')
//         .startAfter(doc || 0)
//         .limit(6);

//     const data = await ref.get();

//   // output docs
//     let template = '';
//     data.docs.forEach(doc => {
//     const event = doc.data();
//     template += `
//         <div class="card">
//         <h2>${event.tag}</h2>
//         <p>Written by ${event}</p>
//         <p>Rating - ${event.rating} / 5</p>
//         </div>
//     `
//     })
//     container.innerHTML += template;
//     loading.classList.remove('active');

//     // update latest doc
//     latestDoc = data.docs[data.docs.length - 1];

//     // unattach event listeners if no more docs
//     if (data.empty) {
//         loadMore.removeEventListener('click', handleClick);
//         container.removeEventListener('scroll', handleScroll);
//         }
//         }

//     // load data on DOM loaded
// window.addEventListener('DOMContentLoaded', () => getNextEvents());

// // load more docs (button)
// const loadMore = document.querySelector('.load-more button');

// const handleClick = () => {
//     getNextEvents(latestDoc)
//     }

// loadMore.addEventListener('click', handleClick);

// // load more books (scroll)
// const handleScroll = () => {
//     let triggerHeight = container.scrollTop + container.offsetHeight;
//     if (triggerHeight >= container.scrollHeight) {
//     getNextEvents(latestDoc);
//     }
//     }

// container.addEventListener('scroll', handleScroll);

// export default getNextEvents;