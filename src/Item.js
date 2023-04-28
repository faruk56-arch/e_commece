import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Item({ inventory }) {
    const { itemId } = useParams();
    const navigate = useNavigate();

    const item = inventory.find((item) => item.id === itemId);

    if (!item) {
        navigate('/store/notfound');
        return null;
    }

    return (
        <div className='item'>
            <h3>ID: {item.id}</h3>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
        </div>
    );
}

export default Item;
