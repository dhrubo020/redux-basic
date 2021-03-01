import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Actions/CartActions';
import Product from '../Product/Product';

const Shop = (props) => { 
    const {products, addToCart} = props
    return (
        <div>
            <h3>This is Shop</h3>
           { products.map((e,i)=> <Product key={i} product={e} addToCart={addToCart} /> )}
        </div>
    );
};

const mapStateToProps = state =>{
    return { 
        products: state.products
    }
}

const mapDispatchToProps ={
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps)
// connectToStore(Shop)
connect(mapStateToProps, mapDispatchToProps)(Shop)

export default connect(mapStateToProps, mapDispatchToProps)(Shop);