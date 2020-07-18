import React from 'react';
import { Link } from 'react-router-dom';

function Checkout () {

    return <div className="checkout">
        <div className="checkout-message">
            <div>Successfully placed your order.</div>
            <div>Thank you for shopping with us!</div>
            <div className="checkout-buttons">
                <Link to="/" className ="reset-text-decoration">
                    <div className ="signreg-submit-button">
                        Order History 
                    </div>
                </Link>
                <div>&nbsp;</div>
                <Link to="/" className ="reset-text-decoration">
                    <div className ="signreg-submit-button">
                        Home 
                    </div>
                </Link>
            </div>
        </div>
    </div>
}
export default Checkout;