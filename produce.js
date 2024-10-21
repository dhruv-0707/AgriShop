const produceItems = [
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg',
        cat:'veg'
    },
    {
        name: 'Farm Fresh Carrots',
        price: '$1.50 / kg',
        description: 'Crunchy and sweet carrots harvested this week.',
        image: 'images/carrots.jpg',
        cat:'veg'
    },
    {
        name: 'Free-range Eggs',
        price: '$3.00 / dozen',
        description: 'Organic eggs from free-range chickens.',
        image: 'images/eggs.jpg',
        cat:'eggs'
    },
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg',
        cat:'veg'
    },
    {
        name: 'Farm Fresh Carrots',
        price: '$1.50 / kg',
        description: 'Crunchy and sweet carrots harvested this week.',
        image: 'images/carrots.jpg',
        cat:'veg'
    },
    {
        name: 'Free-range Eggs',
        price: '$3.00 / dozen',
        description: 'Organic eggs from free-range chickens.',
        image: 'images/eggs.jpg',
        cat:'eggs'
    },
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg',
        cat:'veg'
    },
    {
        name: 'Farm Fresh Carrots',
        price: '$1.50 / kg',
        description: 'Crunchy and sweet carrots harvested this week.',
        image: 'images/carrots.jpg',
        cat:'veg'
    },
    {
        name: 'Free-range Eggs',
        price: '$3.00 / dozen',
        description: 'Organic eggs from free-range chickens.',
        image: 'images/eggs.jpg',
        cat:'eggs'
    },
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg',
        cat:'veg',
    },
   
   
    // Add more items as needed
];

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
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
            <button class="btn">Buy Now</buttom>
            
        `;
    
        container.appendChild(produceDiv);
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

document.addEventListener('DOMContentLoaded', () => {
    displayCategories();
    displayProduce();
});