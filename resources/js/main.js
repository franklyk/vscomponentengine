import { register } from "../js/core/registry.js";
import { init } from "./core/loader.js";

// components
import ProductItem from "./components/domain/productItem/productItem.js";

import CartList from './components/ui/cartList/cartList.js';

import CartPreview from './components/ui/cartPreview/cartPreview.js';

import CartSumary from "./components/ui/cartSumary/cartSumary.js";


// services
import './services/cartService.js';
import './services/checkoutService.js';



// registro dos componentes
register('productItem', ProductItem);
register('cartPreview', CartPreview);
register('cartList', CartList);
register('cartSumary', CartSumary);

// inicialização da engine
document.addEventListener('DOMContentLoaded', ()=> {
    init();
})