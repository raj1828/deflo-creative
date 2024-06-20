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
   });
   
   