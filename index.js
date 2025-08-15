const content = document.getElementById("Welcome");
  const slides = content.children;
  let currentIndex = 0;
  const totalSlides = slides.length;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    content.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Démarrer le carrousel avec un délai de 3 secondes entre chaque transition
  setInterval(showNextSlide, 3000); // 3 secondes





  
  document.addEventListener('DOMContentLoaded', function() {
     const images = document.querySelectorAll('img');
     images.forEach(image => {
     image.setAttribute('loading', 'lazy');
    });
    const navBarHome = document.querySelector(".nav-bar-home")
    window.addEventListener("scroll", (e) =>{
      if (window.scrollY > 150) {
        navBarHome.style.top = 0
      } else {
        navBarHome.style.top = "-70px"
        
      }
    })
  });
  