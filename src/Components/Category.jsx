import React, { useState } from 'react';
import ActionButton from "./ActionButton";

function Dashboard ({catogeryName, catogery}){

    const[displaySubCatogery, changeDisplaySubCatogery] = useState(false);

    function GetSubCatogery(subCatogery)
    {
        return <ActionButton key={subCatogery} subCatogery={catogery[subCatogery]} />
    }

    function ChangeSubCatogeryDisplay()
    {
        changeDisplaySubCatogery((prev)=>prev===true?false:true);
    }

    return(
        <div className="Catogery">
            <button className="SubCatogeryButton" onClick={ChangeSubCatogeryDisplay}>{catogeryName}</button>
            {displaySubCatogery===true?<div className="SubCatogery" >{Object.keys(catogery).map((subCatogery)=>GetSubCatogery(subCatogery))}</div>:null}
        </div>
    );
}

export default Dashboard;
