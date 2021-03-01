import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/Actions/CartActions';

const Cart = (props) => { 
    const {cart, removeFromCart} = props
    return (
        <div>
            <h3>This is cart</h3>

            <ul>
                {
                    cart.map((e,i)=> <li key={i}>{e.name} <button onClick={()=>removeFromCart(e.cartID)}>x</button> </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps= state=>{
    return{
        cart: state.cart
    }
}

const mapDispatchToProps={
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);