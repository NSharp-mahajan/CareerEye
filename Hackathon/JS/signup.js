document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".signup-form form");
    const loginForm = document.querySelector(".login-form form");

    // Signup event
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = signupForm.querySelector("input[placeholder='Enter your name']").value;
        const email = signupForm.querySelector("input[placeholder='Enter your email']").value;
        const password = signupForm.querySelector("input[placeholder='Enter your password']").value;

        if (name && email && password) {
            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Signup successful! You can now log in.");
            document.getElementById("flip").checked = false;
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Login event
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = loginForm.querySelector("input[placeholder='Enter your email']").value;
        const password = loginForm.querySelector("input[placeholder='Enter your password']").value;
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert(`Welcome back, ${storedUser.name}! Login successful.`);
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
