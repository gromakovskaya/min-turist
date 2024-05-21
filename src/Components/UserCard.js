import React, { useState } from "react";
import './UserCard.css';

function UserCard(props){
    console.log(props.user.name);
    const { name, avatar, address, job, email } = props.user;
    return (
        <div className='userCard'>
        <div className="ava">{avatar && <img className='avatar' src={avatar} alt={name}/>}</div>
    
        <div className="Container">
        <h3 className='name'>{name}</h3>
        <p className='detail1'>Должность: {job}</p>
        <p className='detail2'>E-mail: {email}</p>
        <p className='detail3'>Адрес: {address}</p>  
        <div className="button"><button onClick={onclick} className="sendButton">Отправить письмо</button></div>     
        </div>
        
        </div>
    );

}
export default UserCard;