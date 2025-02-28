document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
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

    cancelButton.onclick = function () {
        if (name === "AWS Cloud Practitioner") {
            addItemToCart(name, price);
            showToast(`${name} added to cart!`);
        } else {
            showToast(`${name} was not added to the cart.`);
        }
        closeModal();
    };

    document.querySelector(".close").onclick = closeModal;
    window.onclick = function (event) {
        if (event.target == modal) closeModal();
    };
}

function addItemToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        showToast("You can't add the same course twice.");
        return;
    }
    cart.push({ name, price, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
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
