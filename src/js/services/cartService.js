
import { on, emit } from '../core/eventBus.js';

const cart = (JSON.parse(localStorage.getItem('vs-cart')) || []).map(item => ({
  ...item,
  qty:item.qty || 1
}));

emit('cart:updated', cart);

on('cart:add', (product) => {
  if (!product.id) {
    console.warn('Produto inválido:', product);
    return;
  }

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({
      ...product,
      qty: 1
    });
  }

  saveCart();
  emit('cart:updated', cart);
});

on('cart:increase', (id) => {
  
  const item = cart.find(item => Number(item.id) === Number(id));

  if(item){
    item.qty += 1;
  }
  saveCart();
  emit('cart:updated', cart);
});

on('cart:decrease', (id) => {
  const item = cart.find(item => Number(item.id) === Number(id));

  if(!item) return;

  item.qty -=1;

  if(item.qty <= 0){
    const index = cart.findIndex(i => i.id === id);
    cart.splice(index, 1);
  }

  saveCart();
  emit('cart:updated', cart);
});

on('cart:remove', (id) => {
  const index = cart.findIndex(item => item.id == id);

  if (index !== -1) {
    cart.splice(index, 1);
  }

  saveCart();
  emit('cart:updated', cart);
});

on('cart:clear', () => {
  cart.length = 0;

  saveCart();
  emit('cart:updated', cart);
});

function saveCart() {
  localStorage.setItem('vs-cart', JSON.stringify(cart));
}