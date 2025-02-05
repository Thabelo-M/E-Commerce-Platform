let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const VAT = 400;

        function displayCart() {
            let cartContainer = document.getElementById("cart-items");
            cartContainer.innerHTML = "";
            let total = 0;
            
            cart.forEach((item, index) => {
                let cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `${item.name} - R${item.price} <button onclick="removeItem(${index})">REMOVE</button>`;
                cartContainer.appendChild(cartItem);
                total += item.price;
            });
            
            document.getElementById("total-price").innerText = total;
            document.getElementById("grand-total").innerText = total + VAT;
        }

        function removeItem(index) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        }

        function checkout() {
            alert("Proceeding to checkout with total: R" + (cart.reduce((sum, item) => sum + item.price, 0) + VAT));
        }

        function addMoreCourses() {
            window.location.href = "courses.html";
        }

        displayCart();
        