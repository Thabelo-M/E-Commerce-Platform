//For Sign Up//
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
     if (name && email && password) {
     alert("Account created successfully!");
      } else {
     alert("Please fill in all fields.");
      }
    });
//For Login Page//
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    /* Correct email and password*/
    const validEmail = "softwaretester@gmail.com";
    const validPassword = "Sm@rt202$";
    /* Get user input*/
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    /* Popup message element*/
    const popupMessage = document.getElementById("popupMessage");
    /* Show popup message function*/
    function showPopupMessage(message, isSuccess) {
        popupMessage.textContent = message;
        popupMessage.className = "popup-message " + (isSuccess ? "popup-success" : "popup-error");
        popupMessage.style.display = "block"; 
        
        /* Hide the popup*/
        setTimeout(() => {
            popupMessage.style.display = "none";
        }, 5000);
    }

    /* Validate credentials*/
    if (email === validEmail && password === validPassword) {
        showPopupMessage("Login successful!", true); 
    } else {
        showPopupMessage("Invalid email or password. Please try again.", false); 
    }
});

//For Home Page//
document.getElementById("search-button").addEventListener("click", function() {
    let query = document.getElementById("search-box").value;
    alert("You searched for: " + query);
});
