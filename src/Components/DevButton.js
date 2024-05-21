import React, { useState } from "react";
import APICall from "./APICall";
function DevButton (){
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible (!isVisible);
    }
    return(
        <div>
            <button className='developers' onClick={toggleVisibility}>Разработчики</button>
        {isVisible &&<APICall />}
        </div>
        
        );
    
}
export default DevButton;