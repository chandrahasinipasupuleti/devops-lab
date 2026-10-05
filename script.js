document
    .getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const selectedEvent = document.getElementById("event").value;

        const message = document.getElementById("message");

        if (name === "") {
            message.style.color = "red";
            message.textContent = "Please enter your name.";
            return;
        }

        if (email === "") {
            message.style.color = "red";
            message.textContent = "Please enter your email.";
            return;
        }

        if (phone === "") {
            message.style.color = "red";
            message.textContent = "Please enter your phone number.";
            return;
        }

        if (selectedEvent === "") {
            message.style.color = "red";
            message.textContent = "Please select an event.";
            return;
        }

        message.style.color = "green";
        message.textContent =
            "Registration successful! Welcome " + name + "!";
    });
