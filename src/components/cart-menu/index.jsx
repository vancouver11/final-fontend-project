import React from 'react';
import ItemCart from './components/item-cart';
import { useSelector } from 'react-redux';
function CartMenu(props) {
    const itemImages = {
        cart: 'img/core-img/cart.png',
        favourite: 'img/core-img/favorites.png',
        search: 'img/core-img/search.png', 
    }
    const goodsList = useSelector(store => (store.cart.goodsList));
 
    let total = 0;
    if(goodsList.length != 0 ){
        goodsList.forEach( item => {
            total += item.amount;   
        });
    }
    
    return ( 
        <div className="cart-fav-search mb-100">
            <ItemCart title="Cart" isBasket = {true} image={itemImages.cart} total ={total}></ItemCart>
            <ItemCart title="Favourite" image ={itemImages.favourite}></ItemCart>
            <ItemCart title="Search" image ={itemImages.search}></ItemCart>

        </div>
     );
}
 
export default CartMenu;