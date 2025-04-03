// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const submittedData = document.getElementById("submittedData");
    const backButton = document.getElementById("backButton");

    // Handle form submission
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form fields
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!firstName || !lastName || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Confirmation alert
        const confirmSubmission = confirm("Do you want to continue with the submission?");
        if (confirmSubmission) {
            // Hide the form and display submitted data
            contactForm.style.display = "none";
            submittedData.style.display = "block";

            // Display submitted data
            document.getElementById("displayFirstName").innerText = "First Name: " + firstName;
            document.getElementById("displayLastName").innerText = "Last Name: " + lastName;
            document.getElementById("displayEmail").innerText = "Email: " + email;
            document.getElementById("displayMessage").innerText = "Message: " + message;
        }
    });

    // Back button functionality
    backButton.addEventListener("click", function() {
        // Reset the form
        contactForm.reset();
        contactForm.style.display = "block";
        submittedData.style.display = "none";
    });
});
