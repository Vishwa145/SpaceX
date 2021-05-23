import React, {useContext, useState} from "react";
import DashboardContext from "../Helper/DashboardContext";

function ActionButton({subCatogery})
{

  let {changeResult} = useContext(DashboardContext);

  let [selectedName, ChangeSelectedName] = useState("");

    function DisplayResults(event)
    {
      event.preventDefault();
      console.log(subCatogery.subCatogeryURL + selectedName);
        fetch(subCatogery.subCatogeryURL + selectedName).then(
            function(response) {
                // Examine the text in the response
                response.json().then(function(data) {
                  changeResult(Array.isArray(data)?data:[data]);
                });
              }
        ).catch(
            function(err) {
              changeResult([{Result:"Error fetching data"}]);
                console.log('1Fetch Error :' + err);
              }
        );
    }

    function ControlInput(event)
    {
      if(event.target.value[0]===" " || event.target.value[0]==="/")
      {
        alert("Emtpy spaces or slash characters not allowed at the starting");
      }
      else{
        ChangeSelectedName(event.target.value);
      }
    }

    return(
        <form onSubmit={DisplayResults}>
        {subCatogery.subCatogeryName.includes("One")===true?<input type="text" onChange={ControlInput} value={selectedName} placeholder="Enter serial/id to identify" required/>:null}
        <button type="submit" className="SubCatogeryButton">{subCatogery.subCatogeryName}</button>
        </form>
    );
}

export default ActionButton;
