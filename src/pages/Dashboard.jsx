import React, { useState } from 'react';
import DashboardMain from "../Components/DashboardMain";
import DashboardIndex from "../Components/DashboardIndex";
import DashboardContext from "../Helper/DashboardContext";


function Dashboard (){

    const [result, changeResult] = useState();

    return(
            <div className="Dashboard">
                <DashboardContext.Provider value={{result, changeResult}}>
                    <DashboardIndex />
                    <DashboardMain />
                </DashboardContext.Provider>
            </div>
    );
}

export default Dashboard;