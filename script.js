function valider() {
    // si la valeur du champ prenom est non vide
    if(document.formSaisie.prenom.value != "") {
      // alors on envoie le formulaire
      document.formSaisie.submit();
    }
    else {
      // sinon on affiche un message
      alert("Saisissez le prénom");
    }
  }