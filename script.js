document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    const errors = document.querySelectorAll("small");
    errors.forEach((error) => error.classList.remove("active"));

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let isValid = true;

    // Validation rules
    if (fullName.length < 5) {
        document.getElementById("nameError").textContent = "Name must be at least 5 characters.";
        document.getElementById("nameError").classList.add("active");
        isValid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        document.getElementById("emailError").classList.add("active");
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone) || phone === "1234567890") {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
        document.getElementById("phoneError").classList.add("active");
        isValid = false;
    }

    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters and cannot be 'password' or your name.";
        document.getElementById("passwordError").classList.add("active");
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        document.getElementById("confirmPasswordError").classList.add("active");
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
        // Here you can add logic to send form data to a server
    }
});
