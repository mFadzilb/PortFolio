document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const messageReceivedDiv = document.getElementById('messageReceived');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Simulate form submission (you can replace this with actual form submission logic)
      setTimeout(function () {
        // Show the "Message Received" notification
        messageReceivedDiv.classList.remove('d-none'); // Make the message visible
  
        // Optionally, reset the form after submission
        form.reset();
      }, 500); // Simulate a delay (e.g., 500ms) for the submission process
    });
  });