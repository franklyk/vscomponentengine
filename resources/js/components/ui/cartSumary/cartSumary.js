import Component from "../../../core/component.js";
import { on, emit } from '../../../core/eventBus.js';
import { cartSumaryTemplate } from "./cartSumary.template.js";

export default class CartSumary extends Component {
    setup() {
        const saved = JSON.parse(localStorage.getItem('vs-cart')) || [];

        this.state = {
            items: saved,
            success: false
        };

        on('cart:updated', (cart) => {
            this.state.items = cart;
            this.render();
        });

        on('checkout:success', ()=> {
            this.state.success = true;
            this.render();
        });
    }

    bindEvents() {
        this.el.addEventListener('click', (e) => {
            if (e.target.matches('[data-action="checkout"]')) {

                const order = this.getOrder();

                console.log('🧾 Pedido criado', order);

                emit('checkout:submit', order);
            }
        });
    }

    getOrder() {
        const total = this.state.items.reduce((sum, item) => {
            return sum + (item.price * item.qty);
        }, 0);

        return {
            items: this.state.items,
            total,
            createAt: new Date().toISOString(),
            status: 'pending'
        };
    }
    render() {
        const total = this.state.items.reduce((sum, item) => {
            return sum + (item.price * item.qty);
        }, 0);

        this.el.innerHTML = cartSumaryTemplate({
            items: this.state.items,
            total,
            success: this.state.success
        });
    }
}