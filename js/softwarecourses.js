document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    if (cart.length >= 3) {
        showToast("You can only add up to 3 different courses to the cart.");
        return; 
    }

    const modal = document.getElementById("confirmationModal");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const confirmButton = document.getElementById("confirmButton");
    const cancelButton = document.getElementById("cancelButton");

    confirmationMessage.textContent = `The course costs R${price}.00. Do you want to add it to the cart?`;

    modal.style.display = "block";

    confirmButton.onclick = function () {
        addItemToCart(name, price);
        addItemToCart(name, price); 
        showToast(`${name} added to cart!`);
        closeModal();
    };

    cancelButton.onclick = closeModal;

    document.querySelector(".close").onclick = closeModal;

    window.onclick = function (event) {
        if (event.target == modal) closeModal();
    };
}

function addItemToCart(name, price) {
    if (cart.length < 3) {
        cart.push({ name, price, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    }
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = count;
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 3000);
}

function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
}
