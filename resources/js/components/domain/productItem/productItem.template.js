
export function productTemplate({name, price}){
    return `
        <div class="product-item">
            <h2>${name}</h2>
            <p>R$ ${price}</p>
            <button data-action="add">Adicionar ao carrinho</button>
        </div>
    `
}