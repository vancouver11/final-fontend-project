import React from 'react';
import logo from './logo.svg';
import './App.css';

import News from './components/news';
import Footer from './components/footer';
import NavigationMobile from './components/navigation-mobile';
import Header from './components/header';
import Logo from './components/logo';
import Nav from './components/nav';
import ButtonGroup from './components/button-group';
import CartMenu from './components/cart-menu';
import ContainSocialBtn from './components/contain-social-buttons';
import { tsPropertySignature } from '@babel/types';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCategories, getGoods,changeAciveCategory,addgoodCart } from '../src/store/action-creators';
function App(props) {
 
  if(localStorage.getItem('goods') === null){localStorage.setItem("goods","[]")};
  const dispatcher = useDispatch();
  useEffect(() => {
  dispatcher(getCategories());
  },[]);

  useEffect(() => {
    dispatcher(addgoodCart(JSON.parse(localStorage.getItem('goods'))));
    },[]);
 
  return (
    <>
    <div className="main-content-wrapper d-flex clearfix">
        <NavigationMobile/>
        
            <Header>
                <Logo type="forHeader"/>
                <Nav type="vertical"/>
                <ButtonGroup/>
                <CartMenu/>
                <ContainSocialBtn/>
            </Header>
            {props.children}
    </div>
        <News/>
        <Footer/>
        
    </>


  );
}

export default App;
