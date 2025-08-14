const content = document.getElementById("Welcome");
  const slides = content.children;
  let currentIndex = 0;
  const totalSlides = slides.length;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    content.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  setInterval(showNextSlide, 4000);
  
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
  