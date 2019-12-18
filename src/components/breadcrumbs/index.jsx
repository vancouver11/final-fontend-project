import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
function BreadCrumbs(props) {
const {
    urlCategory,
    idGood,
    titleCategory,
    titleGood
} = props;
console.log('111111',urlCategory)
   
    const url = urlCategory.replace(`/${idGood}`,"");
    return ( 
    <div className="row">
        <div class="col-12">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-50">
                    <li className="breadcrumb-item"><Link to="/shop">Мебель</Link></li>
                   {/* <li className="breadcrumb-item"><a href="#">Furniture</a></li>  */} 
                    <li className="breadcrumb-item"><Link to={url}>{titleCategory}</Link> </li>
                    <li className="breadcrumb-item active" aria-current="page">{titleGood}</li>
                </ol>
            </nav>
        </div>
    </div>

     );
}
 
export default BreadCrumbs;