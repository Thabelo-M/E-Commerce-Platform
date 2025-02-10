let cartCount = 0;

function addToCart(price) {
    const modal = document.getElementById("confirmationModal");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const confirmButton = document.getElementById("confirmButton");
    const cancelButton = document.getElementById("cancelButton");
    // Set the confirmation message
    confirmationMessage.textContent = `The course costs R${price}.00. Do you want to add it to the cart?`;
    // Show the modal
    modal.style.display = "block";
    // When the user clicks on "Yes"
    confirmButton.onclick = function() {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert(`Course added to cart!`);
        closeModal();
    };
    // When the user clicks on "No"
    cancelButton.onclick = function() {
        alert(`Course was not added to the cart.`);
        closeModal();
    };
    // When the user clicks on the close button
    document.querySelector(".close").onclick = function() {
        closeModal();
    };
    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };
}
// Function to close the modal
function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
}