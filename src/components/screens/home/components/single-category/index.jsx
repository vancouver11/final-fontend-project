import React from 'react';
import { getGoodsForHome } from '../../../../../store/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function SingleCategory(props) {

    const {
       id,
       title,
       url
    } = props;
    const [goods, setGoods] = useState("");
    
   console.log(id);
    const dispatcher = useDispatch();
   
  
   useEffect(() => {
    let response = fetch(`http://test-api.ipromote.ru/API/CATALOG/FIND?category=${id}`);
    response.then (response => response.json()).then(data =>{setGoods(data)})
    
   },[])
   

   
  
 

   function compare(a, b) {
    if (+a.price > +b.price) return 1; 
    if (+a.price == +b.price) return 0; 
    if (+a.price < +b.price) return -1; 
  }
 
  if(goods) goods.data.sort(compare);


  

   





    return ( 
        /* <!-- Single Catagory --> */
        <div className="single-products-catagory clearfix"
         style={{float:"left",border:"1px solid lightgrey",borderCollapse:"collapse",margin:"0px"}}>
                    <Link to={url}>
                        <img src={goods?`http://test-api.ipromote.ru/img/${goods.data[0].img_url}`:""} alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From {goods?goods.data[0].price: ""}$</p>
                            <h4>{title}</h4>
                        </div>
                    </Link>
        </div>
     );
}
 
export default SingleCategory ;