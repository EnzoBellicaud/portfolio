<template>
  <div>
    <h2>
      Exploitation des techniques pour la collecte d’images
      pour les tâches de classification et de détection d’objets
    </h2>
    <ListePuce :mots="['vision par ordinateur', 'collecte d’images',
    'classification d’objets', 'détection d’objets','traitement d’images',
    'sciences des données', 'apprentissage machine']"/>
    <ListePuce :mots="['Python', 'Selenium','YoloWorld', 'Grounding Dino and SAM']"/>
    <div>
      <h3>Intro</h3>
      <p>
        Ce projet est une application de web scraping pour la collecte d’images pour les tâches de classification et de détection d’objets.
      </p>
    </div>
    <div>
      <div>
        <h3>Réaliser un développement d’application</h3>
        <ul>
          Développer, c'est-à-dire concevoir, coder, tester et intégrer, une solution informatique pour un client signifie :
          <li>respecter les besoins décrits par le client</li>
          <li>appliquer les principes algorithmiques</li>
          <li>veiller à la qualité du code et à sa documentation</li>
          <li>choisir les ressources techniques appropriées</li>
        </ul>
      </div>
      <div class="container row">
        <p>Sur l'écran d'accueil on retrouve la majorité du cahier des charges. L'objectif principal étant d'avoir une possibilité de recherche ainsi que d'analyse hautement paramétrable</p>
        <ImageWithBubbles
            class="image"
            :imageSrc="images[2].src"
            :bubbles="images[2].bubbles"
        />
      </div>
      <div class="container row-reverse">
        <p>Si l'utilisateur souhaite controler les résultats, il arrive alors sur cette, nouvelle vue (pour cet exemple, les résultats ont été obtenus avec les paramètres configuré dans le screenshot juste au dessus</p>
        <ImageWithBubbles
            class="image"
            :imageSrc="images[0].src"
            :bubbles="images[0].bubbles"
        />
      </div>
      <div class="container row">
        <div class="description">
          <h3>Conduire un projet</h3>
          <p>
            Afin de conduire au mieux le projet, je maintenais un journal quotidien des tâches que je réalisais, ainsi que celle qui me restait.
            Le suivi du projet ce faisait également au travers de commit régulier ainsi qu'une séparation entre branche dev et main afin de toujour garantir une version à jour du logiciel.
          </p>
        </div>
        <img src="@/assets/stageWebScraping/journalSuivi1.png" alt="screenshot d'une TODO liste" class="illustration">
      </div>
    </div>
  </div>

</template>
<script>

import ListePuce from "@/components/ListePuce.vue";
import ImageWithBubbles from "@/components/ImageWithBubbles.vue";

export default {
  name: 'stageWebScraping',
  components: {
    ListePuce,
    ImageWithBubbles
  },
  data() {
    return {
      images: [
        {src: 'stageWebScraping/galleryPage1.png', bubbles : [
            {top: '3%', left: '0.2%', description: 'Menu Option: Ce menu permet de choisir le répertoire de téléchargement des images, la taille des images et le nombre d\'images à afficher dans la gallerie. Il est aussi possible d\'utiliser des raccourcis pour avoir accès à ces paramètres.' },
            {top: '8%', left: '50%', description: 'Filtres : trois filtres sont disponibles, un par année, un par mot de recherche et un par source' },
            {top: '15%', left: '50%', description: 'Affichage des options : les options selectionnées par l\'utilisateur sont affichées ici' },
            {top: '55%', left: '50%', description: "Gallerie d'image : Les images trouvées par le scraper sont affichées ici" },
            {top: '91%', left: '50%', description: 'Option de sauvegarde: les images peuvent être sauvargées dans le répertoire de téléchargement, dans un csv, dans les deux ou dans aucun des deux (les images seront donc perdues)' },
            {top: '95%', left: '40%', description: "Retour à l'écran précédent : permet de revenir à l'écran de départ afin de relancer une recherche" },
            {top: '95%', left: '52%', description: 'Choix de l\'outil de classification: les images peuvent être classée à la main dans le cas où l\'utilisateur n\'est pas satisfait de la classification automatique ou qu\'il ne l\'a pas activée. Pour cela il suffit de choisir une classe et de cliquer sur les images que l\'on veut inscrire dans cette classe' },
          ]
        },
        {src: 'stageWebScraping/galleryPage2.png', bubbles : [
            {top: '10%', left: '20%', description: 'Description 1' },
            {top: '30%', left: '40%', description: 'Description 2' }
          ]
        },
        {src: 'stageWebScraping/startingPage1.png', bubbles : [
            {top: '10%', left: '24%', description: 'Choix des sources de recherche'},
            {top: '23%', left: '24%', description: 'Ajout de mot de recherche' },
            {top: '23%', left: '36%', description: 'Activation de classe identique aux mots de recherche' },
            {top: '38%', left: '24%', description: 'Liste des mots de recherche'},
            {top: '59%', left: '15%', description: 'Période de recherche'},
            {top: '59%', left: '30%', description: 'Quantité de résultats de recherche pour chaque mots et chaque année'},
            {top: '69%', left: '23%', description: 'Activation de l\'ajout d\'images locales pour les classer'},
            {top: '13%', left: '75%', description: 'Optimisation des performances: Le nombre de processus améliore la vitesse de l\'ia tandis que le nombre de thread améliore la vitesse du scrapper'},
            {top: '24%', left: '75%', description: 'Ajout des classes, ce champs est désactivé lorsque le bouton "Sames classes" est actif'},
            {top: '30%', left: '75%', description: 'Liste des classes'},
            {top: '40%', left: '75%', description: 'Choix de l\'ia et de ses paramètres (sa précision)'},
            {top: '77%', left: '30%', description: 'Bouton pour lancer les recherches. Celui-ci affiche "loading" après le lancement du programme'},
            {top: '77%', left: '47%', description: 'Permet de choisir si l\'utilisateur veut controler les résultats'},
            {top: '77%', left: '66%', description: 'Permet de choisir si l\'utilisateur veut que l\'ia classe les résultats'},

          ]
        },
        {src: 'stageWebScraping/waitingPage1.png', bubbles : [
            {top: '10%', left: '20%', description: 'Description 1' },
            {top: '30%', left: '40%', description: 'Description 2' }
          ]
        },
        {src: 'stageWebScraping/waitingPage2.png', bubbles : [
            {top: '10%', left: '20%', description: 'Description 1' },
            {top: '30%', left: '40%', description: 'Description 2' }
          ]
        },
        {src: 'stageWebScraping/waitingPage3.png', bubbles : [
            {top: '10%', left: '20%', description: 'Description 1' },
            {top: '30%', left: '40%', description: 'Description 2' }
          ]
        }
      ],
    };
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  width: 80dvi;
  margin: auto;
}

.row{
  flex-direction: row;
}

.row-reverse {
  flex-direction: row-reverse;
}

.description {
  width: 40%;
  margin : 10px
}

.illustration {
  width: 50%;
}

.image {
  width: 80%;
  margin: 20px auto;
  display: block;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }


  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.2em;
  }

  .image {
    width: 100%;
  }
}
</style>