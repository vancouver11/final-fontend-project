import React from 'react';
import {Link } from 'react-router-dom';
function Logo(props){
const {
    type,
} = props;

    if(type ==="forHeader"){
        return (  
            <>
              {  /* <!-- Close Icon --> */ }
                <div className="nav-close">
                        <i className="fa fa-close" aria-hidden="true"></i>
                </div>
               { /*  <!-- Logo --> */ }
                <div className="logo">
                        <Link to="/"><img src="img/core-img/logo.png" alt=""/></Link>
                </div>
            </>
        );
    }
    if(type==="forFooter"){
        return(
            /* <!-- Logo --> */
            <div className="footer-logo mr-50">
                 <Link to ="/"><img src="img/core-img/logo2.png" alt=""/></Link>
            </div>
        );
    }
    
}
 
export default Logo;