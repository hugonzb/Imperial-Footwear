import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';


function Shoe (props) {
    const shoe = data.shoes.find(shoe=> shoe.id ===props.match.params.id);
    return <div>
        <div className="shoe-detailed-back">
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
                        Rating: {shoe.rating}
                    </li>
                    <li>
                        Price: $<b>{shoe.price}</b>
                    </li>
                    <b>Description:</b>
                    <li>
                        {shoe.description}
                    </li>
                </ul>
            </div>
            <div className="shoe-detailed-actions">
                <ul>
                    <li>
                        Price: ${shoe.price}
                    </li>
                    <li>
                        Stock: {shoe.stock}
                    </li>
                    <li>
                        Quantity: <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button className="shoe-purchase-button">Purchase</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default Shoe;