document.addEventListener('DOMContentLoaded', function() {
    // Simulated database for storing user information
    const userDatabase = {};

    // Registration form submission
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;

            // Password validation
            const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if (!passwordPattern.test(password)) {
                alert('Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.');
                return;
            }

            // Email domain validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.(org|edu|com|in)$/;
            if (!emailPattern.test(email)) {
                alert('Email must end with .org, .edu, .com, or .in');
                return;
            }

            // Store user information
            userDatabase[email] = { name: name, password: password };
            console.log('Registered user:', userDatabase[email]);  // Debugging log

            // Display confirmation message
            const registerMessage = document.getElementById('register-message');
            if (registerMessage) {
                registerMessage.textContent = 'Registration successful! Welcome, ' + name + '.';
            }
        });
    }

    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Email domain validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.(org|edu|com|in)$/;
            if (!emailPattern.test(email)) {
                alert('Email must end with .org, .edu, .com, or .in');
                return;
            }

            // Check user information
            const user = userDatabase[email];
            console.log('Login attempt for user:', user);  // Debugging log
            console.log('Provided email:', email);
            console.log('Provided password:', password);
            if (user && user.password === password) {
                // Display login message
                const loginMessage = document.getElementById('login-message');
                loginMessage.textContent = 'Login successful! Welcome back, ' + user.name + '.';
            } else {
                alert('Invalid email or password.');
            }
        });
    }

    // Job application form submission
    const applicationForm = document.getElementById('job-application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const experience = document.getElementById('experience').value;
            const education = document.getElementById('education').value;
            const resume = document.getElementById('resume').files[0];
            const coverLetter = document.getElementById('cover-letter').value;

            // Email domain validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.(org|edu|com|in)$/;
            if (!emailPattern.test(email)) {
                alert('Email must end with .org, .edu, .com, or .in');
                return;
            }

            // Display confirmation message
            const confirmationMessage = document.getElementById('confirmation-message');
            confirmationMessage.textContent = 'Application submitted successfully! We will contact you soon.';
        });
    }

    // Spotlight effect
    const spotlight = document.createElement('div');
    spotlight.classList.add('spotlight');
    document.body.appendChild(spotlight);

    document.addEventListener('mousemove', function(e) {
        spotlight.style.backgroundPosition = `${e.pageX}px ${e.pageY}px`;
    });

    // Add light ray effect
    const lightRay = document.createElement('div');
    lightRay.classList.add('light-ray');
    document.body.appendChild(lightRay);
});
