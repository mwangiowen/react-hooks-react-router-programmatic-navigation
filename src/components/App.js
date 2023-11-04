// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar setIsLoggedIn={setIsLoggedIn} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login">
            <Login onLogin={() => setIsLoggedIn(true)} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
