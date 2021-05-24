
    
    

let form = document.getElementById('Form');
form.addEventListener('submit', function() {

    // check champs du formulaire
    if (!document.getElementById('firstName').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        // Création d'une div contenant l'alerte
        function alertFirstname (event) {
            let warning = document.createElement("div");
            const firstWarning = document.getElementById("firstWarning");
            firstWarning.appendChild(warning);
            warning.classList.add("font-weight-bold", "text-danger");
            warning.textContent = "Ce champs ne doit contenir que des lettres";
            event.preventDefault();
        }
        //Appel de la fonction
        alertFirstname ()
    } 
    if (!document.getElementById('lastName').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs nom contient des erreurs');
        window.location ='panier.html';
    }
    if (!document.getElementById('address').value.match(/^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' ]+))$/)){
        alert('Le champs adresse contient des erreurs');
        window.location ='panier.html';
    }
    if (!document.getElementById('city').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs ville contient des erreurs');
        window.location ='panier.html';
    }
    if (!document.getElementById('email').value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        alert('Le champs email contient des erreurs');
        window.location ='panier.html';
    }

    else {
    alert('formulaire envoyé!');
    }

})
