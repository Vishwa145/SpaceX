import React, {useContext} from "react";
import Catogery from "../Components/Category";
import LoginContext from "../Helper/LoginContext";

function DashboardIndex(){

    const {logIn} = useContext(LoginContext);

    return (
            <div className="DashboardIndex">
                {logIn.status===true?Object.keys(logIn.Categories).map((catogery)=>{
                    return <Catogery key={catogery} catogeryName={catogery} catogery={logIn.Categories[catogery]} />
                }):<h1>Couldn't log properly, please try again.</h1>}
            </div>
    );
}

export default DashboardIndex;
