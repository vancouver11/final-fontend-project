import React from 'react';
import { Link } from 'react-router-dom';
import {CART} from '../../../../src/router/url';

function ItemCart(props) {
    const {
        image,
        isBasket,
        title, 
        total
    } = props;
    if(isBasket){
        return ( 
        
            <Link to={CART} className="fav-nav">
                <img src={image} alt=""/>{title}
                <span>({total})</span>
            </Link>
         ); 
    } else{
        return ( 
        
            <Link to="#" className="fav-nav">
                <img src={image} alt=""/>{title}
                
            </Link>
         );
    }
    
}
 
export default ItemCart;