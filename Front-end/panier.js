
    
    

let form = document.getElementById('validationCommande');
form.addEventListener('submit', function() {

    // check champs du formulaire
    if (!document.getElementById('firstName').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs nom contient des erreurs');
        window.location ='panier.html';
    } 
    if (!document.getElementById('lastName').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs prénom contient des erreurs');
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

    document.getElementByTagName("input");
    console.log(input);}