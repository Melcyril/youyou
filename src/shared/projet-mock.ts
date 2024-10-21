// projet-mock.ts
import {Projet} from './projet'
let lastId = 0;
export const PROJETS : Projet[]=[
    {
        id: lastId,
        titre: "GDM Art",
        image: "assets/Projet_roll.png",
        technologie: "HTML - css - javascript",
        description: "(Stage) Site statique présentant les oeuvres de l'artiste avec diaporama",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2005
    },
    {
        id: ++lastId,
        titre: "Restaurant",
        image: "assets/compute.png",
        technologie: "Java - MySQL",
        description: "(Exercice) Création d'une base de données."
        +"Sous Java Swing, Création d'une fenetre avec supression, modification et ajout des clients pour un restaurant",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2017
    },
    {
        id: ++lastId,
        titre: "Réalisation d'un morpion",
        image: "assets/compute.png",
        technologie: "Java Fx",
        description: "(Exercice) Création d'un morpion sous JavaFx",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2017
    },
    {
        id: ++lastId,
        titre: "Jeu du 21",
        image: "assets/compute.png",
        technologie: "Java",
        description: "(Exercice) Jeu du 21 à 2 joueurs ou contre l'IA."
        +" Récapitulatif des scores dans un fichier avec une extension txt",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2017
    },
    {
        id: ++lastId,
        titre: "Boutique en PHP",
        image: "assets/compute.png",
        technologie: "PHP - MySQL - HTML - CSS - Bootstrap - JQuery",
        description: "(Exercice) Création d\'une boutique en ligne de produits -"
        +" Formulaire d'inscription et de connexion -"
        +" Possibilité pour l'utilisateur de filtrer les produits et d'établir une recherche -"
        +" L'utilisateur peut ajouter un produit dans son panier -"
        +" Paiment autorisé si l'utilisateur est connecté.",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2000
    },
    {
        id: ++lastId,
        titre: "API Node.js",
        image: "assets/Projet_roll.png",
        technologie: "API avec Node JS",
        description: "(Exercice) Gestion d'un Hotel - Création d'une API de reservation de chambre d\'hôtel -"
        +" Les tests réalisés sont fait à l'aide du logiciel Insomnia.",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2005
    },
    {
        id: ++lastId,
        titre: "Site Web SRVideo",
        image: "assets/Projet_roll.png",
        technologie: "PHP - MySQL - HTML - Boostrap - CSS - JS - JQuery",
        description: "(Stage) Application web en PHP pour SRVidéo -"+
        +" Formulaire d'inscription et de connexion sécurisé pour l'utilisateur -"
        +" Stockage du mot de passe crypté -"
        +" Possibilité pour l'administrateur d\'"
        +"ajouter, de modifier et de supprimer des publications multimedia.",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2019
    },
    {
        id: ++lastId,
        titre: "Association Blb",
        image: "assets/Projet_roll.png",
        technologie: "C#.net - Tsql - Ajax - HTML - Boostrap - css - JS - JQuery",
        description: "(Stage) Application Web sur Visual Studio en C# asp.net pour l'association BLB -"
        +" BDD sous SqlServer -"
        +" Formulaire d'inscription et de connexion sécurisé -"
        +" Possibilité pour l'administrateur de personnaliser son message d'accueil -"
        +" Ajouter, modifier et supprimer ses évènements antèrieurs ou futures, des publications et du contenu multimedia -"
        +" Les inscris peuvent faire des propositions de contenu et sera mis en ligne avec la validation de l'admistrateur.",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2020
    },    
    {
        id: ++lastId,
        titre: "Application Mobile météo",
        image: "assets/compute.png",
        technologie: "API - Java -Android Studio",
        description: "(Exercice) Application mobile sous Android studio utilisant une API météo existante"
        +" avec possibilité pour l'utilisateur de choisir la ville pour voir la météo",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2022
    },
    {
        id: ++lastId,
        titre: "Projet de formation Epsi",
        image: "assets/compute.png",
        technologie: "SpringBoot - Angular - Android Studio",
        description: "Projet de simulation réalisé pour une école. API réalisé sous Springboot - Base de donnée sous DBeaver -"
        +" application Web sous angular permettant aux élèves de voir les date d examens et de voir leurs notes."
        +" Possibilité aux professeurs d'ajouter des corrections et des notes aux examens -"
        +" Application mobile sous Android tudio permettant aux surveillants de lancer un chronomètre pour chaque examen",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2022
    },
    {
        id: ++lastId,
        titre: "Portefolio",
        image: "assets/ordi.jpg",
        technologie: "Angular - ThreeJS",
        description: "Application Web avec présentation de mes compétences -"
        +" Presentation de mes projets -"
        +" Presentation de mes loisirs -"
        +" Formulaire pour me contacter",
        lien: "https://melcyril.github.io/youyou/",
        showDetail: false,
        detailsVisible: false,
        date:2022
    },
    // Ajoutez d'autres projets ici...
];