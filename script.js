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
  let currentIndexC = 0;
  const totalSlides = slides.length;

  function showNextSlide() {
    currentIndexC = (currentIndexC + 1) % totalSlides;
    content.style.transform = `translateX(-${currentIndexC * 100}%)`;
  }

  // Démarrer le carrousel avec un délai de 3 secondes entre chaque transition
  setInterval(showNextSlide, 3000); // 3 secondes
  
  document.addEventListener("DOMContentLoaded", () =>{
    pannier = document.getElementById("pannier")
    const body = document.body
    const targetPage = "../html/mon-pannier.html"
    if (body.clientWidth >= 700) {
      if (pannier) {
        pannier.removeAttribute("target");
        pannier.removeAttribute("href")
        console.log("target attribute removed")
        iframe = document.createElement("iframe")
        iframe.src = targetPage
        iframe.id = "myIframe"
        iframe.style.width = "32%"
        body.insertBefore(iframe , body.firstChild)
      }
      
    } else {
      console.log("la largeur est inférieure à 700px")
    }
  })
  
  const navBar = document.querySelector(".nav-bar")
    window.addEventListener("scroll", (e) =>{
      if (window.scrollY > 300) {
        navBar.style.bottom = "-100px"
      }else{
        navBar.style.bottom = 0
      }
    }) 


const searchBar = document.getElementById("searchBar");
const placeholderValues = ["Vous cherchez", "Iphone15", "Samsung", "PS5, PS4 sony", "Gamming", "Computer", "Casquette"];
let currentIndex = 0;
const delaiEnMs = 3000; // 3 secondes

// Appliquer la transition CSS une seule fois
searchBar.style.transition = "5s ease";

function updatePlaceholder() {
  // Récupère la valeur de placeholder actuelle
  const placeholderValue = placeholderValues[currentIndex];
  
  // Met à jour l'attribut placeholder
  searchBar.placeholder = placeholderValue;
  
  // Affiche la nouvelle valeur dans la console
  console.log(`Le nouveau placeholder est : ${placeholderValue}`);
  
  // Incrémente l'index pour la prochaine itération
  currentIndex++;
  
  // Si nous avons atteint la fin du tableau, nous recommençons au début
  if (currentIndex >= placeholderValues.length) {
    currentIndex = 0;
  }
}

// Appelle la fonction une première fois pour initialiser le placeholder
updatePlaceholder();

// Lance l'intervalle pour appeler la fonction toutes les 3 secondes
setInterval(updatePlaceholder, delaiEnMs);
