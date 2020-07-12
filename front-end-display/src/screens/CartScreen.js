import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

function CartScreen(props){
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const shoeId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (shoeId) => {
        dispatch(removeFromCart(shoeId));
    }
    useEffect(() =>{
        if(shoeId){
            dispatch(addToCart(shoeId, qty));
        }
    }, []);
    const checkoutHandler= () => {
        props.history.push("/signin?redirect=checkout");
    }
    return <div className="cart">
        <div className="cart-list">
            <div className="home-brand-name">
                Shopping Cart
            </div>
            <ul className="cart-list-container">
                    {
                        cartItems.length === 0?
                        <div>
                            Your cart is currently empty.
                        </div>
                        :
                        cartItems.map( item =>
                            <li>
                                <div className="cart-item">
                                    <div className="cart-image">
                                        <img src={item.image} alt ="shoe"/>
                                    </div>
                                    <div className="cart-info">
                                        <div className="cart-name">
                                            <Link className= "cart-name" to={"/shoe/" + item.shoe }>
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div>
                                            {item.style}
                                        </div>
                                        <div className="cart-colorway">
                                            {item.colorway}
                                        </div>
                                        <div className="cart-price">
                                            ${item.price}
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-buttons">
                                    <button type="cart-delete-button" className="cart-delete-button" onClick={() => removeFromCartHandler(item.shoe)}> 
                                        Remove
                                    </button> 
                                </div>
                            </li>)
                    }
                                <div className="cart-action">
                <h3>
                    Subtotal ( Quantity: {cartItems.reduce((a,c) => a + c.qty, 0)} )
                    :
                    $ {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                </h3>
                <button onClick={checkoutHandler} className ="submit-button" disabled={cartItems.length===0}>
                    Proceed To Checkout
                </button>
            </div>
            </ul>

        </div>

    </div>
}                           

export default CartScreen;