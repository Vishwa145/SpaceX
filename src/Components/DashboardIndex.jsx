import React from "react";
import Catogery from "../Components/Category";
import catogeries from "../Helper/Catogeries";

function DashboardIndex(){
    return (
            <div className="DashboardIndex">
                {Object.keys(catogeries).map((catogery)=>{
                    return <Catogery key={catogery} catogeryName={catogery} catogery={catogeries[catogery]} />
                })}
            </div>
    );
}

export default DashboardIndex;