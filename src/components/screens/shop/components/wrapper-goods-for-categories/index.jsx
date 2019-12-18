import React from 'react';
import { useSelector } from 'react-redux';
import TotalProductsTop from './components/total-products-top';
import Sorting from './components/sorting';
import SingleGood from './components/single-good';
import Pagination from './components/pagination';
import { getGoods } from '../../../../../store/action-creators';

function WrapperGoods(props) {

    let goods = useSelector(store => (store.cart.goods.data || []));
    let filterPrice = useSelector(store => (store.cart.customFilterPrice|| {}));


    function checkFilter(item,index){
     return +item.price >= +filterPrice.min &&  +item.price <= +filterPrice.max
    }

    if(!Object.keys(filterPrice).length == 0) goods =  goods.filter(checkFilter);


     function displayGood(item, index){
         return(
             <SingleGood
             code ={props.code}
             
             img={`http://test-api.ipromote.ru/img/${item.img_url}`}
             imgHover={`http://test-api.ipromote.ru/img/${item.img_url}`}
             price={item.price}
             title ={item.title}
             id ={item.id}
             key={index}
             category={item.category}
             path={props.path}
             item ={item}
             /> 
         )
     }

     let listGoods = goods.map(displayGood);

    

    return ( 
        <div className="amado_product_area section-padding-100">
            <div className="container-fluid">
                 <div className="row">
                    <div className="col-12">
                        <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                            <TotalProductsTop/>
                            <Sorting/>
                            
                        </div>
                    </div>
                </div>  
                <div class="row">
    {goods.length !== 0?listGoods:<div><b style={{textAlign: "center"}}>Нет товаров</b></div> }
                </div>
                <div class="row">
                    <Pagination/>
                </div>
                
                    
            </div>
        </div>
     );
}
 
export default WrapperGoods;