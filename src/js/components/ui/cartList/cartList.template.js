export function cartListTemplate({ items, total }) {
    if (!items.length) {
        return `<p>Seu Carrinho está vazio</p>`;
    }

    return `
    <ul>
    ${items.map(item => `
        <li>
        ${item.name} - R$ ${item.price} x ${item.qty} = <strong>R$ ${item.price * item.qty}</strong>

        <button data-action="decrease" data-id="${item.id}">-</button>
        ${item.qty}
        <button data-action="increase" data-id="${item.id}">+</button>
        <button data-action="remove" data-id="${item.id}">
            Remover
       </button>
            </li>`).join('')}
        </ul>

        <hr />
        
        <p><strong>Total: ${total}</strong></p>

        <button data-action="clear">
            Limpar Carrinho
        </button>
    `;

}