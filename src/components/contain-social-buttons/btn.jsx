import React from 'react';

function SocialButton(props){

const {
    classBtn,
} = props

    return ( 
        <a href="#"><i className={`fa fa-${classBtn}`} aria-hidden="true"></i></a>
     );
}
 
export default  SocialButton;