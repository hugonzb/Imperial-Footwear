import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';


function Shoe (props) {
    const shoe = data.shoes.find(shoe=> shoe.id ===props.match.params.id);
    return <div>
        <div>
            <Link to="/">Back</Link>
        </div>
        <div className="shoe-details">
            <div className="shoe-detailed-image">
                <img src={shoe.image} alt="shoe"></img>
            </div>
            <div className="shoe-detailed-info">
                <ul>
                    <li>
                        <h3>{shoe.name}</h3>
                    </li>
                    <li>
                        {shoe.rating}
                    </li>
                    <li>
                        <b>{shoe.price}</b>
                    </li>
                    <b>Description:</b>
                    <li>
                        {shoe.description}
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default Shoe;