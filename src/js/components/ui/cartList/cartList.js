import Component from '../../../core/component.js';
import { on, emit } from '../../../core/eventBus.js';
import { cartListTemplate } from './cartList.template.js';

export default class CartList extends Component {
  setup() {

    const saved = JSON.parse(localStorage.getItem('vs-cart')) || [];

    this.state = {
      items: saved
    };

    // 🔥 REATIVO
    on('cart:updated', (cart) => {

      this.state.items = cart;
      this.render();
    });
  }

  bindEvents() {
    
    this.el.addEventListener('click', (e) => {

      const increaseBtn = e.target.closest('[data-action="increase"]');
      
      const decreaseBtn = e.target.closest('[data-action="decrease"]');
      const removeBtn = e.target.closest('[data-action="remove"]');
      const clearBtn = e.target.closest('[data-action="clear"]');

      if (increaseBtn) {
        const id = Number(increaseBtn.dataset.id);

        emit('cart:increase', id)
      }
      

      if (decreaseBtn) {
        const id = Number(decreaseBtn.dataset.id);
        emit('cart:decrease', id)
      }
      
      if (removeBtn) {
        const id = Number(removeBtn.dataset.id);
        emit('cart:remove', id)
      }

      if (clearBtn) {
        const id = Number(clearBtn.dataset.id);
        emit('cart:clear', id)
      }

    });
  }

  render() {
    const total = this.state.items.reduce((sum, item) => {
      return sum + (item.price * item.qty);
    }, 0);

    this.el.innerHTML = cartListTemplate({
      items: this.state.items,
      total
    });
  }
}