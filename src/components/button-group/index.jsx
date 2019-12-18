import React from 'react';
import Button from './components/button';

function ButtonGroup(props){

    return ( 
        <div className="amado-btn-group mt-30 mb-100">
            <Button name="%Discount%" />
            <Button name="Favourite"/>
        </div>
     );
}
 
export default ButtonGroup ;