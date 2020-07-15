import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, removeCart } from '../actions/cartActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartScreen(props){
    const cart = useSelector(state => state.cart);
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;
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
        window.scrollTo(0, 0);
    // eslint-disable-next-line
    }, []);

    const checkoutHandler= () => {
        if(userInfo){
            props.history.push("/checkout");
            dispatch(removeCart());
        }else{
            props.history.push("/signin?redirect=checkout");
        }
    }

    
    return <div className="cart">
        <div className="cart-list">
            <div className="home-brand-name">
                <FontAwesomeIcon icon={faShoppingCart}/> Shopping Cart
            </div>
            { cartItems.length !== 0?
            <div className="shoe-detailed-back">
                <Link to="/"> 
                    <div><img src="../images/arrow.png" alt="arrow"></img></div>
                </Link>
                <Link to="/"> 
                    <div className="continue-shopping">&nbsp; Continue Shopping</div>
                </Link>
            </div> 
            :
            null }
            <ul className="cart-list-container">
                    {
                        cartItems.length === 0?
                        <div className="cart-empty-message">
                            Your cart is currently empty. 
                            <br></br>
                            Start shopping <Link to="/"> here </Link>
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
                                    <div>
                                    <button type="cart-delete-button" className="cart-delete-button" onClick={() => removeFromCartHandler(item.shoe)}> 
                                        Remove
                                    </button> 
                                    </div>
                                    <div className="cart-quantity">
                                    Quantity &nbsp;
                                        <div className="select">
                                            <select value ={item.qty} onChange={(e) => dispatch(addToCart(item.shoe, parseInt(e.target.value)))}>
                                            {[...Array(item.stock).keys()].map((x) =>
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </li>)
                    }
                                <div className="cart-action">
                <div className="cart-summary-header">
                    Cart Summary
                </div>
                <div className="cart-summary">
                    Total Quantity: {cartItems.reduce((a,c) => a + c.qty, 0)} items
                    <br></br>
                    Total Price: ${cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                </div>
                <button onClick={checkoutHandler} className ="submit-button" disabled={cartItems.length===0}>
                    Proceed To Checkout
                </button>
            </div>
            </ul>

        </div>

    </div>
}                           

export default CartScreen;