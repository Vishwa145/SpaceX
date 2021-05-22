import React, {useState} from "react";
import Header from "./Layout/Header";
import Body from "./Layout/Body";
import LoginContext from "./Helper/LoginContext";

function App(){

  const[logIn, ChangeLogIn] = useState( JSON.parse(sessionStorage.getItem("logIn")) || {Status:false});

  function ModifyLogIn(value){
    ChangeLogIn(value);
    sessionStorage.setItem( "logIn", JSON.stringify(value) );
  }

  return (<div className="App">
  <LoginContext.Provider value={{logIn, ModifyLogIn}}>
  <Header />
  <Body />
  </LoginContext.Provider>
  </div>);
}

export default App;