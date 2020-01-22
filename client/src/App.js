import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
