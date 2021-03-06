import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/app.css'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Sustainability from './components/pages/About';
import Contact from './components/pages/Contact';

const App = () => {
    return (
      <>
      <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact 
              component={Home} />
              <Route path="/products" exact 
              component={Products} />
              <Route path="/about" exact 
              component={Sustainability} />
              <Route path="/contact" exact 
              component={Contact} />
          </Switch>
          </Router>
      </>
    )
  }

  export default App;