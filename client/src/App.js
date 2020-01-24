import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import FormEmail from "./components/FormEmail";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />

          <PrivateRoute>
            <Route path="/" component={Dashboard} exact />
            <Route path="/contact" component={FormEmail} />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
