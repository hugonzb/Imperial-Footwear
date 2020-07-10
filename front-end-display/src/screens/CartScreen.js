import React from 'react';

function CartScreen(props){
    const shoeId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")): null;
    return <div>
        Cart
    </div>
}

export default CartScreen;