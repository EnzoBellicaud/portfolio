<template>
  <div class="content">

    <div class="titles">


      <div class="shadow-top">
        <h2>
          Application de web scraping dédiée à la collecte puis à la classification d’images
        </h2>
        <h3 >Introduction</h3>
        <div class="intro">
          <p class="soustitre">Ce projet est une application de web scraping dédiée à la collecte d’images et classification d’objets pour <span class="important">construire ou agrandir des datasets.</span></p>
          <p class="soustitre">Cette application permet de chercher <span class="important">n'importe qu'elle image sur internet</span>, on peut choisir les sources, les années ainsi que le nombre de résultats.</p>
          <p class="soustitre">La partie IA permet de <span class="important">classer les images</span> dans diverses catégories définies par l'utilisateur.</p>
          <p class="soustitre"> Je m'appuie sur des <span class="important">modèles de classification zero-shot</span> qui permettent la détection de n'importe quel type d'objet. Le choix du modèle est d'ailleur lui aussi libre. En effet, l'utilisateur peut faire un choix parmis cinq modèles pour trouver l'<span class="important">équilibre idéal entre consommation des ressources de l'ordinateur et qualité des détections</span></p>
        </div>
      </div>
    </div>

    <div>

      <div class="title-container">
        <h3 class="title">Développement d'une application</h3>
        <div class="scrolling-text-top">Respecter les besoins décrits par le client &nbsp; Appliquer les principes algorithmiques &nbsp; Veiller à la qualité du code et à sa documentation &nbsp; Choisir les ressources techniques appropriées</div>
      </div>

      <div class="container dark row">
        <div class="description">
          <p>La majorité du cahier des charges imposé se retrouve dans cet écran d'accueil.</p>
          <p>L'objectif principal était d'offrir une <span class="important">possibilité de recherche et d'analyse hautement paramétrable</span>. En effet, l'application devait&nbsp;:</p>
          <ul>
            <li>Disposer de plusieurs sources de recherche afin de multiplier les nombre de résultats possible, le défi ici est d'élaborer un script de récupération des images propre à chaque site.</li>
            <li>Pouvoir <span class="important">chercher n'importe quoi</span></li>
            <li>Contrôler les années de résultats. C'est important pour évaluer la pertinence des données lors de l'analyse de celle-ci.</li>
            <li><span class="important">Classer automatiquement les résultats</span> grâce à plusieurs modèles tout en pouvant contrôler et corriger les erreurs si besoin</li>
          </ul>
        </div>
          <ImageWithBubbles
            class="image"
            :imageSrc="images[2].src"
            :bubbles="images[2].bubbles"
        />
      </div>

      <div class="container dark row-reverse">
        <div class="description">
          <p>Si l'utilisateur souhaite contrôler les résultats, il arrive alors sur cette <span class="important">nouvelle vue.</span></p>
          <p>Pour cet exemple, les résultats ont été obtenus avec les paramètres configurés dans le screenshot juste au-dessus.</p>
          <p>Afin de garantir la modularité de l'application j'ai intégré <span class="important">des options et des filtres pour gérer l'affichage</span>. Ainsi il ne reste plus qu'à classer les images en choisissant une classe et en cliquant sur les images correspondantes !</p>
        </div>
        <ImageWithBubbles
            class="image"
            :imageSrc="images[0].src"
            :bubbles="images[0].bubbles"
        />
      </div>

      <div class="container" style="align-items: stretch; justify-content: space-evenly">
        <div class="information">
          <h4>Interface</h4>
          <div class="information-texte">
            <p>Le choix de <span class="important">Tkinter</span> pour l'interface graphique s'est imposé pour sa simplicité et sa compatibilité avec Python. Cependant, il a fallu <span class="important">adapter le design</span> pour qu'il soit plus moderne et plus intuitif.</p>
            <p>Le design a été pensé pour être <span class="important">ergonomique et intuitif</span>. Pour faciliter cela j'ai utilisé <span class="important">librairie bootstrap</span> compatible avec tkinter</p>
            <p>Par ailleur le choix même de Python était <span class="important">imposé par le cahier des charges</span>, cela simplifiait le traitement par IA par la suite</p>
          </div>
        </div>
        <div class="information">
          <h4>Scraping</h4>
          <div class="information-texte">
            <p>Le scraping est une étape cruciale pour l'application. Il a fallu <span class="important">adapter le scraper</span> pour chaque site de recherche. Pour cela j'ai utilisé <span class="important">Selenium</span> pour simuler un navigateur et intéragir avec les <span class="important">pages web dynamiques</span>. Cela s'est avéré nécessaire pour "cliquer" sur les images pour les avoir en meilleur qualité</p>
            <p>Le scraper est <span class="important">multi-threadé</span> pour accélérer la collecte des images. Cela signifie que l'on peut lancer autant de navigateur faisant des recherche que l'ordinateur le permet</p>
          </div>
        </div>
        <div class="information">
          <h4>IA</h4>
          <div class="information-texte">
            <p>La partie IA est dédiée à la <span class="important">classification des images</span>. Pour cela j'ai utilisé <span class="important">YoloWorld et Grounding DINO</span> qui sont des modèles de classification d'objets. Ces modèles sont <span class="important">zero-shot</span> ce qui signifie qu'ils peuvent détecter n'importe quel type d'objet sans avoir besoin d'entrainement préalable</p>
            <p>Pour accomplir cette détection universelle, ces modèles <span class="important">décodent les classes</span> données par l'utilisateur en information qu'ils pourront <span class="important">comparer avec les images</span> afin d'y détecter les objets</p>
            <p>De plus, la tache de classification est <span class="important">multi-procéssé</span> afin de la rendre plus rapide</p>
          </div>
        </div>
      </div>

      <div class="title-container">
        <h3 class="title">Conduire un projet</h3>
        <div class="scrolling-text-top">communiquer efficacement avec les différents acteurs d'un projet &nbsp; adopter une démarche proactive, créative et critique &nbsp;</div>
      </div>

      <div class="container dark row">
        <div class="description">
          <p>Pour assurer le suivi du projet, je tenais <span class="important">un journal quotidien</span> des tâches réalisées et de celles restant à accomplir Cette liste comprenait un <span class="important">code couleur</span> pour indiquer mon avancement. Il est ainsi simple de s'appercevoir que j'ai eu un problème avec l'implémentation du modèle anomaly clip.</p>
          <p><span class="important">Je restais agile</span> car pendant l'avancement de l'application les perspectives de ce qui était possible pouvait évoluer. Pour cela je faisais <span class="important">une démonstration deux fois par semaine</span> minimum dont une souvent le vendredi pour regarder l'avancement de la semaine.</p>
          <p>Le suivi était également effectué grâce à <span class="important">des commits réguliers</span> et une séparation entre les branches de développement (dev) et principale (main) pour <span class="important">garantir une version toujours stable du logiciel.</span></p>
        </div>
        <img src="@/assets/stageWebScraping/journalSuivi1.png"
             alt="screenshot d'une TODO liste"
             class="image"
        >
      </div>
    </div>
    <div class="shadow-bottom">
      <div>
        <h3>Conclusion</h3>
        <p class="soustitre">Cette application vise à se positionner comme un véritable <span class="important">outil de data engineering</span> en englobant la collecte et la classification d'images</p>
        <p class="soustitre">Pour servir, cette outil doit comprendre toutes les fonctionnalités dont pouvait avoir besoin le chercheur qui l'utilise. Pour cela il a fallut <span class="important">communiquer régulièrement</span> sur les directions que je devais prendre</p>
        <p class="soustitre">Cette application est encore vouée à évoluer, pour cela j'ai soigné la <span class="important">documentation du code </span> ainsi que fournit des détails sur son utilisation</p>
        <p class="soustitre">Et pour être facilement utilisable elle devait aussi être claire, il a fallu donc énormément de <span class="important">réflexion sur les scénarios d'utilisation des diverses fonctionnalités</span></p>
      </div>
      <div class="keyword">
        <span>Mots clés</span>
        <ListePuce :mots="['Python', 'Selenium', 'YoloWorld', 'Grounding Dino and SAM','vision par ordinateur', 'collecte d’images', 'classification d’objets', 'détection d’objets', 'traitement d’images', 'sciences des données', 'apprentissage machine']"/>
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
            {top: '3%', left: '0.2%', description: 'Menu Option: Ce menu permet de choisir le répertoire de téléchargement des images, la taille des images et le nombre d\'images à afficher dans la galerie. Il est aussi possible d\'utiliser des raccourcis pour accéder à ces paramètres.' },
            {top: '8%', left: '50%', description: 'Filtres : Trois filtres sont disponibles, par année, par mot de recherche et par source.' },
            {top: '15%', left: '50%', description: 'Affichage des options : Les options sélectionnées par l\'utilisateur sont affichées ici.' },
            {top: '55%', left: '50%', description: 'Galerie d\'images : Les images trouvées par le scraper sont affichées ici.' },
            {top: '91%', left: '50%', description: 'Options de sauvegarde : Les images peuvent être sauvegardées dans le répertoire de téléchargement, dans un CSV, ou dans les deux. Si aucune option n\'est choisie, les images seront perdues.' },
            {top: '95%', left: '40%', description: 'Retour à l\'écran précédent : Permet de revenir à l\'écran de départ pour relancer une recherche.' },
            {top: '95%', left: '52%', description: 'Choix de l\'outil de classification : Les images peuvent être classées manuellement si l\'utilisateur n\'est pas satisfait de la classification automatique ou ne l\'a pas activée. Il suffit de choisir une classe et de cliquer sur les images à classer.' },
          ]
        },
        {src: 'stageWebScraping/galleryPage2.png', bubbles : [
            {top: '10%', left: '20%', description: 'Description 1' },
            {top: '30%', left: '40%', description: 'Description 2' }
          ]
        },
        {src: 'stageWebScraping/startingPage1.png', bubbles : [
            {top: '11%', left: '24%', description: 'Choix des sources de recherche'},
            {top: '24%', left: '24%', description: 'Ajout de mots de recherche' },
            {top: '24%', left: '36%', description: 'Activation de classes identiques aux mots de recherche' },
            {top: '39%', left: '24%', description: 'Liste des mots de recherche'},
            {top: '62%', left: '15%', description: 'Période de recherche'},
            {top: '62%', left: '34%', description: 'Quantité de résultats de recherche pour chaque mot et chaque année'},
            {top: '73%', left: '23%', description: 'Activation de l\'ajout d\'images locales pour les classer'},
            {top: '14%', left: '75%', description: 'Optimisation des performances : Le nombre de processus améliore la vitesse de l\'IA tandis que le nombre de threads améliore la vitesse du scraper.'},
            {top: '25%', left: '75%', description: 'Ajout des classes, ce champ est désactivé lorsque le bouton "Sames classes" est actif.'},
            {top: '31%', left: '75%', description: 'Liste des classes'},
            {top: '43%', left: '76%', description: 'Choix de l\'IA et de ses paramètres (sa précision)'},
            {top: '81%', left: '30%', description: 'Bouton pour lancer les recherches. Celui-ci affiche "loading" après le lancement du programme.'},
            {top: '81%', left: '47%', description: 'Permet de choisir si l\'utilisateur veut contrôler les résultats.'},
            {top: '81%', left: '66%', description: 'Permet de choisir si l\'utilisateur veut que l\'IA classe les résultats.'},
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
.titles {
  text-align: center;
  padding: 20px;
}

.soustitre {
  text-align: center;
}
.content {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.row {
  flex-direction: row;
}

.row-reverse {
  flex-direction: row-reverse;
  text-align: left;
}

.image {
  width: 80%;
  max-width: 800px;
  margin: 20px;
  display: block;
  border-radius: 10px;
  box-shadow: 3px 3px 5px var(--noir1) ;
}

.description{
  max-width: 800px;
  margin: 10px;
}

.information-texte{
  background-color: var(--blanc1);
  color : var(--noir1);
  border-radius: 10px;
  padding: 30px;
}

.information{
  width: 28%;
  max-width: 750px;
  min-width: 400px;
  margin: 10px;
  border-radius: 10px;
  background-color: var(--noir1);
  color : var(--blanc1);
  box-shadow: 1px 1px 6px var(--noir1) ;
  height: fit-content;
}

.intro {
  max-width: 1000px;
  margin: auto;
}

.important {
  font-weight: bold;
  transform: translate(-50%,-50%);
  background-image: linear-gradient(var(--bleu2), var(--bleu2));
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  transition: background-size .7s, background-position .5s ease-in-out;
}

.important:hover {
  background-size: 100% 100%;
  background-position: 0% 100%;
  transition: background-position .7s, background-size .5s ease-in-out;
}
.title-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 80px; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 60px;
}

.title {
  align-items: center;
  position: relative;
  z-index: 2;
  color: var(--noir1);
}

.scrolling-text-top {
  position: absolute;
  top: 75%;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1em;
  color: var(--noir2);
}

.scrolling-text-bottom {
  position: absolute;
  top: 0%;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1em;
  color: var(--noir2);
  animation: scroll-right 20s linear infinite;
}
.dark {
  border-radius: 10px;
}

.dark:hover {
  box-shadow: 0px 0px 10px var(--noir1) ;
  transition: all 0.2s ease-in-out;
}
@keyframes scroll-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes scroll-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.keyword{
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--blanc1);
  border-radius: 90px;
  background-color: var(--noir1);
  justify-content: center;
  padding: 20px;
}
.shadow-top {
  padding: 40px;
  box-shadow: 0px 10px 10px var(--noir1) ;
  border-radius: 0 0 10px 10px;
}
.shadow-bottom{
  margin-top: 80px;
  padding: 40px;
  box-shadow: 0px -10px 10px var(--noir1) ;
  border-radius: 10px 10px 0 0;
}
@media (max-width: 600px) {

  .image, .description{
    width: 100%;
    margin: 10px 0;
  }

  .container {
    flex-direction: column;
  }
}
</style>
