import { on, emit } from '../core/eventBus.js';

on('checkout:submit', (order) => {
    console.log('🚀 Enviando pedido...', order);

    // 🔥 simulação de API
    setTimeout(() => {
        console.log('✅ Pedido enviado com sucesso');

        // limpa carrinho
        localStorage.removeItem('vs-cart');

        emit('cart:updated', []);
        emit('checkout:success', order);
    }, 1000);
});