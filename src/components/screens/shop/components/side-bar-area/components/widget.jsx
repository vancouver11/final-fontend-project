import React, { useEffect} from 'react';
import CheckInput from './check-item-for-widget';
import {useDispatch, useSelector} from 'react-redux';
import { getGoodsByColor,getGoodsByBrand, clearFilter,getPriceRange,customPriceRange} from '../../../../../../store/action-creators';
import { Link } from 'react-router-dom';

function Widget(props) {
const {
    infoColors, 
    category,
    infoBrands,

} = props;

const dispatcher = useDispatch();
let rangeFilter = useSelector(store => (store.cart.priceFilter.data || []));
useEffect(()=>{
dispatcher(getPriceRange());
},[]);
let minRange  = rangeFilter.length != 0 ? rangeFilter[0].priceMin: 0;
let maxRange  = rangeFilter.length != 0 ? rangeFilter[0].priceMax: 0;

function selectByColor(category, idColor){
  dispatcher(getGoodsByColor(category, idColor));
}

function selectByBrands(category, idBrands){
    dispatcher(getGoodsByBrand(category, idBrands));
  }

  function OutputValueRange(e){
      let range= document.getElementById("myRange");
      let output= document.getElementById("outputRange");
      output.innerText = "$" +range.value;
      dispatcher(customPriceRange({min:minRange,max:e.target.value}))
  }


 let items;
switch (props.type) {
    case 'checkInput':

            if (infoBrands != undefined){
                items = infoBrands.map((item,index) =>{
                    return <CheckInput title = {item.title} id={item.id} key={index} category={category}/>
                })
            }

            break;
    case 'colors':
        if(infoColors != undefined){
        items = infoColors.map((item, index) => {
           
            return <li ><a href="#"
                        key={index}  
                        style={{backgroundColor:`#${item.color}`}}
                        title={item.title}
                        idColor = {item.id}
                        onClick ={
                            (e) =>{
                                let checks = document.querySelectorAll(".form-check-input")
                                checks.forEach(element => {
                                 element.checked = false;
                                });
                                
                                selectByColor(category, item.id);
                                e.preventDefault();
                                dispatcher(clearFilter());
                                let classColor = document.querySelector(`.${props.className}`);
                                let a = classColor.getElementsByTagName("a");
                                for(let i = 0; i < a.length; i++){
                                    a[i].style.border="0px solid ";
                                }   
                                e.target.style.border="3px solid #5A009D"
                                
                                 }
                                 
                                }       
                            >
                   </a></li>
        })
    }
    
            items = (
            <ul className="d-flex">
                {items}
            </ul>
        );
        break;

    case 'price':
           items =  (<div className="slider-range">
            
               {/*  <div className="ui-slider-range ui-widget-header ui-corner-all"  ></div> */}
                {/* <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span> */}
                <input type="range"   min={minRange} max={maxRange} className="" id="myRange" onChange={(e)=>{OutputValueRange(e); }}  />
                
            
            <div className="range-price">${minRange} - <span id="outputRange">${maxRange}</span></div>
        </div>)
         break;

}


 
    return ( 
        <div className={`widget ${props.className} mb-50`}>
               {/*  <!-- Widget Title --> */}
            <h6 className="widget-title mb-30">{props.title}</h6>
            <div className="widget-desc">
                {items}
            </div>
           
        </div>
     );
}
 
export default Widget ;