import React, { useState, useContext } from 'react';
import {
    Redirect
  } from "react-router-dom";
import LoginContext from "../Helper/LoginContext";
import {adminURL,userURL, authicationfailURL} from "../Helper/URLs";
import users from "../Helper/Credentials";

function Login(){

    const {logIn, ModifyLogIn} = useContext(LoginContext);

    const [userName, changeUserName] = useState("");
    const [password, changePassword] = useState("");

    function Auth()
    {
        let URL = (userName === users.admin.userName && password === users.admin.password )? adminURL 
        : (userName === users.user.userName && password === users.user.password)? userURL
        : authicationfailURL;

        fetch(URL).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                  return;
                }
          
                // Examine the text in the response
                response.json().then(function(data) {
                    ModifyLogIn(data);
                    if(data.status===false)
                    {
                        alert("Invalid UserName/Password");
                        changeUserName("");
                        changePassword("");
                    }
                });
              }
        ).catch(
            function(err) {
                console.log('Fetch Error :' + err);
              }
        );
    }

    return (
        <div className="Login">
            <input type="text" placeholder="UserName" value={userName} onChange={(event)=>{changeUserName(event.target.value)}} />
            <input type="password" placeholder="Password" value={password} onChange={(event)=>{changePassword(event.target.value)}}/>
            <button onClick={Auth}>Login</button>
            {logIn.status===true?<Redirect to="/Dashboard" />:<Redirect to="/Login" />}
        </div>
    );
}

export default Login;