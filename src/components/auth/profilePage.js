import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
// import { navigate } from 'react-router-dom';
import {auth} from "../../firebase";

const ProfilePage = () => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user || {};
    console.log(user);

    if (!user) {
        return null;
    }
    return (
        user && (
        <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
            <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
            <div
                style={{
                background: `url(${photoURL || 'https://images.unsplash.com/photo-1558103286-b6e3c09fdb07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'})  no-repeat center center`,
                backgroundSize: "cover",
                height: "200px",
                width: "200px"
                }}
                className="border border-blue-300"
            ></div>
            <div className = "md:pl-4">
            <h2 className = "text-2xl font-semibold">Hey {displayName}, you're signed in!</h2>
            <h3 className = "italic">{email}</h3>
            </div>
            </div>
            <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>
        </div>
        )
    ) 
};

export default ProfilePage;