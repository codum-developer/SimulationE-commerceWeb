let nbProdDansPannier = document.getElementById("nbProdDansPannier");
let valeurInt = parseInt(nbProdDansPannier.textContent);
let ajouterAuPannierBoutons = document.querySelectorAll(".ajouterAuPannier")

ajouterAuPannierBoutons.forEach(ajouterAuPannierBouton => {

  ajouterAuPannierBouton.addEventListener("click", () => {
    valeurInt += 1
    nbProdDansPannier.textContent = valeurInt
    console.log(valeurInt)
  })
})


  const content = document.getElementById("carouselDelay");
  const slides = content.children;
  let currentIndex = 0;
  const totalSlides = slides.length;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    content.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Démarrer le carrousel avec un délai de 3 secondes entre chaque transition
  setInterval(showNextSlide, 3000); // 3 secondes