import React, { useEffect, useState } from 'react';
import FamestateCard from "./FamestateCard";
    
function APICallFame(props) {
    const [famestates, setFamestates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const search = props.search;
  
    useEffect(() => {
      fetch('./famestate.json')
        .then((response) => response.json())
        .then((json) => setFamestates(json))
        .finally(() =>setIsLoading(false));
    }, []);
    
  if (isLoading) {
    return (
      <div className='FamestateCard'>
        <h1>Данные загружаются</h1> {' '}
      </div>
    )
  }
    return (
      <div>
      {famestates.map((famestate) => famestate.name.indexOf(search) >= 0 ? (
         <FamestateCard {...famestate} key={famestate.id} famestate={famestate}/>
          ) : (
            console.log("Не найдено")
          )
      )}
      </div>
    );
  }
  
  export default APICallFame;
  
