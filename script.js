var typeData = new Typed(".role", {
  strings: [
      "Developer",
      "Problem Solver",
      "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Capture form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Basic validation
  if (name && email && message) {
      alert("Thank you, " + name + ". Your message has been sent!");
      
      // Reset form
      document.getElementById("contact-form").reset();
  } else {
      alert("Please fill in all the fields!");
  }
});
