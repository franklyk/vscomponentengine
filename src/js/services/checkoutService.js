import { on, emit } from '../core/eventBus.js';

on('checkout:submit', async (order) => {
  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });

  const data = await response.json();

  emit('checkout:success', data);
});