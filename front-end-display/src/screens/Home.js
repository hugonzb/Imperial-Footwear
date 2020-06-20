import React from 'react';
import {Link} from 'react-router-dom'
import data from '../data';

function Home (props) {
    return <ul className="all-footwear">
    {
    data.shoes.map(shoe =>               
      <li> 
          <div className="footwear">
                <Link to={'/shoe/' + shoe._id}>
                <img className="shoe-image" src={shoe.image} alt="shoe"></img>
                </Link>
                <div className="shoe-name">
                    <Link to={'/shoe/' + shoe._id}>{shoe.name}</Link>
                </div>
                <div className="shoe-brand">{shoe.brand}</div>
                <div className="shoe-year">{shoe.year}</div>
                <div className="shoe-price">{shoe.price}</div>
                <div className="shoe-rating">{shoe.rating}</div>
          </div>
      </li>)
    }   
    </ul>

}
export default Home;