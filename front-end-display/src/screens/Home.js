import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { listShoes } from '../actions/shoeActions';

function Home (props) {
    const shoeList = useSelector(state => state.shoeList);
    const { shoes, loading, error } = shoeList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listShoes());

        return () => {
        };
    }, [])

    return loading ? <div> Loading Shoes ...</div>:
        error ? <div>{error}</div>:
    <ul className="all-footwear">
    {
    shoes.map(shoe =>               
      <li key ={shoe.id}> 
          <div className="footwear">
                <Link to={'/shoe/' + shoe.id}>
                <img className="shoe-image" src={shoe.image} alt="shoe"></img>
                </Link>
                <div className="shoe-name">
                    <Link to={'/shoe/' + shoe._id}>{shoe.name}</Link>
                </div>
                <div className="shoe-brand">{shoe.brand}</div>
                <div className="shoe-year">{shoe.year}</div>
                <div className="shoe-price">${shoe.price}</div>
                <div className="shoe-rating">{shoe.rating} Stars</div>
          </div>
      </li>)
    }   
    </ul>

}
export default Home;