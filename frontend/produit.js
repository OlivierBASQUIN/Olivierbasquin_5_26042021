
//utilisation de la propriété params pour cibler l'id
const params = new URLSearchParams(window.location.search);

//Utilisation de l'id du produit sélectionné dans le fetch
fetch(`http://localhost:3000/api/cameras/${params.get('id')}`)
    .then(response => {
        if (response.ok) {
            return data = response.json()
        } else {
            Promise.reject(response.status);
        };
    })
    .then(data => {

        //--variable prix pour le diviser par 100
        let priceProdUnit = data.price / 100;

        //--variable vide + boucle pour créer le select qui accueille les lenses
        let lens = "";

        data.lenses.forEach(lentille => {
            lens += `<option value="${lentille}">${lentille}</option>`;
        });

        //--Ecriture du HTML dans le DOM
        const inHtml = document.getElementById('main');
        inHtml.innerHTML += `
                <div class="card card-body col-12 col-lg-8 mx-auto">
                    <img alt="Photo du ${data.name}" class="card-image-top img-fluid photo" src="${data.imageUrl}">
                </div>
                <div class="card col-12 col-lg-8 pb-3 mt-4 mx-auto">
                    <h2 class="card-title title text-center my-2">${data.name}</h2>
                    <p>${data.description}</p>
                    <form class="p-5">
                        <label for="quantiteProduit">Quantité:</label>
                        <input id ="quantiteProduit" type="number" min="1" max="9" value="1"/>
                        <div class="my-1 pb-4 mt-4">
                            <label for="formCustomSelect">Objectifs</label>
                            <select class="custom-select" id="formCustomSelect">${lens}</select>        
                        </div>
                        <p class="text-center"><strong>Prix total</strong> : <span id="totalPrice">${priceProdUnit}</span> €</p>
                        <button id="btnAjout" type="button" class="btn btn-success col mt-3">Ajouter au panier</button>
                    </form>   
                </div>
                `;


        //--appel la fonction de calcul pour le prix total
        calculePrice(priceProdUnit)

        //--On écoute le bouton Ajouter au panier
        const btnAjout = document.getElementById('btnAjout');

        btnAjout.addEventListener('click', () => {
            ajoutLocalStorage()
        });

        //--On prend les données voulues et on les stocke dans un objet
        function ajoutLocalStorage() {

            const lensElm = document.getElementById('formCustomSelect');
            const quantityElm = document.getElementById('quantiteProduit');

            let objetTab = {
                _id: data._id,
                image: data.imageUrl,
                name: data.name,
                lens: lensElm.value,
                quantite: quantityElm.value,
                totalPrice: ((data.price * parseInt(quantityElm.value)) / 100),
                price: data.price / 100
            };

            //--ajout au LocalStorage
            let inBasket = JSON.parse(localStorage.getItem("basket"));

            // si je n'ai pas de panier je dois dire que c'est un tableau, et j'ajoute de la même façon
            if (!inBasket) {
                let inBasket = [];
                inBasket.push(objetTab);
                localStorage.setItem("basket", JSON.stringify(inBasket));
                window.location.href = 'panier.html';

                // sinon si j'ai un panier, je vérifie que je n'ai pas déjà mon objet dans le panier   
            } else if (!inBasket.some(p => p._id === objetTab._id)) {

                // avant d'ajouter 
                inBasket.push(objetTab);
                localStorage.setItem("basket", JSON.stringify(inBasket));

                // sinon si je l'ai déjà dans le panier alors j'enlève le précédent produit pour ajouter le nouveau avec la nouvelle quantité
            } else {
                const newBasket = inBasket.filter(p => p._id !== objetTab._id)
                newBasket.push(objetTab);
                localStorage.setItem("basket", JSON.stringify(newBasket));
            };

            window.location.href = 'panier.html';
        };
    });

//--- Fonction pour le calcul du prix total en fonction de la quantité
function calculePrice(priceProdUnit) {
    let quantites = document.getElementById('quantiteProduit');
    quantites.addEventListener('change', (event) => {
        const result = document.getElementById('totalPrice');
        result.textContent = `${priceProdUnit}` * `${event.target.value}`;
    });
};
