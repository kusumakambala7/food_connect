// Donation Form Submission
document.getElementById("donateForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your donation!");
    // Here you can add AJAX calls to your backend
  });
  
  // Request Form Submission
  document.getElementById("requestForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your request has been submitted!");
    // Add AJAX calls to your backend as needed
  });
  
  // Contact Form Submission
  document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent!");
    // Process the form with an AJAX call to your backend
  });