import * as Actions  from './actions';

export function addgoodCart (payload){
    return {
        type: Actions.ADD_GOOD_IN_BASKET,
        payload
        }
};

export function addGoodsForHome (payload){
    return {
        type: Actions.ADD_GOODS_FOR_HOME,
        payload
        }
};

export function addFilter(payload){
    return {
        type: Actions.ADD_FILTER,
        payload
        }
};

export function addGoodsByBrand(payload){
    return {
        type: Actions.ADD_GOODS_BY_BRAND,
        payload
        }
};
export function clearFilter(payload){
    return {
        type: Actions.CLEAR_FILTER,
        payload
        }
};



export function updateCategories (payload){
    return {
        type: Actions.UPDATE_CATEGORIES,
        payload
        }
};

export function updateGoods (payload){
    return {
        type: Actions.UPDATE_GOODS,
        payload
        }
};
export function updateImages (payload){
    return {
        type: Actions.UPDATE_IMAGES,
        payload
        }
};

export function updateColors (payload){
    return {
        type: Actions.UPDATE_COLORS,
        payload
        }
};

export function addBrands (payload){
    return {
        type: Actions.ADD_BRANDS,
        payload
        }
};

export function changeAciveCategory (payload){
    return {
        type: Actions.CHANGE_ACTIVECATEGORY,
        payload
        }
};

export function changeAciveGood (payload){
    return {
        type: Actions.CHANGE_ACTIVEGOOD,
        payload
        }
};



export function getCategories (payload){
   return  async (dispatcher) =>{
    let response = fetch("http://test-api.ipromote.ru/api/category/find");
    response.then (response => response.json())
    .then (data =>{
        dispatcher(updateCategories(data));
    })
 
   }
    
};


export function getGoods (id=1,payload){
    return  async (dispatcher) =>{
     let response = fetch(`http://test-api.ipromote.ru/API/CATALOG/FIND?category=${id}`);
     response.then (response => response.json())
     .then (data =>{
         dispatcher(updateGoods(data))
     })
  
    }
     
 };


 export function getGoodsByColor (id=1,idColor=1,payload){
    return  async (dispatcher) =>{
     let response = fetch(`http://test-api.ipromote.ru/API/CATALOG/FIND?category=${id}&colors=${idColor}`);
     response.then (response => response.json())
     .then (data =>{
         dispatcher(updateGoods(data))
     })
  
    }
     
 };

 export function getGoodsByBrand (id=1,idBrand=1,payload){
    return  async (dispatcher) =>{
     let response = fetch(`http://test-api.ipromote.ru/API/CATALOG/FIND?category=${id}&brand=${idBrand}`);
     response.then (response => response.json())
     .then (data =>{
         dispatcher(updateGoods(data))
     })
  
    }
     
 };


 export function getGoodsForHome (id,payload){
    return  async (dispatcher) =>{
     let response = fetch(`http://test-api.ipromote.ru/API/CATALOG/FIND?category=${id}`);
     response.then (response => response.json())
     .then (data =>{
         dispatcher(addGoodsForHome(data))
     })
  
    }
     
 };


 export function getImages(id,payload){
    return  async (dispatcher) =>{
     let response = fetch(`http://test-api.ipromote.ru/API/IMAGE/FIND?cid=${id}`);
     response.then (response => response.json())
     .then (data =>{
         dispatcher(updateImages(data));
     })
  
    }
     
 };

 export function getColors (payload){
    return  async (dispatcher) =>{
     let response = fetch("http://test-api.ipromote.ru/API/COLOR/FIND");
     response.then (response => response.json())
     .then (data =>{
         dispatcher(updateColors(data));
     })
  
    }
     
 };

 export function getBrands (payload){
    return  async (dispatcher) =>{
     let response = fetch("http://test-api.ipromote.ru/API/BRAND/FIND");
     response.then (response => response.json())
     .then (data =>{
         dispatcher(addBrands(data));
     })
  
    }
     
 };

 export function changePriceFilter (payload){
    return {
        type: Actions.CHANGE_PRICE_FILTER,
        payload
        }
};



 export function getPriceRange (payload){
    return  async (dispatcher) =>{
     let response = fetch("http://test-api.ipromote.ru/API/CATALOG/RANGE");
     response.then (response => response.json())
     .then (data =>{
         dispatcher(changePriceFilter (data));
     })
  
    }
     
 };


 export function customPriceRange (payload){
    return {
        type: Actions.CUSTOM_PRICE_RANGE,
        payload
        }
};



