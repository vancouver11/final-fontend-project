import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { changeAciveCategory,clearFilter, getGoods, customPriceRange } from '../../../../../../store/action-creators';

function Category(props) {
    const{
        titleOfCategory,
        url,
        id
    } = props;
    
   
   
   let urlCat = '/shop/' + url ;
   const priceRange =   useSelector(store => (store.cart.priceFilter.data) || [{priceMin:0,priceMax:0}]);
   let priceMax = priceRange[0].priceMax;
   let priceMin = priceRange[0].priceMin;
   const dispatcher = useDispatch();

    return ( 
        <li  class="cat"><Link to ={urlCat} href="#" onClick={(e)=>{dispatcher(changeAciveCategory(id));
            dispatcher(clearFilter());
            dispatcher(getGoods(id));
            dispatcher(customPriceRange({}));

            let checks = document.querySelectorAll(".form-check-input")
            checks.forEach(element => {
            element.checked =false;
            });
            let classColor = document.querySelector(`.color`);
            let a = classColor.getElementsByTagName("a");
            for(let i = 0; i < a.length; i++){
                a[i].style.border="0px solid ";
            };
            
            document.getElementById("myRange").value = priceMin;
            document.getElementById("outputRange").innerText=priceMax; 
        }}>
            {titleOfCategory}
            </Link>
        </li>
     );
}
 
export default withRouter(Category) ;