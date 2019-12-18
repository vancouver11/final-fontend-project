import React from 'react';
import Carusel from '../../../carusel';
import DetailsProduct from './details-product';

function Product(props) {
 const{
   title,
   price,
   mainImg,
   currentGood,
   currentCat
 } = props;
    return (
        <div class="row">
                   <Carusel mainImg ={mainImg}/>
                    <DetailsProduct
                    title ={title}
                    mainImg ={mainImg}
                    price ={price}
                    currentGood={currentGood}
                    currentCat = {currentCat}
                    />
        </div>

      );
}
 
export default Product;