import React from 'react';

function NavigationMobile(props){
    return (

       /*  <!-- Mobile Nav (max width 767px)--> */
        <div className="mobile-nav">
            {/* <!-- Navbar Brand --> */}
            <div className="amado-navbar-brand">
                <a href="index.html"><img src="img/core-img/logo.png" alt=""/></a>
            </div>
            {/* <!-- Navbar Toggler --> */}
            <div className="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
        </div>
      );
}
 
export default NavigationMobile ;