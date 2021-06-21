import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import add_data from './home.js';
import result_list from './result_list.js';
import Edit from './edit.js';
function App() {
  return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/result_list">result_list</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          
            <Route exact path="/result_list" component={result_list} />
        {/* <Route path="/edit/:id" component={(props) => <Edit {...props} />} /> */}
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/topics" component={add_data} />
          <Route exact path="/" component={add_data} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
