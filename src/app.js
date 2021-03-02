import React from 'react';
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/app.css'

const App = () => {
    return (
      <>
      <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact />
          </Switch>
          </Router>
      </>
    )
  }

  export default App;