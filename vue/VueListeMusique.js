class VueListeMusique {
  constructor() {
    this.html = document.getElementById("html-vue-liste-musique").innerHTML;

    // Données par défaut pour tester l'affichage
    this.listeMusiqueDonnee = [
      { nom: "Break My Soul", auteur: "Drake", type: "Hip-Hop", album: "Her Loss", duree: "3:59", id: 0 },
      { nom: "Rich Flex", auteur: "Beyoncé", type: "Pop", album: "Renaissance", duree: "4:38", id: 1 },
      { nom: "Sacrifice", auteur: "The Weeknd", type: "R&B", album: "Dawn FM", duree: "3:09", id: 2 }
    ];
  }

  initialiserListeMusique(listeMusiqueDonnee) {
    this.listeMusiqueDonnee = listeMusiqueDonnee;
  }

  afficher() {
    // Injecter le HTML de base
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    // Sélectionner le conteneur de la liste
    let listeMusique = document.getElementById("music-item");

    // HTML initial de l'élément
    const listeMusiqueItemHTML = listeMusique.innerHTML;

    // Variable pour accumuler les éléments
    let listeMusiqueHTMLRemplacement = "";

    // Construire le HTML pour chaque musique
    for (let numeroMusique in this.listeMusiqueDonnee) {
      let listeMusiqueItemHTMLRemplacement = listeMusiqueItemHTML;

      // Remplacer les données de placeholder par les valeurs réelles
      listeMusiqueItemHTMLRemplacement = listeMusiqueItemHTMLRemplacement.replace("{Musique.nom}", this.listeMusiqueDonnee[numeroMusique].nom);
      listeMusiqueItemHTMLRemplacement = listeMusiqueItemHTMLRemplacement.replace("{Musique.album}", this.listeMusiqueDonnee[numeroMusique].album);
      listeMusiqueItemHTMLRemplacement = listeMusiqueItemHTMLRemplacement.replace("{Musique.type}", this.listeMusiqueDonnee[numeroMusique].type);
      listeMusiqueItemHTMLRemplacement = listeMusiqueItemHTMLRemplacement.replace("{Musique.duree}", this.listeMusiqueDonnee[numeroMusique].duree);
      listeMusiqueItemHTMLRemplacement = listeMusiqueItemHTMLRemplacement.replace("{Musique.auteur}", this.listeMusiqueDonnee[numeroMusique].auteur);

      // Ajouter à la liste complète
      listeMusiqueHTMLRemplacement += listeMusiqueItemHTMLRemplacement;
    }

    // Injecter le HTML généré dans le conteneur
    listeMusique.innerHTML = listeMusiqueHTMLRemplacement;
  }
}
