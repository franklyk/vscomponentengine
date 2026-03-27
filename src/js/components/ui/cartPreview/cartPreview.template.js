export function cartPreviewTemplate({ count }) {
    return `
        <div class="cart-preview">
            Carrinho: ${count} item(s)
        </div>
    `;
}