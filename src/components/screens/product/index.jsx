import React from 'react';
import BreadCrumbs from '../../breadcrumbs';
import Product from './components/product';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getImages, changeAciveGood,getGoods, changeAciveCategory} from '../../../store/action-creators';

function PageProduct(props) {
  const { code } = props.match.params;
  const { id } = props.match.params;
  const { url } = props.match;
 
  
  const idGood= useSelector(store => (store.cart.activeGood));
  const idCat= useSelector(store => (store.cart.activeCategory));
  const goods= useSelector(store => (store.cart.goods.data)) || [];

  const catigories= useSelector(store => (store.cart.categories.data)) || [];
  

  

  function searchCategory(elem,index, array){
    if (elem.url== code|| elem.url== idCat) return true
       
 
   };

   let currentCat = catigories.find(searchCategory) || {id:"1"};
   console.log("категория",currentCat);

  
  
  



 
 
  

 


  function searchGood(elem,index, array){
   if (elem.id == idGood || elem.id == id) return true
  };
 
 let currentGood = goods.find(searchGood);
  console.log('существ товар',currentGood); 
const dispatcher = useDispatch();




useEffect(()=>{
  dispatcher(changeAciveCategory(currentCat.id));
},[currentCat.id])


useEffect(()=>{
  dispatcher (changeAciveGood(id));
},[id])

useEffect(()=>{
  dispatcher(getGoods(idCat))
},[idCat])

useEffect(()=>{
  dispatcher(getImages(idGood));
},[idGood])

const goodImages= useSelector(store => (store.cart.images.data[0]));


const title = (currentGood != undefined)? currentGood["1"]: "";



const mainPhoto = (currentGood != undefined) ? `http://test-api.ipromote.ru/img/${currentGood.img_url}`: "";

const price = (currentGood != undefined)? currentGood.price: "";

    return ( 

      /*   <!-- Product Details Area Start --> */
        <div class="single-product-area section-padding-100 clearfix">
            <div class="container-fluid">
                    <BreadCrumbs
                      urlCategory={url}
                      idGood={idGood}
                      titleCategory ={currentCat.title}
                      titleGood = {title}
                    />
                    <Product 
                     title = {title}
                     mainImg = {mainPhoto}
                     price={price}
                     currentGood = {currentGood}
                     currentCat = {currentCat}
  
                     />
                 
            </div>
        </div>
     );
    }
 
export default PageProduct ;
    