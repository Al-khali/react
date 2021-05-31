import React from 'react'
import { Home , Blog , About, Contact, Resume }  from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Nav } from './layout'


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Nav />
          <Switch>
            <Route exact path="/Blog">
              <Blog />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
