import React from 'react';
import Input from './components/input';
import Select from './components/select';
import TextArea from './components/textarea';
import SummaryInBasket from '../../summary-in-basket';

function PageCheckout(props){
    return ( 
        <div className="cart-table-area section-padding-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="checkout_details_area mt-50 clearfix">

                        <div className="cart-title">
                            <h2>Checkout</h2>
                        </div>

                        <form action="#" method="post">
                            <div className="row">
                                
                                    <Input type="text" className="form-control" wrapClass="col-md-6 mb-3" id="first_name" value="" placeholder="First Name" />
                                
                                
                                    <Input type="text" className="form-control" wrapClass="col-md-6 mb-3" id="last_name" value="" placeholder="Last Name" required/>
                                
                                
                                    <Input type="text" className="form-control" wrapClass="col-md-12 mb-3" id="company" placeholder="Company Name" value=""/>
                                
                                
                                    <Input type="email" className="form-control" wrapClass="col-12 mb-3" id="email" placeholder="Email" value=""/>
                                
                                    <Select/>
                                
                                    <Input type="text" className="form-control mb-3" wrapClass="col-12 mb-3" id="street_address" placeholder="Address" value=""/>
                                
                                
                                    <Input type="text" className="form-control" wrapClass="col-12 mb-3" id="city" placeholder="Town" value=""/>
                               
                                
                                    <Input type="text" className="form-control" wrapClass="col-md-6 mb-3" id="zipCode" placeholder="Zip Code" value=""/>
                                
                                
                                    <Input type="number" wrapClass="col-md-6 mb-3" className="form-control"  id="phone_number" min="0" placeholder="Phone No" value=""/>
                                
                                    <TextArea/>

                                <div className="col-12">
                                    <div className="custom-control custom-checkbox d-block mb-2">
                                        <input type="checkbox"  className="custom-control-input" id="customCheck2"/>
                                        <label className="custom-control-label" for="customCheck2">Create an accout</label>
                                    </div>
                                    <div className="custom-control custom-checkbox d-block">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                        <label className="custom-control-label" for="customCheck3">Ship to a different address</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <SummaryInBasket where="pageChekout"/>
                
            </div>
        </div>
    </div>

     );
}
 
export default PageCheckout ;