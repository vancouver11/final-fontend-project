import React from 'react';
import {Link } from 'react-router-dom';
function ItemNav(props) {
  const{
nameItem,
classNameLi,
classNameA,
url
  } = props;
    return (
        <li /* class="active" */ className ={classNameLi}><Link to={url} className ={classNameA}>{nameItem}</Link></li>
      );
}
 
export default ItemNav;