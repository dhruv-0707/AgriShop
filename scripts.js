// Sample data for produce items
const menuToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Add event listener to the menu-toggle button
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    });

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
            <a href="#" class="btn">Buy Now</a>
        `;

        container.appendChild(produceDiv);
    });
}

// Sample data for harvest calendar
const harvestCalendar = [
    {
        month: 'January',
        produce: ['Kale', 'Leeks']
    },
    {
        month: 'February',
        produce: ['Broccoli', 'Cauliflower']
    },
    {
        month: 'March',
        produce: ['Spinach', 'Lettuce']
    },
    // Add more months and produce as needed
];

// Function to display harvest calendar
function displayCalendar() {
    const calendarContainer = document.getElementById('calendar-container');

    harvestCalendar.forEach(item => {
        const calendarDiv = document.createElement('div');
        calendarDiv.classList.add('calendar-item');

        calendarDiv.innerHTML = `
            <h4>${item.month}</h4>
            <p>${item.produce.join(', ')}</p>
        `;

        calendarContainer.appendChild(calendarDiv);
    });
}

// Event listener to load content
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('produce-container')) {
        displayProduce();
    }
    if (document.getElementById('calendar-container')) {
        displayCalendar();
    }
});
