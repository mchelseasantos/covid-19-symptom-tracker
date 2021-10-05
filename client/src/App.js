import React, {useState} from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState('')
  const [notes, setNotes] = useState('')

  function addNote(text){
    const date = new Date();
    const newNote = {
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1 className="title">COVID-19 Symptom Tracker</h1>
      <Switch>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login path="/login" />
          </Route>
           <Route path="/">
            <Home notes={notes} handleAddNote={addNote} />
          </Route> 
        </Switch>
    </div>
  );
}

export default App;
