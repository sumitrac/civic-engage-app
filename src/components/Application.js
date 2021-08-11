import React, { useContext } from "react";
// import { Router } from "@react/router";
// import { Router } from 'react-router-dom'

import { BrowserRouter, Switch, Route, Router} from 'react-router-dom';


import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";

function Application() {
    const user = useContext(UserContext);
    return (
        user ?
        <ProfilePage />
    :
        // <Router>
        //     <SignUp path="signUp" />
        //     <SignIn path="/" />
        //     <PasswordReset path = "passwordReset" />
        // </Router>

        <BrowserRouter>
        {/* <Navbar /> */}
            <Switch>
              {/* <Route path='/' exact component={Home} /> */}
                <Route path='/' component={SignUp} />
                <Route path='/' component={SignIn} />
                <Route path='/' component={PasswordReset} />
              {/* <Route path='/about' component={About} /> */}
            </Switch>
      </BrowserRouter>

        // <div>Hello World</div>
    );
}

export default Application;