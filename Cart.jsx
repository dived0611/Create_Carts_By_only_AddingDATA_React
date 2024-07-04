import React from 'react';

function Cart(props) {
    return (
        <div className="cart">
            <img src={props.image} alt={props.title} className="img" />
            <div className="cart--stats">
                <p className="type">{props.type}</p>
                <p className="title">{props.title}</p>
                
                <p className="price">{props.price} $</p>
            </div>
        </div>
    );
}

export default Cart;
