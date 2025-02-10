document.getElementById("search-button").addEventListener("click", function () {
   let query = document.getElementById("search-box").value.toLowerCase();
   let bodyText = document.body.innerText.toLowerCase();

   if (query.trim() === "") {
       alert("Please enter a search term.");
   } else if (bodyText.includes(query)) {
       alert("Text found!");
   } else {
  alert("Text not found.");
   }
});
