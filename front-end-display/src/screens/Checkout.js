import React from 'react';
import { Link } from 'react-router-dom';

function Checkout () {

    return <div className="checkout">
        <div className="checkout-message">
            <div>Successfully placed your order.</div>
            <div>Thank you for shopping with us!</div>
            <div className="checkout-buttons">
                <div className ="signreg-submit-button">
                    <Link to="/" className ="reset-text-decoration"> Order History </Link>
                </div>
                <div>&nbsp;</div>
                <div className ="signreg-submit-button">
                    <Link to="/" className ="reset-text-decoration"> Home </Link>
                </div>
            </div>
        </div>
    </div>
}
export default Checkout;