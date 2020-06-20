import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function Home (props) {

    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/shoes");
            setShoes(data);
        }
        fetchData();
        return () => {
        };
    }, [])

    return <ul className="all-footwear">
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