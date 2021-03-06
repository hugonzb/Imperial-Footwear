import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { favListShoes } from '../actions/shoeActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from '../components/Rating';

function Favorites(props) {
    const [searchWord, setSearchWord] = useState('');
    const[sortOrder, setSortOrder] = useState('');
    const favorites = props.match.params.id ? props.match.params.id : '';
    const shoeList = useSelector(state => state.shoeList);
    const { shoes, loading, error } = shoeList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(favListShoes(favorites));
        return () => {
        };
        // eslint-disable-next-line
    }, [favorites]);

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(favListShoes(favorites, searchWord, sortOrder))
    }

    return <>
        {favorites &&
           <div className="home-brand-name"><FontAwesomeIcon icon={faHeart} color="red"/>&nbsp; Hugo's Favorites</div>}

        <ul className="filter">
            <li>
                <form onSubmit={submitHandler}>
                    <input name="searchWord" placeholder="Search" onChange={(e) => {setSearchWord(e.target.value)}} />
                    <button className = "cursor-pointer" type = "submit"><FontAwesomeIcon icon={faSearch}/></button>
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
                <button className = "cursor-pointer" type = "submit"><FontAwesomeIcon icon={faFilter}/></button>
                </form>
            </li>
        </ul>
        {loading ?  <div className="shoe-loading">
                        <FontAwesomeIcon icon={faSpinner} pulse /> Loading Footwear... 
                    </div>:
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
                        <div className="shoe-rating">
                            <Rating 
                            value={shoe.rating}
                            text={shoe.numRatings === 1 ? shoe.numRatings + " Review" : shoe.numRatings + " Reviews"}/> 
                            {shoe.rating=== 0 ? <Rating 
                                value={-1}
                                text={shoe.numRatings + " Reviews"}/>
                                : null}
                        </div>
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

export default Favorites;