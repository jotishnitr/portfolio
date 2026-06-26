document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Premium Alert/Notification
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      
      // Reset form fields
      contactForm.reset();
    });
  }
});
