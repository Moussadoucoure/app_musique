class Application{
    constructor(window, musiqueDAO, vueListeMusique, vueAjouterMusique, vueModifierMusique){
        this.window = window;
        this.musiqueDAO = musiqueDAO;
        this.vueListeMusique = vueListeMusique;
        this.vueModifierMusique = vueModifierMusique;



        this.vueAjouterMusique = vueAjouterMusique;
        this.vueAjouterMusique.initialiserActionAjouterMusique(musique =>this.actionAjouterMusique(musique));
        this.vueModifierMusique.initialiserActionModifierArticle(musique =>this.actionModifierArticle(musique));

        this.window.addEventListener("hashchange", () => this.naviguer());

        document.addEventListener("deviceready", () => this.initialiserNavigation(), false);
        //this.naviguer();

    }
    initialiserNavigation(){
        console.log("application->initialiserNavigation");
        this.window.addEventListener("hashchange", () => this.naviguer());
        setTimeout(() => this.naviguer(), 30000);
    }
   naviguer() {
    let hash = this.window.location.hash;

    if (!hash) {
        this.vueListeMusique.initialiserListeMusique(this.musiqueDAO.lister());
        this.vueListeMusique.afficher();
    } else if (hash.match(/^#ajouter-musique/)) {
        this.vueAjouterMusique.afficher();
    } else {
        console.error("Navigation invalide :", hash);
    }
}
    actionAjouterMusique(musique) {
        this.musiqueDAO.ajouter(musique);
        this.window.location.hash = "#";
    }
}
new Application(window, new MusiqueDAO(), new VueListeMusique(), new VueAjouterMusique(),  new VueModifierMusique());
