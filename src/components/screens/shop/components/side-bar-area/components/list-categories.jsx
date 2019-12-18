import React from 'react';
import { useSelector } from 'react-redux';
import Category from './category';

function ListOfCategories(props) {

    
    
    const listOfCategories =   useSelector(store => (store.cart.categories.data || []));
        
   const categories = listOfCategories.map((item, index) =>{
        return <Category titleOfCategory ={item.title} url={item.url} key={index} id={item.id} />
    });

    return ( 

        <div className="widget catagory mb-50">
        {/* <!-- Widget Title --> */}
        <h6 className="widget-title mb-30">Catagories</h6>

        {/* <!--  Catagories  --> */}
        <div className="catagories-menu">
            <ul>
               {categories}
            </ul>
        </div>
    </div>
     );
}
 
export default ListOfCategories ;