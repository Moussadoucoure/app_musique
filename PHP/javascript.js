class MusiqueAjouterDAO{
    constructor(){
        this.listeMusique = [{nom:"Break My Soul",auteur:"Drake", type:"Hip-Hop", album:"Her Loss",duree:"3:59", id:0},
                       {nom:"Rich Flex",auteur:"Beyoncé", type:"Pop", album:"Renaissance",duree:"4:38", id:1},
                       {nom:"Sacrifice",auteur:"The Weeknd", type:"R&B", album:"Dawn FM",duree:"3:09", id:2}]

   }


   ajouter(musique) {
       if (this.listeMusique.length > 0) {
           musique.id = this.listeMusique[this.listeMusique.length - 1].id + 1;
       } else {
           musique.id = 0;
       }
       this.listeMusique.push(musique); // Use push to maintain array structure

       this.sauvegarder();
   }

}
