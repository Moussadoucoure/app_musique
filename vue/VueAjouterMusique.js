class VueAjouterMusique{
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-musique").innerHTML;
        this.actionAjouterMusique = null;
    }

    initialiserActionAjouterMusique(actionAjouterMusique){
        this.actionAjouterMusique = actionAjouterMusique;
    }

    afficher() {
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    console.log("Formulaire chargé : ", document.getElementById("formulaire-ajouter")); // Log pour vérifier l'existence du formulaire
    document.getElementById("formulaire-ajouter").addEventListener("submit", evenement => this.enregistrer(evenement));
}

    enregistrer(evenement){
        console.log("Enregistrement déclenché");
        evenement.preventDefault();

        let nom = document.getElementById("musique-nom").value;
        let album = document.getElementById("musique-album").value;
        let auteur = document.getElementById("musique-auteur").value;
        let duree = document.getElementById("musique-duree").value;
        let type = document.getElementById("musique-type").value;
        console.log("Valeur saisie pour le nom :", nom);
        this.actionAjouterMusique(new Musique(nom, album, auteur, duree, type, null))
        console.log("woked : " + nom, album, auteur, duree, type);
    }
}
