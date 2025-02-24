document.addEventListener("DOMContentLoaded", function () {
    // Show the popup with different colors based on success or error
    function showPopupMessage(message, isSuccess) {
        let popup = document.getElementById("promo-popup");
        let popupMessage = document.getElementById("promo-popup-message");

        popupMessage.textContent = message;
        popup.style.display = "block";

        // Apply color based on success or error
        popupMessage.style.color = isSuccess ? "green" : "red";
    }

    // Close the popup when the close button is clicked
    document.getElementById("close-popup").addEventListener("click", function () {
        document.getElementById("promo-popup").style.display = "none";
    });

    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/; // Only letters and spaces
        const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/; // At least 8 chars, 1 symbol

        if (!name || !email || !password) {
            showPopupMessage("Please fill in all fields.", false);
            return;
        }

        if (!nameRegex.test(name)) {
            showPopupMessage("Name should only contain letters and spaces.", false);
            return;
        }

        if (!passwordRegex.test(password)) {
            showPopupMessage("Password must be at least 8 characters long and contain at least one symbol!", false);
            return;
        }

        showPopupMessage("Account created successfully!", true);
    });
});