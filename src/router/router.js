import React, {lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import * as URL from './url';
import Home from '../components/screens/home';

const Cart = lazy(() => import ('../components/screens/basket'));
const Shop = lazy(() => import('../components/screens/shop'));
const Checkout = lazy(() => import('../components/screens/checkout'));
const Product = lazy(() => import('../components/screens/product'));


export default (

    <Switch>
        <Route exact  path = {URL.HOME} component ={Home}/>
        <Route  exact  path = {URL.CART} component ={Cart}/>
        <Route  exact  path = {URL.SHOP} component ={Shop}/>
        <Route  exact  path = {URL.CHECKOUT} component ={Checkout} />
        <Route  exact  path = {URL.PRODUCTS} component ={Product}/>
        <Route  exact  path = {URL.CATEGORIES_DETAILS} component ={Shop}/>
        <Route  exact  path = {URL.GOOD} component ={Product}/>
        
    </Switch>
)

