document.getElementById('formulaire-ajouter').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    const nom = document.getElementById('musique-nom').value;
    const album = document.getElementById('musique-album').value;
    const auteur = document.getElementById('musique-auteur').value;
    const duree = document.getElementById('musique-duree').value;
    const type = document.getElementById('musique-type').value;

    // Envoyer les données au serveur via fetch
    fetch('serveur.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom: nom,
            album: album,
            auteur: auteur,
            duree: duree,
            type: type
        })
    })
        .then(response => response.json()) // Convertir la réponse en JSON
        .then(data => {
            // Afficher la réponse du serveur
            document.getElementById('resultat').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});
