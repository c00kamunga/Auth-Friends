import React from 'react';
import { Route } from 'react-router-dom'


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
          <Route path="/public" component={public}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/protected" component={Protected}/>
      </ul>
    </div>
  );
}

export default App;
