let cartCount = 0;

function addToCart(price) {
    const userResponse = confirm(`The course costs R${price}.00. Do you want to add it to the cart?`);
    if (userResponse) {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert(`Course added to cart!`);
    } else {
        alert(`Course was not added to the cart.`);
    }
}