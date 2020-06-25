import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listShoes } from '../actions/shoeActions';

function Home (props) {
    const [searchWord, setSearchWord] = useState('');
    const[sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id : '';
    const shoeList = useSelector(state => state.shoeList);
    const { shoes, loading, error } = shoeList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listShoes(category));

        return () => {
        };
    }, [category]);

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(listShoes(category, searchWord, sortOrder))
    }

    return <>
        {category &&
           <h2>{category}</h2>}

        <ul className="filter">
            <li>
                <form onSubmit={submitHandler}>
                    <input name="searchWord" onChange={(e) => {setSearchWord(e.target.value)}} />
                    <button type = "submit">Search</button>
                </form>
            </li>
            <li>
                <form onSubmit={submitHandler}>
                <select name="sortOrder" onChange={(e) => {setSortOrder(e.target.value)}}>
                    <option value=" ">All</option>
                    <option value="Low">Low</option>
                    <option value="Mid">Mid</option>
                    <option value="High">High</option>
                </select>
                <button type = "submit">Filter</button>
                </form>
            </li>
        </ul>
        {loading ? <div> Loading Shoes ...</div>:
        error ? <div>{error}</div>:
    <ul className="all-footwear">
    {
    shoes.map(shoe =>               
      <li key ={shoe._id}> 
         <Link to={'/shoe/' + shoe._id}>
          <div className="footwear">
                <Link to={'/shoe/' + shoe._id}>
                <img className="shoe-image" src={shoe.image} alt="shoe"></img>
                </Link>
                <div className="shoe-info">
                    <div className="shoe-name">{shoe.name}</div>
                    <div className="shoe-info-detailed">
                        <div className="shoe-brand">{shoe.colorway}</div>
                        <div className="shoe-year">{shoe.year}</div>
                        <div className="shoe-price">${shoe.price} NZD</div>
                        <div className="shoe-rating">{shoe.rating} Stars</div>
                    </div>
                </div>
          </div> 
          </Link>
      </li>)
    }   
    </ul>
    }
    </>
    
}
export default Home;