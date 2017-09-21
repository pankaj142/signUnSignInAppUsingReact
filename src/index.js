import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { firebaseApp } from './firebase';

firebaseApp.auth().onAuthStateChanged(user =>{
    if(user){
        console.log('user has signed in or up.',user);
        //on signin redirect to /app (not working)
        {<Redirect to='/app' component={App}/>}
    
      
    }else{
        console.log('user has sign out or still need sign in.');
        //on signoff redirect to /signin (not working)
        {<Redirect to='/signin' component={SignIn} />}
    }
});

ReactDom.render(
    <BrowserRouter>
    <div>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
    </div>
    </BrowserRouter>, document.getElementById('root')
)