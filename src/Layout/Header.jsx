import React, { useContext } from 'react';
import LoginContext from "../Helper/LoginContext";

function Header (){

    const {logIn, ModifyLogIn} = useContext(LoginContext);

    function Logout()
    {
        ModifyLogIn({status: false});
    }

    return(
        <div className="Nav">
            <div className="Logo"><img height="30px" src="https://img.icons8.com/dusk/64/000000/rocket--v1.png" alt="Logo"/><h2>Spacex</h2></div>
            {logIn.status===true?<button onClick={Logout}>Logout</button>:null}
        </div>
    );
}

export default Header;
