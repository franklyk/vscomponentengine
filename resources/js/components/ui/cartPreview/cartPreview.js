import Component from "../../../core/component.js";
import { on } from "../../../core/eventBus.js";
import { cartPreviewTemplate } from './cartPreview.template.js';

export default class CartPreview extends Component {
    setup() {
        const saved = JSON.parse(localStorage.getItem('vs-cart')) || [];

        this.state = {
            // count: 0
            count: saved.length
        };
    }

    bindEvents() {
        on('cart:updated', (cart) => {

            this.state.count = cart.length;
            this.render();
        });
    }

    render() {
        this.el.innerHTML = cartPreviewTemplate({
            count: this.state.count
        });
    }
}