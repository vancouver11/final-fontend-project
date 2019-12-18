import React from 'react';
import { useDispatch } from 'react-redux';
import { useState} from 'react';
import { addgoodCart } from '../../../../store/action-creators';

function DetailsProduct(props) {
    const{
        title,
        price,
        currentGood,
        currentCat
      } = props;

      const [amount, setAmount] = useState(1);
      const [clickBtn, setClickBtn] = useState(false);
let textButton = !clickBtn?"Добавить товар": " товар добавлен";

if (amount < 1) setAmount(1);

      const dispatcher = useDispatch();
      let info = {currentGood,amount};
      console.log(localStorage.goods)
          function Addgood(info) {
             /*  dispatcher(addgoodCart(info)); */
            
              
                if(localStorage.getItem('goods') == undefined) {
                    localStorage.setItem('goods',"[]");
                    
                } else{

                    let goodsLocal = JSON.parse(localStorage.getItem('goods'));
                    function isGood(elem, index){
                        return ((elem.currentGood.id == currentGood.id) && (elem.currentGood.category == currentGood.category))
                    }
                    let indexElem = goodsLocal.findIndex(isGood);
                    console.log('index', indexElem);
                    if(indexElem !=-1){
                        goodsLocal[indexElem].amount += amount;
                        dispatcher(addgoodCart(goodsLocal)); 
                        let goodjs = JSON.stringify(goodsLocal);
                        localStorage.setItem('goods',goodjs)
                    } else{

                        let good =  JSON.parse(localStorage.getItem('goods'));
                        good.push(info);
                        dispatcher(addgoodCart(good)); 
                        let goodjs = JSON.stringify(good);
                        localStorage.setItem('goods',goodjs) 
                    }

                }
               
                    

              
             /* localStorage.clear() */
          }
      
    
    return ( 




        <div className="col-12 col-lg-5">
        <div className="single_product_desc">
            {/* <!-- Product Meta Data --> */}
            <div className="product-meta-data">
                <div className="line"></div>
    <p className="product-price">${price}</p>
                <a href="product-details.html">
                    <h6>{title}</h6>
                </a>
                {/* <!-- Ratings & Review --> */}
                <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                    <div className="ratings">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="review">
                        <a href="#">Write A Review</a>
                    </div>
                </div>
              {/*   <!-- Avaiable --> */}
                <p className="avaibility"><i class="fa fa-circle"></i> In Stock</p>
            </div>

            <div className="short_overview my-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
            </div>

           {/*  <!-- Add to Cart Form --> */}
            <form className="cart clearfix" method="post">
                <div className="cart-btn d-flex mb-50">
                    <p>Qty</p>
                    <div class="quantity">
                        <span className="qty-minus" onClick={()=>{setAmount(amount+1);setClickBtn(false)}}><i className="fa fa-caret-down"  ></i></span>
                        <input type="number" className="qty-text"  step="1" min="1" max="300" name="quantity" value={amount}/>
                        <span className="qty-plus" onClick={()=>{setAmount(amount-1);setClickBtn(false)}}><i className="fa fa-caret-up" ></i></span>
                    </div>
                </div>
                <button type="submit" name="addtocart" value="5" className="btn amado-btn" onClick ={(e)=>{Addgood(info);e.preventDefault(); setClickBtn(true)}}>{textButton}</button>
            </form>

        </div>
    </div>  

     
     );
}
 
export default DetailsProduct;