import propTypes from 'prop-types';
import React, { useState } from 'react';
import './LoremCard.css' ;

function LoremCard({ albumId, brief, id, thumbnailUrl, title, url }) {

    const [cardColor , setCardColor] = useState('');
    const [count , setCount] = useState(0);

    const handleActiveCard = ()=>{

        if(cardColor === "card-color" )
        {
          setCardColor("");
          setCount(count-1);
        }
        else{
            setCardColor("card-color");
            setCount(count+1);
        }
     }

return (

    <div className = {cardColor}>
        <img src = {url} alt = "Lorem card"/>
       <div className = "card-body">
        <p className = "card-title">{title}</p>
        <p>{brief}{brief}</p>  
        <button  onClick = {handleActiveCard} >Button</button>
        </div>
    </div>
    
);


}

LoremCard.defaultProps = {
    albumId: propTypes.string,
    id: propTypes.number,
    thumbnailUrl: propTypes.string,
}

LoremCard.prototype = {
    brief: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    url: propTypes.string.isRequired
}

export default LoremCard ;

