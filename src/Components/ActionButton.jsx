import React, {useContext} from "react";
import DashboardContext from "../Helper/DashboardContext";

function ActionButton({subCatogery})
{

  let {changeResult} = useContext(DashboardContext);

    function DisplayResults()
    {
        console.log(subCatogery.subCatogeryURL);
        fetch(subCatogery.subCatogeryURL).then(
            function(response) {
                if (response.status !== 200) {
                  response.json().then(function(data) {
                    changeResult(Array.isArray(data)?data:[data]);
                  });
                  return;
                }
          
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

    return(
        <button onClick={DisplayResults} className="SubCatogeryButton">{subCatogery.subCatogeryName}</button>
    );
}

export default ActionButton;