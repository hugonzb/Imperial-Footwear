import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function CartScreen(props){
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const shoeId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    useEffect(() =>{
        if(shoeId){
            dispatch(addToCart(shoeId, qty));
        }
    }, []);

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
                <li>
                    {
                        cartItems.length === 0?
                        <div>
                            Cart is empty
                        </div>
                        :
                        cartItems.map( item =>
                            <div>
                               <img src={item.image} alt ="shoe"/>
                               <div>
                                   {item.name}
                               </div>
                               <div>
                                   {item.price}
                               </div>
                            </div>)
                    }
                </li>
            </ul>
        </div>
        <div className="cart-action">
            
        </div>
    </div>
}

export default CartScreen;