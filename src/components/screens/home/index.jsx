import React from 'react';
import SingleCategory from './components/single-category';
import { useSelector} from 'react-redux';
import {SHOP} from '../../../router/url';


function WrapOfCategories(props){
 
    /* const imagesCategory =[
        'img/bg-img/1.jpg',
        'img/bg-img/2.jpg',
        'img/bg-img/3.jpg',
        'img/bg-img/2.jpg',
        'img/bg-img/3.jpg',
        
    ]; */
    const categories = useSelector(store => (store.cart.categories.data)) || [];

       
        let listCategories = categories.map((item, index) => {
            return <SingleCategory  id={item.id} key={index} title={item.title} url={`${SHOP}/${item.url}`} />
       });
     

    return (  
      
        
        <div className="products-catagories-area clearfix">
            
                <div className="amado-pro-catagory clearfix">
                        {listCategories}
                </div>
                
        </div> 

  
    );
}
 
export default WrapOfCategories;