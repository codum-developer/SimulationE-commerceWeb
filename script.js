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
  let dernierPosition = 0
    window.addEventListener("scroll", (e) =>{
      const positionActuelle = window.scrollY
      console.log(positionActuelle)
      if (window.scrollY > 300) {
        navBar.style.bottom = "-100px"
      } else if(positionActuelle < dernierPosition){
        navBar.style.bottom = 0
      };
      dernierPosition = positionActuelle
      console.log("dernier position " + dernierPosition)
    })
     

 const searchBar = document.getElementById("searchBar");
 
 let placeholderValue = "iphone";
 
 searchBar.placeholder = placeholderValue;