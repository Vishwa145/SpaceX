import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import LoginContext from "../Helper/LoginContext";

function Body (){

    const {logIn} = useContext(LoginContext);

    return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        {logIn.status===true?<Redirect to="/Dashboard" />:<Redirect to="/Login" />}
                    </Route>
                    <Route exact path="/Login">
                        <Login />
                    </Route>
                    <Route path="/Dashboard">
                        {logIn.status===true?<Redirect to="/Dashboard" />:<Redirect to="/Login" />}
                    <Dashboard />
                    </Route>
                </Switch>
            </Router>
    );
}

export default Body;
