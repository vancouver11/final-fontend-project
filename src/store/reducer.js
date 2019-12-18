import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import * as Actions from './actions';
import { statement } from '@babel/template';

const initialState = {
        goodsList:[] , //список товаров в корзине
        categories:{},
        activeCategory: 1,
        activeGood: 1,
        goods:{},
        images:{data:[]},
        goodsForHome:[],
        colors:{},
        brands:{},
        filters:"",
        priceFilter:{},
        customFilterPrice:{}
};

function cartReducer(store = initialState, action){

    switch (action.type) {
       
        case Actions.UPDATE_CATEGORIES:
            return { ...store, categories: action.payload};
        case Actions.UPDATE_GOODS:
            return { ...store, goods: action.payload};
        case Actions.UPDATE_IMAGES:
            return { ...store, images: action.payload};
        case Actions.UPDATE_COLORS:
            return { ...store, colors: action.payload};
        case Actions.CHANGE_ACTIVECATEGORY:
            return { ...store, activeCategory: action.payload};
        case Actions.CHANGE_ACTIVEGOOD:
            return { ...store, activeGood: action.payload};
        case Actions.ADD_GOOD_IN_BASKET:
                return { ...store, goodsList:action.payload};
        case Actions.ADD_BRANDS:
                return { ...store, brands:action.payload};
        case Actions.ADD_GOODS_FOR_HOME:
                return { ...store, goodsForHome:[...store.goodsForHome,action.payload]};
        case Actions.ADD_FILTER:
                return { ...store, filters:action.payload};
        case Actions.ADD_GOODS_BY_BRAND:
                return { ...store, goods:action.payload};
        case Actions.CLEAR_FILTER:
                return { ...store, filters:""};
        case Actions.CHANGE_PRICE_FILTER:
                return { ...store, priceFilter:action.payload};
        case Actions.CUSTOM_PRICE_RANGE:
                return { ...store, customFilterPrice:action.payload};
                
        default: return store
    }

}

export default history => combineReducers({
   router: connectRouter(history),
   cart: cartReducer, 
})