import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import './LoremCard.css';

function LoremCard({ brief, handleActiveNumberOfCardItem, id, title, url }) {

    const [cardColor, setCardColor] = useState('');
    const [count, setCount] = useState(0);

    const handleActiveCard = () => {
        if (cardColor === "card-color") {
            setCardColor("");
            setCount(count - 1);
        }
        else {
            setCardColor("card-color");
            setCount(count + 1);
        }
    }

    return (

        <div className={cardColor}>
            <Link to={"carditem/" + id} key={id}  >
                <img src={url} alt="Lorem card" />
            </Link>
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p>{brief}{brief}</p>
                <button onClick={() => { handleActiveCard(); handleActiveNumberOfCardItem(count) }} >Button</button>
            </div>
        </div>
    );
}

LoremCard.prototype = {
    brief: propTypes.string.isRequired,
    handleActiveNumberOfCardItem: propTypes.func.isRequired,
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
}

export default LoremCard;

