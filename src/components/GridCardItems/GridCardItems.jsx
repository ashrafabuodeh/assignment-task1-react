import LoremCard from '../LoremCard/LoremCard';
import React, { useState, useEffect } from 'react';
import './GridCardItems.css'

function GridCardItems() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/photos";
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.slice(0, 100)))

    }, []);

    return (
        <div className = "grid-cards">
            {data.map((info) =>
                <LoremCard
                    albumId = { info.albumId }
                    brief = { info.title }
                    id = { info.id }
                    key = { info.id }
                    thumbnailUrl = { info.thumbnailUrl }
                    title = { info.title } 
                    url = { info.url }
                />
            )}
        </div>
    );

}


export default GridCardItems;
