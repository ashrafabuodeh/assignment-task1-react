import LoremCard from '../LoremCard/LoremCard';
import React, { useState, useEffect } from 'react';
import './GridCardItems.css'

function GridCardItems() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/photos";
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.slice(0, 100)))

    }, []);

    const handleActiveNumberOfCardItem = (numberOfClickOnCardItem) => {
        if (numberOfClickOnCardItem === 1)
            setCount(count - 1);
        else
            setCount(count + 1);
    }

    return (
        <>
            <h1 className="title"> Number of Active Lorem Ipsum cards : {count} </h1>
            <div className="grid-cards">
                {data.map((info) =>
                    <LoremCard
                        brief={info.title}
                        handleActiveNumberOfCardItem={handleActiveNumberOfCardItem}
                        id={info.id}
                        key={info.id}
                        title={info.title}
                        url={info.url}
                    />
                )}
            </div>
        </>
    );

}


export default GridCardItems;
