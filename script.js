// menu icon and navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// visibility nung navbar
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// close ng navbar
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

//animated
const typed = new Typed ('.multiple-text', {
    strings: [ 'Frontend Developer.', 'Backend Developer.'],
    typeSpeed: 50, 
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})

//"Hire Me" button
const hireButton = document.querySelector('.btn');

//click event listener sa button
hireButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    
    // Alert
    alert("Thank you for your interest! Please contact me at criezesager@gmail.com.");
});

// Select the "Read More" button
const readMoreButton = document.querySelector('.about-content .btn');

// Add a click event listener to the button
readMoreButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action (if it's a link)

    // Redirect to the desired URL
    window.location.href = 'https://www.w3schools.com/whatis/whatis_frontenddev.asp'; // Replace with your target URL
});

// Function to handle form submission
function setupContactForm() {
    const form = document.querySelector('.contact form'); // Select the form
    const submitButton = form.querySelector('.btn'); // Select the submit button

    // event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // Get the input values
        const fullName = form.querySelector('input[type="text"][placeholder="Full Name"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phoneNumber = form.querySelector('input[type="number"]').value;
        const subject = form.querySelector('input[type="text"][placeholder="Email Subject"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

    
        if (!fullName || !email || !phoneNumber || !subject || !message) {
            alert('Please fill out all fields.');
            return;
        }

        alert(`Thank you for your message, ${fullName}! I'll get back to you as soon as possible.`);

        form.reset();
    });
}

// contact form
setupContactForm();

