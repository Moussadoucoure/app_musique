class VueModifierMusique {
    constructor() {
        this.html = document.getElementById("html-vue-modifier-musique").innerHTML;
        this.actionModifierMusique = null;
        this.musique = null;
    }

    initialiserActionModifierMusique(actionModifierMusique) {
        this.actionModifierMusique = actionModifierMusique;
    }

    afficher(musique) {
        this.musique = musique;
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("musique-nom").value = musique.nom;
        document.getElementById("musique-album").value = musique.album;
        document.getElementById("musique-auteur").value = musique.auteur;
        document.getElementById("musique-duree").value = musique.duree;
        document.getElementById("musique-type").value = musique.type;

        document.getElementById("formulaire-modifier").addEventListener("submit", evenement => this.enregistrer(evenement));
    }

    enregistrer(evenement) {
        evenement.preventDefault();

        let nom = document.getElementById("musique-nom").value;
        let album = document.getElementById("musique-album").value;
        let auteur = document.getElementById("musique-auteur").value;
        let duree = document.getElementById("musique-duree").value;
        let type = document.getElementById("musique-type").value;

        this.actionModifierMusique(new Musique(nom, album, auteur, duree, type, this.musique.id));
    }
}

