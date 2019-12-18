import React from 'react';
import {useDispatch} from 'react-redux';
import {getGoodsByBrand, getGoods} from '../../../../../../store/action-creators'
import category from './category';

function CheckINput(props) {



/* function checkFilters(){
   if (filters.length != 0){
        let indexElem = filters.findIndex((elem)=>{return elem == props.id});
        if(indexElem ==-1){
         dispatcher(addFilter({id:props.id, name: props.title}))
         filters.splice(indexElem,1);
         dispatcher(addFilter(filters))
    }else{
            (addFilter({id:props.id, name: props.title}))
         }
    } 
    dispatcher(addFilter({id:props.id, name: props.title}))
} */
  

const dispatcher = useDispatch()
    return ( 
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={`amado${props.id}`}
             onChange={
                        (e)=>{
console.log("CH",e.target.checked)
                            let classColor = document.querySelector(`.color`);
                            let a = classColor.getElementsByTagName("a");
                            for(let i = 0; i < a.length; i++){
                                a[i].style.border="0px solid ";
                            }   
                            let checks = document.querySelectorAll(".form-check-input")
                                checks.forEach(element => {
                                    if(element != e.target) element.checked =false;
                                });
                                if(e.target.checked) {
                                   dispatcher(getGoodsByBrand(props.category,props.id))
                                }
                                else{
                                    dispatcher(getGoods(props.category))
                                }
                        }
             }/>
            <label className="form-check-label" for={`amado${props.id}`}>{props.title}</label>
         </div>
     );
}
 
export default CheckINput ;