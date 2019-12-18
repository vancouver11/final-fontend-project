import React from 'react';

function CopyWrite(props){
    return (  
       /*  <!-- Copywrite Text --> */
    <p className="copywrite">
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script> 
        All rights reserved | This template is made with 
        <i className="fa fa-heart-o" aria-hidden="true"></i> by 
        <a href="https://colorlib.com" target="_blank">Colorlib</a>
    </p>
    );
}
 
export default CopyWrite ;