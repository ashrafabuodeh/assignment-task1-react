import { cardInfo } from '../../../data';
import { CardItem } from '../../../components';
import { useParams } from 'react-router-dom';
import React from 'react';
import './AboutUs.css'

function AboutUs() {

    const { id } = useParams();

    const cardItemById = () => {
        return cardInfo[parseInt(id)];
    }

    return (
        <div className="centerCardItem">
            <CardItem
                alt={cardItemById().img}
                brief={cardItemById().brief}
                id={id}
                key={cardItemById().id}
                src={cardItemById().src}
                title={cardItemById().title}
            />
        </div>
    );
}


export default AboutUs;
