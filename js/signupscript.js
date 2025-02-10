document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let popupMessage = document.getElementById("popupMessage");
        
        const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/; // Only letters and spaces
        const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/; // At least 8 chars, 1 symbol
        
        function showPopupMessage(message, isSuccess) {
            popupMessage.textContent = message;
            popupMessage.className = "popup-message " + (isSuccess ? "popup-success" : "popup-error");
            popupMessage.style.display = "block";
            
            setTimeout(() => {
                popupMessage.style.display = "none";
            }, 5000);
        }
        
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
