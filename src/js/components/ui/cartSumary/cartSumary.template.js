export function cartSumaryTemplate({ items, total, success }) {

    if (success) {
        return `<p>🎉 Pedido realizado com sucesso!</p>`;
    }
    
    if (!items.length) {
        return `<p>Seu carrinho está vazio</p>`;
    }

    return `
    <div>
        <h3>Resumo do Pedido</h3>

        <ul>
         ${items.map(item => `
            <li>
            ${item.name} x ${item.qty}
            → <strong>R$ ${item.price * item.qty}</strong>
            </li>
            `).join('')}   
        </ul>

        <hr />

        <p><strong>Total: ${total}</strong></p>

        <button data-action="checkout">
            Finalizar compra
        </button>
    </div>
    `;

    
}