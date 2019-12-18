import React from 'react';
import { useDispatch } from 'react-redux';

import { addgoodCart } from '../../../../store/action-creators';
function GoodInBasket(props) {
    const {
        title,
        price,
        img,
        amount,
        category,
        id,
        goodsList
    } = props;
    const dispatcher = useDispatch();
    


    
function changeAmountGood (mark) {
    
    function isGood(elem, index){
        
        return ((elem.currentGood.id == id && elem.currentGood.category == category) )
    }
    let indexElem = goodsList.findIndex(isGood);
   
    
    if(indexElem !=-1){

       if(mark =="plus") goodsList[indexElem].amount++;
       if(mark =="minus") goodsList[indexElem].amount--;



        if(goodsList[indexElem].amount === 0){
            goodsList.splice(indexElem,1);
        }


        
        dispatcher(addgoodCart(goodsList));
        let goodjs = JSON.stringify(goodsList);
        localStorage.setItem('goods',goodjs)
    }
}


if(amount > 0){

    return ( 
        <tr>
            <td className="cart_product_img">
                <a href="#"><img src={img} alt="Product"/></a>
            </td>
            <td className="cart_product_desc">
                <h5>{title}</h5>
            </td>
            <td className="price">
                <span>{price}</span>
            </td>
            <td className="qty">
                <div className="qty-btn d-flex">
                    <p>Qty</p>
                    <div class="quantity">
                        <span className="qty-minus" onClick = {() =>changeAmountGood("minus")}><i class="fa fa-minus" aria-hidden="true"></i></span>
                        <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value={amount}/>
                        <span className="qty-plus" onClick = {() =>changeAmountGood("plus")}><i class="fa fa-plus" aria-hidden="true"></i></span>
                    </div>
                </div>
            </td>
        </tr>
         );

}
    else{
        return null
    }
    
}
 
export default GoodInBasket ;