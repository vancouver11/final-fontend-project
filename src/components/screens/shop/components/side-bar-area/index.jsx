import React from 'react';
import ListOfCategories from './components/list-categories'
import Widget from './components/widget';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getColors,getBrands,getGoods, customPriceRange } from '../../../../../store/action-creators';


function SideBarArea(props) {
    const dispatcher = useDispatch();
    useState(()=>{
        dispatcher(getColors());
        dispatcher(getBrands())
    },[]);
    const colors =   useSelector(store => (store.cart.colors));
    const brands =   useSelector(store => (store.cart.brands));
    const category =   useSelector(store => (store.cart.activeCategory));
    const priceRange =   useSelector(store => (store.cart.priceFilter.data) || [{priceMin:0,priceMax:0}]);
    let priceMax = priceRange[0].priceMax;
    let priceMin = priceRange[0].priceMin;

    function selectAllGoods(category){
        dispatcher(getGoods(category));
      }

    
    return (  
        <div class="shop_sidebar_area">
            <ListOfCategories/>
            <Widget type="checkInput" className="brands" title="Brands" category={category} infoBrands = {brands.data}/>
            <Widget type="colors"
             className="color"
             title="Color"
             infoColors = {colors.data}
             category={category}
             />
            <Widget type="price" className="price" title="Price"/>
             {/*  <!-- Сброс фильтра --> */}
             <button onClick ={(e) =>{
                selectAllGoods(category);
                dispatcher(customPriceRange({}));
                
                let classColor = document.querySelector(`.color`);
                 let a = classColor.getElementsByTagName("a");
                for(let i = 0; i < a.length; i++){
                     a[i].style.border="0px solid ";

                     let checks = document.querySelectorAll(".form-check-input")
                     checks.forEach(element => {
                         if(element != e.target) element.checked =false;
                     });

                     document.getElementById("myRange").value = priceMin;
                     document.getElementById("outputRange").innerText=priceMax; 
                    }   
                }}>сбросить фильтр</button>

        </div>
    );
}
 
export default SideBarArea;