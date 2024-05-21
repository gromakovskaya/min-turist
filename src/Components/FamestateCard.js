import React, { useState } from "react";
import './FamestateCard.css';

function FamestateCard(props){
    console.log(props.famestate.name);
    const { name, avatar} = props.famestate;
    return (
        <div className='famestateCard'>
        <div className="ava1">{avatar && <img className='avatar' src={avatar} alt={name} />}</div>
    
        <div className="Container1">
        <h3 className='name1'>Название достропримечательности: {name}</h3>        
        </div>        
        </div>
    );

}
export default FamestateCard;