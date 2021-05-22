import React, { useContext } from 'react';
import DashboardContext from "../Helper/DashboardContext";

function DashboardMain (){

  var keyCounter = 0;

    let {result} = useContext(DashboardContext);
      
      function components(catogery, catogeryName, indexflag){
        let items=[];

        if((typeof catogery === "object" && catogery !== null) || Array.isArray(catogery))
        {
            items.push(indexflag===true?<p key={keyCounter++}><strong>{catogeryName}</strong> {" : "}</p>:null);
            let indexing = Array.isArray(catogery)?false:true;
            Object.keys(catogery).forEach((key)=>{
                  items.push(<div className="Division">{components(catogery[key], key, indexing)}</div>);
            });
        }
        else
        {
            items.push(indexflag===true?<p key={keyCounter++}><strong>{catogeryName}</strong> {" : " + catogery}</p>: <p key={keyCounter++}>{catogery}</p>);
        }

        return <div className="Division">{items.map((comp)=>comp)}</div>;
      }

    return(
           <div className="DashboardMain">
              <div className="DashboardMain">
                {components(result)}
              </div>
            </div>
    );
}

export default DashboardMain;
