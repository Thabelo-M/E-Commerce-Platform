document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
});
 
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;
 
    cartContainer.innerHTML = "";
 
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            let itemRow = document.createElement("div");
            itemRow.classList.add("cart-item");
            itemRow.innerHTML = `
<p>${item.name} - R${item.price} x ${item.quantity}</p>
<button onclick="updateQuantity(${index}, 1)">+</button>
<button onclick="updateQuantity(${index}, -1)">-</button>
<button onclick="removeItem(${index})">Remove</button>
            `;
            cartContainer.appendChild(itemRow);
            totalPrice += item.price * item.quantity;
        });
    }
 
    let vat = totalPrice * 0.17;
    let finalTotal = totalPrice + vat;
 
    document.getElementById("cart-total").innerText = totalPrice.toFixed(2);
    document.getElementById("vat-amount").innerText = vat.toFixed(2);
    document.getElementById("final-total").innerText = finalTotal.toFixed(2);
}
 
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
    if (cart[index]) {
        cart[index].quantity += change;
 
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
 
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }
}
 
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
    if (cart[index]) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }
}
 
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = count;
}
 
function checkout() {
    alert("Proceeding to checkout...");
    localStorage.removeItem("cart");
    displayCartItems();
    updateCartCount();
}
 
function continueShopping() {
    window.location.href = "Courses.html";
}