import React, { useEffect, useState } from 'react';
import UserCard from "./UserCard";
    
function APICall() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch('./data.json')
        .then((response) => response.json())
        .then((json) => setUsers(json))
        .finally(() =>setIsLoading(false));
    }, []);
    
  if (isLoading) {
    return (
      <div className='userCard'>
        <h1>Данные загружаются</h1> {' '}
      </div>
    )
  }
    return (
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} /> 
        ))}
      </div>
    );
  }
  
  export default APICall;
  
