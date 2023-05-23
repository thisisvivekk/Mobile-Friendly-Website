// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element
    var contactForm = document.getElementById("contactForm");
  
    // Check if the contact form element exists
    if (contactForm) {
      // Add a submmision to the form
      contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
  
        // Get the form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
  
        // Perform form validation 
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
          alert("Please fill in all fields");
          return;
        }
  
        console.log("Form submitted:");
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);
  
        // Reset the form
        contactForm.reset();
      });
    }
  });
  