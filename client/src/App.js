import React, {useState} from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [user, setUser] = useState("")

  return (
    <div className="App">
      <h1>Covid-19 Symptom Tracker</h1>
      <Switch>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login path="/login" />
          </Route>
           <Route path="/">
            <Home />
          </Route> 
        </Switch>
    </div>
  );
}

export default App;
