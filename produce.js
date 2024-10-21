const produceItems = [
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg',
        seller: 'seller1',
        cat:'veg'
    },
    {
        name: 'Farm Fresh Carrots',
        price: '$1.50 / kg',
        description: 'Crunchy and sweet carrots harvested this week.',
        image: 'images/carrots.jpg',
        seller: 'seller1',
        cat:'veg'
    },
    {
        name: 'Free-range Eggs',
        price: '$3.00 / dozen',
        description: 'Organic eggs from free-range chickens.',
        image: 'images/eggs.jpg',
        seller: 'seller1',
        cat:'eggs'
    },
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg',
        seller: 'seller2',
        cat:'veg'
    },
    {
        name: 'Farm Fresh Carrots',
        price: '$1.50 / kg',
        description: 'Crunchy and sweet carrots harvested this week.',
        image: 'images/carrots.jpg',
        seller: 'seller2',
        cat:'veg'
    },
    {
        name: 'Free-range Eggs',
        price: '$3.00 / dozen',
        description: 'Organic eggs from free-range chickens.',
        image: 'images/eggs.jpg',
        seller: 'seller2',
        cat:'eggs'
    },
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg',
        seller: 'seller3',
        cat:'veg'
    },
    {
        name: 'Farm Fresh Carrots',
        price: '$1.50 / kg',
        description: 'Crunchy and sweet carrots harvested this week.',
        image: 'images/carrots.jpg',
        seller: 'seller3',
        cat:'veg'
    },
    {
        name: 'Free-range Eggs',
        price: '$3.00 / dozen',
        description: 'Organic eggs from free-range chickens.',
        image: 'images/eggs.jpg',
        seller: 'seller3',
        cat:'eggs'
    },
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg',
        seller: 'seller4',
        cat:'veg',
    },
   
   
    // Add more items as needed
];
let cart = [];
// Function to display produce items
function displayProduce() {
    const container = document.getElementById('produce-container');
    container.innerHTML = ''; // Clear current products
    
    produceItems.forEach(item => {
        const produceDiv = document.createElement('div');
        produceDiv.classList.add('produce-item');
    
        produceDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <a href="#">${item.seller}</a>
            <p><strong>${item.price}</strong></p>
            <button class="btn">Buy Now</buttom>
            
        `;
        container.appendChild(produceDiv);
        produceDiv.querySelector('.btn').addEventListener('click', function() {
            addToCart(item);  // Pass the actual item instead of index
        });
    });
    
}
function filterProductsByCategory(category) {
    const container = document.getElementById('produce-container');
    container.innerHTML = ''; // Clear current products
    
    const filteredItems = produceItems.filter(item => item.cat === category);

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const produceDiv = document.createElement('div');
            produceDiv.classList.add('produce-item');

            produceDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>${item.price}</strong></p>
                <button class="btn">Buy Now</button>
            `;
            
            container.appendChild(produceDiv);
            produceDiv.querySelector('.btn').addEventListener('click', function() {
                addToCart(item);  // Pass the actual item instead of index
            });
        });
        
    } else {
        container.innerHTML = '<h3>No products available for this category.</h3>';
    }
}

const categoriesList = [
    {cat:"veg"},
    {cat:"eggs"},
    {cat:"cat3"},
    {cat:"cat4"},
    {cat:"all"},
];
function displayCategories(){
    const container = document.getElementById('categories');
    categoriesList.forEach(item => {
        const producespan = document.createElement('span');
        producespan.classList.add(`${item.cat}`,'cat-item');
        producespan.innerHTML = `${item.cat}`;
        if(item.cat==="all"){
            producespan.classList.add('active');
        }
        producespan.addEventListener('click',function(){
            const allSpans = document.querySelectorAll('.cat-item');
            allSpans.forEach(span => span.classList.remove('active'));
            producespan.classList.add('active');
            if(item.cat==="all")displayProduce();
            else filterProductsByCategory(item.cat);
        });
        container.appendChild(producespan);
    });
}
document.getElementById('cart-icon').addEventListener('click', function() {
    const cartMenu = document.getElementById('cart-menu');
    cartMenu.classList.toggle('active'); 
    
    //cartMenu.style.display = cartMenu.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', function(event) {
    const cartMenu = document.getElementById('cart-menu');
    const cartIcon = document.getElementById('cart-icon');

    // If the click is outside the cart menu and cart icon, hide the cart menu
    if (!cartMenu.contains(event.target) && !cartIcon.contains(event.target)) {
        cartMenu.classList.remove('active'); // Slide out the cart
    }
});
function addToCart(item) {
    // cart.push(item);
    // updateCartIcon();
    // displayCartItems();
    // alert(`${item.name} has been added to your cart!`);
    const existingItem = cart.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
        existingItem.quantity++; // Increase quantity if item already exists in the cart
    } else {
        item.quantity = 1; // Add item with initial quantity of 1
        cart.push(item);
    }

    updateCartIcon();
    displayCartItems();
}
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCartIcon();
    displayCartItems();
}
function updateCartIcon() {
    const cartCount = document.getElementById('cart-count');
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQuantity;
}
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = ''; // Clear current items

    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        const price = parseFloat(item.price.replace('$', '').replace('/ kg', '').replace('/ dozen', ''));
        total += price * item.quantity;

        itemDiv.innerHTML = `
            <div class="item-details">
                <p><strong>${item.name}</strong></p>
                <p>${item.price} * ${item.quantity} = 
                ${(price * item.quantity).toFixed(2)}</p>
            </div>
            <div class="item-actions">
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });

    // Update total price in the cart menu
    cartTotal.textContent = `$${total.toFixed(2)}`;
    // const cartItemsContainer = document.getElementById('cart-items');
    // const cartTotal = document.getElementById('cart-total');
    // cartItemsContainer.innerHTML = ''; // Clear current items

    // let total = 0;

    // cart.forEach(item => {
    //     const itemDiv = document.createElement('div');
    //     itemDiv.classList.add('cart-item');
    //     itemDiv.innerHTML = `
    //         <p>${item.name} - ${item.price}</p>
    //     `;
    //     cartItemsContainer.appendChild(itemDiv);

    //     // Calculate total price
    //     const price = parseFloat(item.price.replace('$', '').replace('/ kg', '').replace('/ dozen', ''));
    //     total += price;
    // });

    // // Update total price in the cart menu
    // cartTotal.textContent = `$${total.toFixed(2)}`;
}
function clearCart(){
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    cartTotal.textContent = '0.00$';
    cart = [];
    cartCount.textContent = cart.length;
}
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Proceeding to checkout!');
    clearCart();
});
document.addEventListener('DOMContentLoaded', () => {
    displayCategories();
    displayProduce();
});