// projet-mock.ts
import {Projet} from './projet'
export const PROJETS : Projet[]=[
    {
        id: 0,
        titre: "GDM Art (Stage) ",
        image: "assets/Projet_roll.png",
        technologie: "HTML - css",
        description: "Site statique présentant les oeuvres de l'artiste",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2005
    },
    {
        id: 1,
        titre: "Projet de formation",
        image: "assets/compute.png",
        technologie: "PHP - MySQL - HTML - CSS - Bootstrap - JQuery",
        description: "Boutique en ligne de produits avec panier"
        +"Formulaire d'inscription et de connexion"
        +"Possibilité pour l'utilisateur de filtrer les produits et d'établir une recherche",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2000
    },
    {
        id: 2,
        titre: "API Node.js",
        image: "assets/Projet_roll.png",
        technologie: "HTML - css",
        description: "Création d'une API Node.js gràce au modèle relationnel des données",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2005
    },
    {
        id: 3,
        titre: "SRVideo (Stage)",
        image: "assets/Projet_roll.png",
        technologie: "PHP - MySQL - HTML - Boostrap - CSS - JS - JQuery",
        description: "Application web php pour SRVidéo"+
        +"Formulaire d'inscription et de connexion"
        +" Possibilité pour l'administrateur d'"
        +"ajouter, de modifier et de supprimer des publications multimedia."
        +"Personnalisation du media",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2019
    },
    {
        id: 4,
        titre: "Association Blb",
        image: "assets/Projet_roll.png",
        technologie: "C#.net - Tsql - Ajax - HTML - Boostrap - css - JS - JQuery",
        description: "(Stage) Application Web sur Visual Studio en C# asp.net pour l'association BLB."
        +" Base de données sous SqlServer."
        +"Formulaire d'inscription et de connexion"
        +" Possibilité pour l'administrateur de personnaliser son message d'accueil,"
        +" d'ajouter, de modifier et de supprimer ses évènements antèrieurs ou futures, des publications et du contenu multimedia."
        +" Possibilité pour les personnes inscrites de faire des propositions de contenu dans le site et sera mis en ligne avec la validation de l'admistrateur ",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2020
    },    
    {
        id: 5,
        titre: "Projet de formation Epsi",
        image: "assets/compute.png",
        technologie: "SpringBoot - Angular - Android Studio",
        description: "Projet réalisé pour une école. API réalisé sous Springboot - Base de donnée sous DBeaver -"
        +" application Web sous angular permettant aux élèves de voir les date d examens et de voir leurs notes."
        +"Possibilité aux professeurs d' ajouter des corrections et des notes aux examens -"
        +" Application mobile sous Visual studio permettant aux surveillants de lancer un chronomètre pour chaque examen",
        lien: "",
        showDetail: false,
        detailsVisible: false,
        date:2022
    },
    // Ajoutez d'autres projets ici...
];