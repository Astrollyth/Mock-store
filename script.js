// Cart
document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    function updateCartDisplay() {
        // Clear cart  
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");

            // product name, quantity and price
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
            `;

            cartItemsContainer.appendChild(itemElement);

            // Update total price
            total += item.price * item.quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }
    updateCartDisplay();

        // Checkout button 
        document.getElementById("checkout").addEventListener("click", function () {
            if (cart.length > 0) {
                // Proceed to checkout 
                alert("Proceeding to checkout...");
                window.location.href = "invoice.html"; // Redirect to invoice page
            } else {
                alert("Your cart is empty!");
            }
        });
    
        // Cancel Button 
        document.getElementById("cancel").addEventListener("click", function () {
            // Clear cart from localStorage and redirect
            localStorage.removeItem("cart");
            window.location.href = "products.html"; // Redirect to the products page
        });
    
        // Exit Button 
        document.getElementById("exit").addEventListener("click", function () {
            window.location.href = "index.html"; // Redirect to home page
        });
    });
    

// Invoice Page
document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const invoiceItemsContainer = document.getElementById("invoice-items");
    const invoicePriceElement = document.getElementById("invoice-price");

    function updateInvoiceDisplay() {
        invoiceItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");

            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
            `;
            invoiceItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });
        invoicePriceElement.textContent = total.toFixed(2);
    }
    if (invoiceItemsContainer && invoicePriceElement) {
        updateInvoiceDisplay();
        document.getElementById("exit").addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});

// Contact Form
document.getElementById("contactForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    successMessage.style.display = "none";

    let isValid = true;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (message.length < 5) {
        messageError.textContent = "Message should be at least 5 characters long.";
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = "block";
        document.getElementById("contactForm").reset();
    }
});

// Login Form
const SAMPLE_USERNAME = "user@example.com";
const SAMPLE_PASSWORD = "password123";
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    if (emailInput === SAMPLE_USERNAME && passwordInput === SAMPLE_PASSWORD) {
        alert("Login successful!");
    } else if (passwordInput.length < 8) {
        alert("Password must be at least 8 characters long.");
    } else {
        alert("Invalid email or password.");
    }
});
document.getElementById("signupLink")?.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Redirecting to the sign-up page...");
});


// Index
document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    function updateCart(itemName, itemPrice) {
        let item = cart.find(product => product.name === itemName);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name: itemName, price: itemPrice, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${itemName} added to cart!`);
    }
    
    document.querySelectorAll(".see-more-items").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));
            updateCart(name, price);
        });
    });
    
    document.getElementById("checkout").addEventListener("click", function () {
        if (cart.length > 0) {
            window.location.href = "products.html";
        } else {
            alert("Your cart is empty!");
        }
    });
});

// Product
document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    function updateCart(itemName, itemPrice) {
        let item = cart.find(product => product.name === itemName);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name: itemName, price: itemPrice, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${itemName} added to cart!`);
    }
    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));
            updateCart(name, price);
        });
    });
    
    document.getElementById("checkout").addEventListener("click", function () {
        if (cart.length > 0) {
            window.location.href = "cart.html";
        } else {
            alert("Your cart is empty!");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout");

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = ''; 
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }

    updateCartDisplay(); 

    // Checkout button 
    checkoutButton.addEventListener("click", function () {
        if (cart.length > 0) {
            alert("Proceeding to checkout...");
            window.location.href = "invoice.html"; // Redirect to the invoice page
        } else {
            alert("Your cart is empty!");
        }
    });
});
