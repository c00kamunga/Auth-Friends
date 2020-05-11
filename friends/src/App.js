import React from 'react';
import Public from './components/Public'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Protected from './components/Protected'
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
          <Route path="/login" component={Login}/>
          <Route path="/public" component={Public}/>
          <PrivateRoute path="/protected" component={Protected}/>
      </ul>
    </div>
  );
}

export default App;
