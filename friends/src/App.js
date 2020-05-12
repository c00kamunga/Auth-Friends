import React from 'react';
import Public from './components/Public'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Protected from './components/Protected'
import Friends from './components/Friends'
import Friend from './components/Friend'
import { Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to ="/protected">Protected Page</Link>
        </li>
        <li>
          <Link to="/friends">Friends List</Link>
        </li>
          <Route path="/login" component={Login}/>
          <Route path="/public" component={Public}/>
          <PrivateRoute path="/protected" component={Protected}/>
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute path="/friends/:id" component={Friend}/>
      </ul>
    </div>
  );
}

export default App;
