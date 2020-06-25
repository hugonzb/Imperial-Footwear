import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShoe } from '../actions/shoeActions';

function ShoeCreate (props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [colorway, setColorway] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [style, setStyle] = useState('');
    const shoeSave = useSelector(state=>state.shoeSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = shoeSave;
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //
        };
    // eslint-disable-next-line 
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShoe({name, price, image, colorway, year, rating, stock, style}));
    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <h2>Create shoe</h2>
                <li>
                    {loadingSave && <div>Loading...</div>}
                    {errorSave && <div>Invalid</div>}
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type ="text" name="name" id="name" onChange ={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="price">Price</label>
                    <input type ="text" name="price" id="price" onChange ={(e) => setPrice(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="image">Image</label>
                    <input type ="text" name="image" id="image" onChange ={(e) => setImage(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="name">Colorway</label>
                    <input type ="text" name="colorway" id="Colorway" onChange ={(e) => setColorway(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="year">Year</label>
                    <input type ="text" name="year" id="year" onChange ={(e) => setYear(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="rating">Rating</label>
                    <input type ="text" name="rating" id="rating" onChange ={(e) => setRating(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="stock">Stock</label>
                    <input type ="text" name="stock" id="stock" onChange ={(e) => setStock(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="name">Style</label>
                    <input type ="text" name="style" id="style" onChange ={(e) => setStyle(e.target.value)}></input>
                </li>
                <li>
                    <button type = "submit" className="button primary">Create</button>
                </li>
                <li>
                    New to Imperial Footwear?
                </li>
                <li>
                    <Link to="/register" className="button full-width">Create account here</Link>
                </li>
            </ul>
        </form>
    </div>
}
export default ShoeCreate;