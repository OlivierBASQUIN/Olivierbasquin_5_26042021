//Création des cards en prenant les données de l'API
function createCardCameras(cameras) {
    let divGlobalCameras = document.createElement("div");
    const cardBlock = document.getElementById("card-block");
    cardBlock.appendChild(divGlobalCameras);
    divGlobalCameras.classList.add("block-bulles", "row-cols-1", "row-cols-lg-3", "d-flex", "flex-wrap", "justify-content-around", "align-items-around", "shadow", "my-4", "px-5");
    
    for (let i = 0; i < cameras.length; i++) {

        // console.log (cameras[2])

        let divParent = document.createElement("div");
        divGlobalCameras.appendChild(divParent);
        divParent.classList.add("card", "col", "m-4", "pt-3");


        // Création des élements images et div avec la class card body, enfants de divParent 
        let imageCamera = document.createElement("img");
        divParent.appendChild(imageCamera);
        imageCamera.classList.add("card-image-top", "photo", "img-fluid");
        imageCamera.src = cameras[i].imageUrl;

        let divCardBody = document.createElement("div");
        divParent.appendChild(divCardBody);
        divCardBody.classList.add("card-body", "text-center", "px-0", "d-flex", "flex-column", "justify-content-between");


        // Création des éléments enfants de divCardBody
        let titleCamera = document.createElement("h3");
        divCardBody.appendChild(titleCamera);
        titleCamera.classList.add("card-title", "title");
        titleCamera.textContent = cameras[i].name;

        let descriptionCamera = document.createElement("p");
        divCardBody.appendChild(descriptionCamera);
        descriptionCamera.classList.add("description", "text-justify");
        descriptionCamera.textContent = cameras[i].description;

        // Création d'une div englobant prix et bouton
        let divLinkPrice = document.createElement("div");
        divCardBody.appendChild(divLinkPrice);
        divLinkPrice.classList.add("d-flex", "flex-row", "justify-content-between");

        // Création du prix 
        let priceCamera = document.createElement("p");
        divLinkPrice.appendChild(priceCamera);
        priceCamera.classList.add("price", "my-2", "font-weight-bold");
        priceCamera.textContent = cameras[i].price + ' €';

        let linkProduct = document.createElement("a");
        divLinkPrice.appendChild(linkProduct);
        createButtonLinkProduct(linkProduct);
    }
}

//Création du bouton de redirection (URL à définir)
function createButtonLinkProduct(linkProduct) {
    let buttonBuy = document.createElement("button");
    linkProduct.appendChild(buttonBuy);
    buttonBuy.classList.add("btn", "btn-warning", "block-right");
    // Ajout texte au bouton
    buttonBuy.textContent = "Voir";
}

//Appel de l'API pour récupérer les données de chaques articles disponibles
async function getCameras() {
    try {
        let response = await fetch("http://localhost:3000/api/cameras");
        if (response.ok) {
            let cameras = await response.json();
            createCardCameras(cameras);
        } else {
            console.error('Retour du serveur : ', response.status)
        }
    } catch (e) {
        console.log(e);
    }
}


//Appel de la fonction
getCameras()