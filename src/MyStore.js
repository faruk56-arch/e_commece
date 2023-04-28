import React from 'react';
import { Link } from 'react-router-dom';

function MyStore({ inventory }) {
    return (
        <div>
            <h1>Welcome to MyStore!</h1>
            <ul>
                {inventory.map((item) => (
                    <li key={item.id}>
                        <Link to={`/store/${item.id}`}>
                        {item.name}
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyStore;
