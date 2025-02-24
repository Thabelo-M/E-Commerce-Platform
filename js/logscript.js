document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const popup = document.getElementById("login-popup");
    const popupMessage = document.getElementById("login-popup-message");
    const closePopup = document.getElementById("close-popup");

    // Correct email and password
    const validEmail = "softwaretester@gmail.com";
    const validPassword = "Sm@rt202$";

    // Function to show popup
    function showPopupMessage(message, isSuccess) {
        popupMessage.textContent = message;
        popup.style.display = "block";
        popupMessage.style.color = isSuccess ? "green" : "red";
    }

    // Close popup when button is clicked
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Handle login form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === validEmail && password === validPassword) {
            showPopupMessage("You have successfully logged in!", true);
        } else {
            showPopupMessage("Incorrect details!", false);
        }
    });
});