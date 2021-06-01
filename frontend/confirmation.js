

const inHtml = document.getElementById('numCom');
const params = new URLSearchParams(window.location.search);

//je récupère mon numéro de commande
const numCommande = params.get('ncomm');

inHtml.innerHTML = numCommande;

//Ajout du prix total
const prixInHtml = document.getElementById("finalPrice");
let data = JSON.parse(localStorage.getItem("basket"));

if (localStorage.length > 0) {
    prixInHtml.innerHTML = calculPrixPanier() + " €"; //rappel fonction prix total

//-- Calcul du prix total Panier
function calculPrixPanier() {
    let totalPriceItem = data.reduce((accumulator, item) => {
        return accumulator + item.totalPrice;
    }, 0);

    return totalPriceItem;
};
}

localStorage.clear();