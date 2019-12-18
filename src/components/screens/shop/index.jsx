import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideBarArea from './components/side-bar-area';
import WrapperGoods from './components/wrapper-goods-for-categories';
import { getGoods,changeAciveCategory} from '../../../store/action-creators';
import {withRouter} from 'react-router';


function PageShop(props){
  const { code } = props.match.params;
  const url = props.match.url;


  


     
    /* const dispatcher = useDispatch();
    useEffect(() => {
		dispatcher(getCategories());
    }, []); */
     const filters = useSelector( store => (store.cart.filters )); 
    const categories = useSelector(store => (store.cart.categories.data)) || [];
    const curCat = categories.find((item) =>{
     return (item.url  == code )
    }) || {};
   

    

    const idCategory =   useSelector(store => (store.cart.activeCategory));

    const dispatcher = useDispatch();
    
    useEffect(() => {

        dispatcher(getGoods(idCategory));
    
    },[idCategory]);

  
    useEffect(() => {
      dispatcher(changeAciveCategory(curCat.id));
      });



    return ( 
        <>
        
        <SideBarArea/>
        <WrapperGoods code ={code} path ={url} />
        </>
     );
}
 
export default withRouter(PageShop);