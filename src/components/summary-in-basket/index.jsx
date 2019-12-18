import React from 'react';
import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addgoodCart} from '../../store/action-creators';
import { Link } from 'react-router-dom';
import { CHECKOUT } from '../../router/url';


function SummaryInBasket(props){
    const{
        where,
    } = props;



    let goodList = useSelector(store => (store.cart.goodsList) || []);
   

    let summ = 0;
    goodList.forEach( item => {
		summ += item.currentGood.price * item.amount;
		
	});

    
  let itog = goodList.length !=0 ? summ :0
   
  



 
 

    
    
    

    

    
    
        
    
    

    let addcontent =(
        <div className="payment-method">
        {/* <!-- Cash on delivery --> */}
        <div className="custom-control custom-checkbox mr-sm-2">
            <input type="checkbox" className="custom-control-input" id="cod" checked/>
            <label className="custom-control-label" for="cod">Cash on Delivery</label>
        </div>
        {/* <!-- Paypal --> */}
        <div className="custom-control custom-checkbox mr-sm-2">
            <input type="checkbox" className="custom-control-input" id="paypal"/>
            <label className="custom-control-label" for="paypal">Paypal <img class="ml-15" src="img/core-img/paypal.png" alt=""/></label>
        </div>
    </div>
    )
   

   
    return(
        <div className="col-12 col-lg-4">
        <div className="cart-summary">
                <h5>Cart Total</h5>
                <ul className="summary-table">
<li><span>subtotal:</span> <span>{itog}</span></li>
                    <li><span>delivery:</span> <span>Free</span></li>
                    <li><span>total:</span> <span></span></li>
                </ul>
                {
                    (where==="pageChekout")? addcontent: ""
                
                }
                <div className="cart-btn mt-100">
                    <Link to={CHECKOUT} class="btn amado-btn w-100">Checkout</Link>
                </div>
        </div>
     </div>
    )
}
 
export default SummaryInBasket ;