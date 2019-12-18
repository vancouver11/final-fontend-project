import React from 'react';
import SummaryInBasket from '../../summary-in-basket';
import GoodInBasket from './components/good-in-basket';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {addgoodCart} from '../../../store/action-creators'


function Basket(props) {

    const goodList =   useSelector(store => (store.cart.goodsList));
   /*  const categoreis = useSelector(store => (store.cart.categories)); */

 const goodsList = JSON.parse(localStorage.getItem('goods')); 

  






    function parseGoodsList(elem,index) {
        
        return <GoodInBasket 
            title ={elem.currentGood.title}
            price ={elem.currentGood.price}
            img ={`http://test-api.ipromote.ru/img/${elem.currentGood.img_url}`}
            amount ={elem.amount}
            category ={elem.currentGood.category}
           id={elem.currentGood.id}
           goodsList ={goodsList }
           
        
        />
    }
    
  const goodsInCart =  goodsList.map(parseGoodsList);

    return ( 
<div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="cart-title mt-50">
                            <h2>Shopping Cart</h2>
                        </div>

                        <div className="cart-table clearfix">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                   { goodsInCart  }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <SummaryInBasket />
                </div>
            </div>
        </div>

     );
}
 
export default Basket ;