// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('formMessage').textContent = "Thank you for reaching out, " + name + "! We'll get back to you soon.";
        document.getElementById('formMessage').style.color = "green";
        this.reset(); // Reset the form
    } else {
        document.getElementById('formMessage').textContent = "Please fill out all fields.";
        document.getElementById('formMessage').style.color = "red";
    }
});
