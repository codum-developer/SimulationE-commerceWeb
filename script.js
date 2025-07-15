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
