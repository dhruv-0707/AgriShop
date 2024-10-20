const produceItems = [
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg'
    },
    {
        name: 'Farm Fresh Carrots',
        price: '$1.50 / kg',
        description: 'Crunchy and sweet carrots harvested this week.',
        image: 'images/carrots.jpg'
    },
    {
        name: 'Free-range Eggs',
        price: '$3.00 / dozen',
        description: 'Organic eggs from free-range chickens.',
        image: 'images/eggs.jpg'
    },
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg'
    },
    {
        name: 'Farm Fresh Carrots',
        price: '$1.50 / kg',
        description: 'Crunchy and sweet carrots harvested this week.',
        image: 'images/carrots.jpg'
    },
    {
        name: 'Free-range Eggs',
        price: '$3.00 / dozen',
        description: 'Organic eggs from free-range chickens.',
        image: 'images/eggs.jpg'
    },
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg'
    },
    {
        name: 'Farm Fresh Carrots',
        price: '$1.50 / kg',
        description: 'Crunchy and sweet carrots harvested this week.',
        image: 'images/carrots.jpg'
    },
    {
        name: 'Free-range Eggs',
        price: '$3.00 / dozen',
        description: 'Organic eggs from free-range chickens.',
        image: 'images/eggs.jpg'
    },
    {
        name: 'Organic Tomatoes',
        price: '$2.00 / kg',
        description: 'Fresh organic tomatoes from our farm.',
        image: 'images/tomatoes.jpg'
    },
   
   
    // Add more items as needed
];

// Function to display produce items
function displayProduce() {
    const container = document.getElementById('produce-container');

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
const categoriesList = [
    {cat:"cat1"},
    {cat:"cat2"},
    {cat:"cat3"},
    {cat:"cat4"},
    {cat:"cat5"},
];
function displayCategories(){
    const container = document.getElementById('categories');
    categoriesList.forEach(item => {
        const producespan = document.createElement('span');
        producespan.classList.add(`${item.cat}`,'cat-item');
        producespan.innerHTML = `${item.cat}`;
        if(item.cat==="cat1"){
            producespan.classList.add('active');
        }
        producespan.addEventListener('click',function(){
            const allSpans = document.querySelectorAll('.cat-item');
            allSpans.forEach(span => span.classList.remove('active'));
            producespan.classList.add('active');
        });
        container.appendChild(producespan);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayCategories();
    displayProduce();
});