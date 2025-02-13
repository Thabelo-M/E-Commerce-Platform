document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    // Check if there are already 3 unique items in the cart
    if (cart.length >= 3) {
        showToast("You can only add up to 3 different courses to the cart.");
        return; // Prevent adding more courses if there are already 3 unique courses
    }

    // Check if the exact same course is already in the cart
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        showToast("You can't add the same course twice.");
        return; // Prevent adding the exact same course again
    }

    const modal = document.getElementById("confirmationModal");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const confirmButton = document.getElementById("confirmButton");
    const cancelButton = document.getElementById("cancelButton");

    confirmationMessage.textContent = `The course costs R${price}.00. Do you want to add it to the cart?`;

    modal.style.display = "block";

    confirmButton.onclick = function () {
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
    // Add the course if it's unique and there's space for it
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