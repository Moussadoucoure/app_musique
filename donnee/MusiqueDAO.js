class MusiqueDAO {
  constructor() {
    this.listeMusique = [];
  }

  lister() {
    if (localStorage['musique']) {
      this.listeMusique = JSON.parse(localStorage['musique']).map(musique =>
        new Musique(musique.nom, musique.album, musique.auteur, musique.duree, musique.type, musique.id)
      );
    }
    return this.listeMusique;
  }

  ajouter(musique) {
    musique.id = this.listeMusique.length > 0 ? this.listeMusique[this.listeMusique.length - 1].id + 1 : 0;
    this.listeMusique.push(musique);
    this.sauvegarder();
    console.log("Liste après ajout :", this.listeMusique);
  }

  sauvegarder() {
    localStorage['musique'] = JSON.stringify(this.listeMusique);
  }
}
