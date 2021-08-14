import 'firebase/firestore';
import './App.css';

import Navigation from './components/navbar/Navigation';
import { Switch, Route, Router} from 'react-router-dom';
import aboutPage from './components/pages/aboutPage';
import eventPage from './components/pages/eventPage';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import ProfilePage from './components/auth/profilePage';
import Footer from "./components/footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './providers/UserProvider';

function App() {
    return (
      
      <div className='App'>
            <Navigation/>

            <Switch>
                <Route exact path='/' component={aboutPage} />
                <Route path='/eventPage' component={eventPage} />

                <Route path='/SignIn' component={SignIn} /> 
                <Route path='/SignUp' component={SignUp} />
                <Route path='/profilePage' component={ProfilePage} />
            </Switch>
      {/* <Footer/> */}
      </div> 
  );
}
export default App;