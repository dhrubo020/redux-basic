import React from 'react';

const Product = (props) => { 
    const {addToCart, product} = props
    return (
        <div>
            <h4>{product.id} {product.name}</h4>
            <button onClick={()=>addToCart(product.id, product.name)} >Add to Cart</button>
        </div>
    );
};

export default Product;