// Sample data for produce items
const menuToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Add event listener to the menu-toggle button
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    });
    var modal = document.getElementById('loginSignupModal');
var loginBtn = document.getElementById('loginBtn');
var closeBtn = document.getElementsByClassName('close')[0];
var signupLink = document.getElementById('signupLink');
var loginLink = document.getElementById('loginLink');
var loginForm = document.getElementById('loginForm');
var signupForm = document.getElementById('signupForm');
    // Function to open the modal
function openModal() {
    modal.style.display = 'flex';
}

// Open modal when login button is clicked
loginBtn.onclick = openModal;

closeBtn.onclick = function() {
    modal.style.display = 'none';
    switchForm(signupForm,loginForm);
    const inputs = modal.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
}

// Close modal if clicked outside the content area
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        switchForm(signupForm,loginForm);
    const inputs = modal.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    }
}
function switchForm(hideForm, showForm) {
    hideForm.style.display = 'none';
    showForm.style.display = 'block';
}

// Show signup form when clicking 'Sign up here'
signupLink.onclick = function(event) {
    event.preventDefault();
    switchForm(loginForm, signupForm);
}

// Show login form when clicking 'Login here'
loginLink.onclick = function(event) {
    event.preventDefault();
    switchForm(signupForm, loginForm);
}
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
