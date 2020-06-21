import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsShoe } from '../actions/shoeActions';

function Shoe (props) {
    const [qty, setQty] = useState(1);
    const shoeDetails = useSelector(state => state.shoeDetails);
    const { shoe, loading, error } = shoeDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsShoe(props.match.params.id));
        return () => {
            //
        };
    }, []);

    return <div>
        <div className="shoe-detailed-back">
            <Link to="/">Back</Link>
        </div>
        {loading? <div>Loading Shoe ...</div>:
            error ? <div>{error}</div>:
            (
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
                            Rating: {shoe.rating} Stars
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
                            Quantity: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
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
             )
            }    
        </div>    
}
export default Shoe;