import React from 'react';
import signIn from '../../signIn';

const signInPage = () => {
    return (
    <div
        // style={{
        // display: 'flex',
        // justifyContent: 'Right',
        // alignItems: 'Right',
        // height: '100vh'
        // }}
    >
        <h1>Sign In</h1>
        {<signIn/>}
    </div>
    );
    };

export default signInPage;