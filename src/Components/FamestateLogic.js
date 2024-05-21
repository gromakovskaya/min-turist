import { useState } from "react";
import { useLocation } from "react-router-dom";
import APICallFame from "./APICallFame";

function FamestateLogic() {
const location1 = useLocation();
const [fameQuery, setFameQuery] = useState(location1.search.slice(1));

function changeFameQuery(query1){
    setFameQuery(query1);
    location1.search = query1;
   
}
return (
    <>
    <div className="famestateBar">
    <input className="famestate" type="famestate" placeholder="Поиск (пишите с большой буквы)" size={70} 
    onChange={(event) => changeFameQuery(event.target.value)} value={fameQuery} />
    </div>
    <APICallFame search={location1.search} />
    </>
)
    
}
export default FamestateLogic;