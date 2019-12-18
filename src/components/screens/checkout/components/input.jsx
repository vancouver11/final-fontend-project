import React from 'react';

function Input (props) {
    const{
        type,
        className,
        wrapClass,
        id,
        value,
        placeholder,

    } = props;
    return ( 
        <div className={wrapClass}>
             <input type={type} className={className} id={id} value={value} placeholder={placeholder} />
        </div>
     );
}
 
export default Input;