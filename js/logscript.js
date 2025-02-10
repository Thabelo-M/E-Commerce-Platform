document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        /* Correct email and password */
        const validEmail = "softwaretester@gmail.com";
        const validPassword = "Sm@rt202$";

        /* Get user input */
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        /* Popup message element */
        const popupMessage = document.getElementById("popupMessage");

        /* Show popup message function */
        function showPopupMessage(message, isSuccess) {
            popupMessage.textContent = message;
            popupMessage.className = "popup-message " + (isSuccess ? "popup-success" : "popup-error");
            popupMessage.style.display = "block";

            /* Prevent input fields from being cleared */
            document.getElementById("email").value = email;
            document.getElementById("password").value = password;

            /* Hide the popup after 5 seconds */
            setTimeout(() => {
                popupMessage.style.display = "none";
            }, 5000);
        }

        /* Validate credentials */
        if (email === validEmail && password === validPassword) {
            showPopupMessage("You have successfully logged in!", true);
        } else {
            showPopupMessage("Incorrect details!", false);
        }
    });
});
