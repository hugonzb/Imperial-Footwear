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
        dispatch(listShoes());

        return () => {
        };
    // eslint-disable-next-line 
    }, []);

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(listShoes(category, searchWord, sortOrder))
    }

    const sortHandler = (e) =>{
        setSortOrder(e.target.value);
        dispatch(listShoes(category, searchWord, sortOrder))
    }
    return <div className = "content">
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
                <select name="sortOrder" onChange={sortHandler}>
                    <option value="">Newest</option>
                    <option value="">Lowest Price</option>
                    <option value="">Highest Price</option>
                </select>
            </li>
        </ul>
        {loading ? <div> Loading Shoes ...</div>:
        error ? <div>{error}</div>:
    <ul className="all-footwear">
    {
    shoes.map(shoe =>               
      <li key ={shoe.id}> 
         <Link to={'/shoe/' + shoe.id}>
          <div className="footwear">
                <Link to={'/shoe/' + shoe.id}>
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
    </div>
    
}
export default Home;