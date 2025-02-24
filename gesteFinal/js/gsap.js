// Animation du background
gsap.to("body", {
    backgroundPosition: "300% 0%",
    duration: 10,
    ease: "linear",
    repeat: -1,
    yoyo: true
});

// Animation du titre principal
gsap.from("h1", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce"
});

// Animation des éléments musicaux
gsap.to(".music-item", {
    duration: 1.5,
    opacity: 1,
    y: 0,
    stagger: 0.3,
    ease: "power3.out"
});

// Animation de l'image principale
gsap.from("img[alt='img']", {
    duration: 2,
    scale: 0,
    rotation: 360,
    opacity: 0,
    ease: "elastic.out(1, 0.3)"
});

// Animation sur le lien "ajouter"
gsap.from(".im a", {
    duration: 1.5,
    scale: 0,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 1  // Délai pour que l'animation démarre après les autres
});
// Animation de chaque image musicale
gsap.from(".image-frame img", {
    duration: 1.2,
    scale: 0.8,        // Légère réduction initiale
    opacity: 0,        // Commence invisible
    ease: "power2.out",
    stagger: 0.3       // Effet décalé entre chaque image
});

// Animation du lien "modifier"
gsap.from(".music-item a[href='modifier.html']", {
    duration: 1.2,
    y: 20,             // Départ avec un léger décalage vers le bas
    opacity: 0,
    ease: "back.out(1.5)",
    stagger: 0.5       // Décalage entre chaque lien "modifier"
});



document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".music-item", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        stagger: 0.4,
        clearProps: "opacity,transform" // Réinitialise les styles après l'animation
    });

    gsap.from(".im a", {
        duration: 1.5,
        opacity: 0,
        scale: 0.5,
        ease: "back.out(1.5)",
        delay: 1.2,
        clearProps: "opacity,transform"
    });
});
/*document.addEventListener("DOMContentLoaded", () => {
    // Animation cyclique entre rouge et blanc
    gsap.to("body", {
        backgroundColor: "#ff6347", // Rouge tomate
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1, // Répète l'animation indéfiniment
        yoyo: true, // Retourne en arrière après chaque itération (rouge -> blanc -> rouge)
    });
});*/
gsap.to("body", {
    backgroundColor: "#000000", // Changement de couleur de fond
    duration: 1.5,
    ease: "power2.inOut",
});
