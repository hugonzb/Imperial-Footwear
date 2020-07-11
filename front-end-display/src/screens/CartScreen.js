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
            <div className="home-brand-name">
                Shopping Cart
            </div>
            <ul className="cart-list-container">
                <li>
                    {
                        cartItems.length === 0?
                        <div>
                            Cart is empty
                        </div>
                        :
                        cartItems.map( item =>
                            <div>
                                <div className="cart-image">
                                <img src={item.image} alt ="shoe"/>
                                </div>
                                <div className="cart-name">
                                    {item.name}
                                </div>
                                <div>
                                    {item.style}
                                </div>
                                <div className="cart-price">
                                    ${item.price}
                                </div>
                            </div>)
                    }
                </li>
            </ul>
        </div>
        <div className="cart-action">
            <h3>
                Subtotal ( Quantity: {cartItems.reduce((a,c) => a + c.qty, 0)} )
                :
                $ {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
            </h3>
            <button className ="submit-button" disabled={cartItems.length===0}>
                Proceed to Checkout
            </button>
            
        </div>
    </div>
}                           

export default CartScreen;