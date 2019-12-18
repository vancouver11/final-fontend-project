import React from 'react';
import ItemNav from './components/item-nav';
import * as URL from '../../../src/router/url';


function Nav(props) {
    const {type} = props;

    
    const { NAVIGATION } = URL;

    const listItems = NAVIGATION.map((item,index) => {
      
       return <ItemNav nameItem = {item.title} 
       classNameA = {type==='gorizontal'? "nav-link":""}
       classNameLi = {type ==='gorizontal'? "nav-item":""} 
       url = {item.url}
       key={index}
       />
    })

    
    switch (type) {
        case "vertical":
            return ( 
                /*  <!-- Amado Nav --> */
                     <nav className="amado-nav"> 
                     <ul>
                          {listItems}
                     </ul>
                     </nav>
              );
            break;
    
        case "gorizontal":
                return (
                    <div className="footer_menu">
                    <nav className="navbar navbar-expand-lg justify-content-end">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                        <div className="collapse navbar-collapse" id="footerNavContent">
                            <ul className="navbar-nav ml-auto">
                                {listItems}
                            </ul>
                        </div>
                    </nav>
                </div>
                )
            break;
        default: 
    }

    
    
}
 
export default Nav;