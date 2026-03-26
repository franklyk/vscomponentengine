import Component from '../../../core/component.js';
import { Card } from '../../ui/card/card.template.js';
import { productTemplate } from './productItem.template.js';
import { emit } from '../../../core/eventBus.js';

export default class ProductItem extends Component {
    setup() {
        this._eventBound = false;
    }
    render() {
        const content = productTemplate(this.props);

        this.el.innerHTML = Card({ content });
    }

    bindEvents() {
        if (this._eventBound) return;

        this._eventBound = true;

        this.el.addEventListener('click', (e) => {
            if (e.target.matches('[data-action="add"]')) {
                e.stopPropagation();
                emit('cart:add', {
                    id: this.props.id,
                    name: this.props.name,
                    price: Number(this.props.price)
                });
            }
        });
    }
}