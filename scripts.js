// Sample data for produce items


const menuToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Add event listener to the menu-toggle button
    menuToggle.addEventListener('click', () => {
        
        navMenu.classList.toggle('active'); 
        // Toggle the 'active' class to show/hide the menu
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


