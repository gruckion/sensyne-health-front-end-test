import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
/* Inconsistent use of ; at the end of imports */
import NavigationDrawer from './components/navigationDrawer';
import Home from './pages/home';
/* QuestionOneWrapper was imported as QuestionOne. Which is a different component. This can lead to unnecessary confusion.
   Stick to named exports as they are easier to refactor, and are less likely to cause issues like this.
*/
import { QuestionOneWrapper } from './pages/questionOne';
import QuestionTwo from './pages/questionTwo';
import QuestionThree from './pages/questionThree';
import QuestionFour from './pages/questionFour';
import AppBar from './components/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar/>
        <NavigationDrawer/>
        <div style={{flex: 1, overflow:'auto'}}>
          <Switch>
            <Route path="/questionOne">
              <QuestionOneWrapper/>
            </Route>
            <Route path="/questionTwo">
              <QuestionTwo />
            </Route>
            <Route path="/questionThree">
              <QuestionThree />
            </Route>
            <Route path="/questionFour">
              <QuestionFour />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
