//récupération de l'id=main
const inHtml = document.getElementById('main'); 

//Appel de l'API pour récupérer les données de chaques articles disponibles
fetch('http://localhost:3000/api/cameras') 

    //Renvoie un premiere prommesse
    .then(response => { 
        if (response.ok) {
            // Si response ok, retourne un objet json           
            return response.json()
        // sinon, me retroune la cause de l'echec            
        } else {
            Promise.reject(response.status);
        };
    })
    // si response ok, renvoie d'une seconde promesse    
    .then(data => {
        // boucle pour créer du HTML dans le DOM
        data.forEach(objet => { 

            //variable prix pour le diviser par 100
            let priceProd = objet.price / 100;

            //j'injecte mon HTML avec les variables directement dans le DOM
            inHtml.innerHTML += `
                <div class="card card-body col-12 col-lg-5 mx-auto my-4">
                    <img alt="photo du ${objet.name}" class="card-image-top img-fluid photo" src="${objet.imageUrl}">
                    <h2 class="card-title title text-center my-2">${objet.name}</h2>
                    <p class="text-center font-weight-bold">${priceProd} €</p>
                    <a href="produit.html?id=${objet._id}" class="btn btn-info">En savoir plus!</a>
                </div>
                `;
        });

    }).catch((error) => {
        console.log(error);
    });