import React from 'react';
import Icon from '../../../../../../images/img/core-img/cart.png'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { changeAciveGood, addgoodCart } from '../../../../../../store/action-creators';
import {CART} from '../../../../../../router/url'
function SingleGood(props){
    const{
        code,
        img,
        imgHover,
        price,
        title,
        id,
        path,
        category,
        item,
    } = props;
  
 
    const dispatcher = useDispatch();
/*  const url = (code === undefined)? `shop/tables/${id}`:`${code}/${id}`; */
let url;

if(code === undefined){
    url = `/shop/tables/${id}`;
}else{
    if(path.slice(-1)!="/"){
        url =`${path}/${id}`;
    }
    else{
        url = `${path}${id}`;
    }

}
  

    function update(id){
        dispatcher(changeAciveGood(id));
    }


    

    

    const goodsList = JSON.parse(localStorage.getItem('goods'));
    

    function addOneGood () {
    
        function isGood(elem, index){
            
            return ((elem.currentGood.id == id && elem.currentGood.category == category) )
        }
        let indexElem = goodsList.findIndex(isGood);
       
        
        if(indexElem !=-1){

            goodsList[indexElem].amount++;
            dispatcher(addgoodCart(goodsList));
            let goodjs = JSON.stringify(goodsList);
            localStorage.setItem('goods',goodjs)
        }else{

            let good = JSON.parse(localStorage.getItem('goods'));
            let currentGood = {currentGood:item, amount:1}
            good.push(currentGood);
            dispatcher(addgoodCart(good));
            let goodjs = JSON.stringify(good);
            localStorage.setItem('goods',goodjs) 
        }
    }


    
    return ( 

        /* <!-- Single Product Area --> */
        <div className="col-12 col-sm-6 col-md-12 col-xl-6">
            <div className="single-product-wrapper">
               {/*  <!-- Product Image --> */}
                <div className="product-img">
                    <img src={img} alt=""/>
                   {/*  <!-- Hover Thumb --> */}
                    <img className="hover-img" src={imgHover} alt=""/>
                </div>

                {/* <!-- Product Description --> */}
                <div className="product-description d-flex align-items-center justify-content-between">
                {/*     <!-- Product Meta Data --> */}
                    <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">${price}</p>
                        <Link to={url}   onClick={()=> update(id)}>
                            <h6>{title}</h6>
                        </Link>
                    </div>
                    {/* <!-- Ratings & Cart --> */}
                    <div className="ratings-cart text-right">
                        <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className="cart">
                            <Link to={CART} data-toggle="tooltip" data-placement="left" title="Add to Cart" onClick={(e)=>{addOneGood(); /* e.preventDefault() */}}>
                                <img src={Icon} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default  withRouter(SingleGood);