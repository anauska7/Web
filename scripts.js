document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Clear any previous message
    const messageElement = document.getElementById('formMessage');
    messageElement.textContent = '';

    // Retrieve form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const gender = document.getElementById('gender').value;
    const termsChecked = document.getElementById('terms').checked;

    // Basic form validation
    if (!name || !email || !password || !gender) {
        messageElement.textContent = 'Please fill in all required fields.';
        event.preventDefault(); // Prevent form submission
    } else if (!termsChecked) {
        messageElement.textContent = 'You must agree to the terms and conditions.';
        event.preventDefault(); // Prevent form submission
    }
});
