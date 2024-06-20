document.addEventListener('DOMContentLoaded', function() {
       // Initialize AOS library
       AOS.init({
           duration: 800,
           easing: 'slide',
           once: true // Only animate once
       });
   
       // Initialize VanillaTilt for tilt effect on .about-photo element
       VanillaTilt.init(document.querySelector(".about-photo"), {
           max: 25,
           speed: 400
       });
   
       // Typed.js initialization
       var typed = new Typed('#role', {
           strings: ['Web Developer', 'App Developer', 'Photographer', 'Cinematographer'],
           typeSpeed: 100,
           backSpeed: 50,
           loop: true
       });
   
       // Particle.js configuration
       particlesJS.load('particles-js', 'particles.json', function() {
           console.log('Particles.js loaded');
       });
       
       // JavaScript for Testimonial Slider
       let currentSlide = 0;
       const slides = document.querySelectorAll('.testimonial-slide');
       const totalSlides = slides.length;
   
       function showSlide(index) {
           slides.forEach((slide, i) => {
               slide.classList.remove('active');
               if (i === index) {
                   slide.classList.add('active');
               }
           });
       }
   
       function nextSlide() {
           currentSlide = (currentSlide + 1) % totalSlides;
           showSlide(currentSlide);
       }
   
       setInterval(nextSlide, 5000); // Change slide every 5 seconds
   });
   
   // Initialize EmailJS with your User ID (public key)
   (function() {
       emailjs.init('3S9s-peWQyJQ_xbtf'); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID
   })();
   
   // Function to send email
   function sendEmail(e) {
       e.preventDefault(); // Prevent default form submission
   
       // Get form data
       const form = document.getElementById('contact-form');
   
       // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual service and template IDs
       emailjs.sendForm('service_0j4jzp6', 'template_ztee83e', form)
           .then((result) => {
               console.log('Email sent successfully:', result.text);
               alert('Message sent successfully!');
               form.reset(); // Clear form fields after successful submission
           }, (error) => {
               console.error('Failed to send email:', error.text);
               alert('Failed to send message. Please try again later.');
           });
   }
   
   // Attach submit event listener to the form
   document.getElementById('contact-form').addEventListener('submit', sendEmail);
   document.addEventListener('DOMContentLoaded', function() {
       // Smooth scrolling for navigation links
       const navLinks = document.querySelectorAll('.nav-links a');
   
       navLinks.forEach(link => {
           link.addEventListener('click', function(event) {
               // Prevent the default behavior
               event.preventDefault();
   
               // Get the target element
               const targetId = this.getAttribute('href').substring(1);
               const targetElement = document.getElementById(targetId);
   
               // Scroll to the target element smoothly
               window.scrollTo({
                   top: targetElement.offsetTop,
                   behavior: 'smooth'
               });
           });
       });
   });
   