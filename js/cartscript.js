document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
});

let appliedPromo = { code: "", discount: 0 };

function applyPromoCode() {
    let promoInput = document.getElementById("promo-code").value.trim();
    let totalPrice = parseFloat(document.getElementById("cart-total").innerText) || 0;
    let popupMessage = document.getElementById("promo-popup-message");
    let promoPopup = document.getElementById("promo-popup");

    if (promoInput === "NEW2025") {
        appliedPromo = { code: "NEW2025", discount: totalPrice * 0.10 };
        popupMessage.innerText = "✅ Successfully added 10% promo!";
        popupMessage.style.color = "green";
    } else if (promoInput === "REG2520") {
        appliedPromo = { code: "REG2520", discount: totalPrice * 0.15 };
        popupMessage.innerText = "✅ Successfully added 25% promo!";
        popupMessage.style.color = "green";
    } else {
        appliedPromo = { code: "", discount: 0 };
        popupMessage.innerText = "❌ Invalid promo!";
        popupMessage.style.color = "red";
    }

    // Show the popup
    promoPopup.style.display = "block";

    displayCartItems(); // Refresh cart to show the discount
}

// Function to close the promo popup
function closePromoPopup() {
    document.getElementById("promo-popup").style.display = "none";
}

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

    let promoDiscount = appliedPromo.discount || 0;
    let vat = (totalPrice - promoDiscount) * 0.15; // VAT is calculated after promo
    let finalTotal = totalPrice - promoDiscount + vat;

    document.getElementById("cart-total").innerText = totalPrice.toFixed(2);
    document.getElementById("vat-amount").innerText = vat.toFixed(2);
    document.getElementById("final-total").innerText = finalTotal.toFixed(2);

    // Display promo discount only if applied
    let promoSection = document.getElementById("promo-discount");
    if (promoDiscount > 0) {
        promoSection.innerHTML = `<p><strong>Promo Discount:</strong> -R${promoDiscount.toFixed(2)}</p>`;
    } else {
        promoSection.innerHTML = "";
    }
}

// Function to update quantity
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

// Function to remove item
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart[index]) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }
}

// Function to update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = count;
}

// Disabled this since there's no checkout page
// function checkout() {
//     alert("Proceeding to checkout...");
//     localStorage.removeItem("cart");
//     displayCartItems();
//     updateCartCount();
// }
function checkout() {
    window.location,href = "#";
}
// Function for adding more courses
function continueShopping() {
    window.location.href = "Home.html";
}

let selectedCourse = { name: "", price: 0 };

// Function to show the confirmation modal
function showConfirmationModal(courseName, price) {
    selectedCourse = { name: courseName, price: price }; // Store the selected course
    document.getElementById("confirmation-message").innerText = 
        `Do you want to add ${courseName} to your cart?`;
    document.getElementById("confirmation-modal").style.display = "block";
}
