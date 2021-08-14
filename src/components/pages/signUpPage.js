import React from 'react';
import signUp from '../../signUp';

const signUpPage = () => {
    return (
        <div
    //     style={{
    //     display: 'flex',
    //     justifyContent: 'Right',
    //     alignItems: 'Right',
    //     height: '100vh'
    // }}
        >
        <h1>Sign Up</h1>
        <p>New user sign up page</p>
        {<signUp/>}
    </div>
    );
};

export default signUpPage;