<template>
    <!-- Skills Section -->
    <section id="competences" class="py-20 bg-pattern min-h-screen">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-800  text-white">
                    Mes <span class="gradient-text">Compétences</span>
                </h2>
                <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-100">
                    Un aperçu des savoirs et savoir-faire que j'ai acquis durant mes études.
                </p>
            </div>

            <!-- Projet IAppel -->
            <div class="mb-16">
                <div class="glass-card p-8 rounded-2xl">
                    <div class="flex flex-col lg:flex-row gap-8">
                        <div class="lg:w-1/3 relative">
                            <img
                            :src="images[current]"
                            alt="Architecture IAppel"
                            class="w-full h-auto rounded-lg shadow-lg"
                            />
                            
                            <button
                            @click="prev"
                            class="absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-full bg-white/60 backdrop-blur shadow"
                            >
                            ‹
                            </button>
                            <button
                            @click="next"
                            class="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-full bg-white/60 backdrop-blur shadow"
                            >
                            ›
                            </button>

                            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                                Trace 1 : Schéma de représentation des flux de données d'IAppel
                                            </p>
                        </div>
                        <div class="lg:w-2/3">
                            <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contexte : Projet IAppel</h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                Le projet IAppel vise à assister les opérateurs d'urgence (112/18) en <strong>transcrivant les appels</strong> en
                                temps réel, en extrayant les <strong>entités nommées</strong> (informations clés du genre nom prénom adresse), et en
                                évaluant automatiquement le <strong>degré d'urgence</strong>. <br> 
                                L'outil que j'ai contribué à concevoir et développer, s'intègre progressivement au système d'engagement des secours du SDIS (Service
                                Départemental d'Incendie et de Secours) NexSIS. Ce système étant national, IAppel est aussi conçu pour être déployé à cette échelle.
                                L'idée sera de mettre en avant un appel susceptible de relever d'une urgence vitale <strong>avant le décroché</strong> de l'opérateur. 
                                Puis, de préremplir certains champs de NexSIS pour simplifier la tâche de l'opérateur.
                                Les couleurs du schéma ci dessus représentent les différents gérants de la donnée et les flux de données.
                                Le carrousel d'images ci-dessus illustre l'ordre des flux de données de l'application.
                            </p>
                        </div>
                    </div>

                    <!-- Sections détaillées du projet -->
                    <div class="mt-8 space-y-8">
                        <!-- Architecture hybride -->
                        <div class="border-l-4 border-blue-500 pl-6 hover:border-l-8 transition-all duration-200 rounded-xl">
                            <h4 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                                Architecture hybride : performance et confidentialité
                            </h4>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                L'application repose sur un système combinant deux fournisseurs d'intelligence
                                artificielle (IA) accessibles via des API compatible LangChain (interfaces de communication entre programmes) que j'ai intégré :
                            </p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <div class="flex items-start">
                                        <span class="text-2xl mr-3">🔐</span>
                                        <div>
                                            <strong class="text-gray-800 dark:text-white">Cloud PI Native</strong>
                                            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                                Ces modèles sont hébergés et développés par la Direction de la transformation numérique du ministère de l'Intérieur, utilisés en priorité pour les situations réelles afin de garantir la confidentialité des données.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <div class="flex items-start">
                                        <span class="text-2xl mr-3">⚡</span>
                                        <div>
                                            <strong class="text-gray-800 dark:text-white">OpenAI</strong>
                                            <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                                Modèles performants et compétitifs utilisés strictement en démonstration pour bénéficier de performances accrues (vitesse et précision). 
                                                Cela permet d'explorer de nouveaux modèles IA plus récents.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <div class="flex items-start">
                                    <span class="text-2xl mr-3">💡</span>
                                    <div>
                                        <strong class="text-gray-800 dark:text-white">Pourquoi ces deux solutions ?</strong>
                                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                            Ce choix repose sur le besoin de démontrer l'utilité de l'IA dans le traitement des appels d'urgence. En attendant la disponibilité de modèles IA
                                            performants et adaptés aux contraintes de confidentialité, l'utilisation d'OpenAI permet de tester
                                            des fonctionnalités avancées et de valider les concepts avant leur intégration définitive.
                                            L'objectif est de garantir la sécurité des données tout en bénéficiant des avancées technologiques
                                            dans le domaine de l'IA.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                J'ai fait en sorte que l'application puisse basculer entre ces deux fournisseurs au démarrage (cf. Trace 1) de celle-ci via un fichier ".env" afin d'empêcher un basculement au cours de l'utilisation.
                                Et pour savoir quel fournisseur est utilisé, j'ai mis en place un système de logs qui l'indique et ainsi qu'une mention dans la barre de navigation de l'interface utilisateur.
                            </p>
                        </div>

                        <div class="border-l-4 border-yellow-500 pl-6 hover:border-l-8 transition-all duration-200 rounded-xl">
                            <h4 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                                Sécurité et confidentialité des données
                            </h4>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Outre le choix des fournisseurs, j'ai mis en place plusieurs mesures pour garantir la sécurité et la confidentialité des données :
                            </p>
                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">J'ai implémenté un algorithme d'anonymisation des données sensibles avant l'enregistrement des évaluations (le sujet des évaluations sera abordé dans la section violette plus bas).</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">Mise en place dans la zone DNS opérationnelle (cf. Trace 1) qui est isolée et sécurisée. Où seules les URL des API d'OpenAI et Cloud PI Native sont accessibles;</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">J'ai ajouté un certificat pour que l'application soit accessible par https afin de permettre l'accès aux médias de l'utilisateur par WebRTC.</p>
                                </div>
                            </div>

                        </div>

                        <!-- Gestion des flux -->
                        <div class="border-l-4 border-green-500 pl-6 hover:border-l-8 transition-all duration-200 rounded-xl">
                            <h4 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                                Gestion des flux : de la voix à la décision
                            </h4>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                L'organisation de la restitution des données (cf. Trace 1) est complexe car elle nécessite une visualisation rapide et efficace (pour répondre aux exigences du métier d'opérateur), pour cela :
                            </p>
                            <div class="space-y-3">
                                <div class="flex items-start items-baseline">
                                    <p class="text-gray-600 dark:text-white">1. Je traite et envoi l'audio au moteur vocal (STT – Speech-to-Text) pour le transcrire et l'afficher en continu grâce a WebRTC et WebSocket</p>
                                </div>
                                <div class="flex items-start">
                                    <div>
                                        <p class="text-gray-600 dark:text-gray-300 mb-2">2. Une fois l'appel fini, j'intègre la transcription complète dans prompt préalablement affiné pour :</p>
                                        <ul class="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                            <li>• Extraire des entités nommées (adresse, état de santé, téléphone);</li>
                                            <li>• Suivre un parcours de situations métiers (arbre de décision) pour déterminer la nature de l'urgence;</li>
                                            <li>• Traduire si besoin. Si la traduction est active, je joue l'audio de la traduction pour plus de fluidité dans la conversation dans les deux sens (français vers la langue de l'appelant puis langue de l'appelant vers français).</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <p class="text-gray-600 dark:text-gray-300">3. J'ai développé une interface en respectant un prototype que j'ai réalisé et fait validé, pour restituer les résultats</p>
                                </div>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                Cette chaîne nécessite la coordination fluide de plusieurs composants techniques (API,
                                WebSocket, interface WebRTC), que j'ai conçue, développée et testée dans un
                                cadre agile. 
                            </p>
                        </div>

                        <div class="lg:w-2/3"> <img src="@/assets/capture_eval.png" alt="page d'évaluation d'IAppel" class="w-full h-auto rounded-lg shadow-lg"> 
                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                                Trace 2 : Page d'évaluation d'IAppel
                                            </p></div>

                        <!-- Travail collaboratif -->
                        <div class="border-l-4 border-purple-500 pl-6 hover:border-l-8 transition-all duration-200 rounded-xl">
                            <h4 class="text-xl font-semibold mb-3 text-gray-800">
                                Travail collaboratif & recueil des besoins métier
                            </h4>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Dès le début du projet, j'ai assuré un dialogue régulier avec les opérateurs pompier afin de
                                comprendre leurs besoins concrets : rapidité, fiabilité, simplicité d'usage. Ces échanges ont
                                permis de :
                            </p>
                            <div class="grid md:grid-cols-3 gap-4">
                                <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <p class="text-sm text-gray-600 dark:text-gray-300">
                                        Définir les entités nommées à extraire et d'affiner les prompts
                                    </p>
                                </div>
                                <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <p class="text-sm text-gray-600 dark:text-gray-300">
                                        Ajuster l'interface utilisateur pour l'adapter à leur contexte de stress et de charge
                                    </p>
                                </div>
                                <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <p class="text-sm text-gray-600 dark:text-gray-300">
                                        Créer une logique métier réaliste dans l'arbre de décision, co-construite avec l'équipe du SDIS
                                    </p>
                                </div>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                Ce dialogue est passé dans un premier temps par des entretiens directs, surtout en début d'intégration de l'outil pour accompagner les opérateurs. Dans un second temps, j'ai mis en place le système de feedback intégré à l'application (cf. Trace 2) pour recueillir leurs retours après chaque appel. 
                                Le formulaire de feedback a été conçu pour être simple et rapide à remplir, afin de ne pas perturber le travail des opérateurs.
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                Ce travail en co‑conception a été essentiel pour assurer une bonne adoption de l'outil, et
                                ancrer le projet dans une logique de conduite du changement du système décisionnel du Centre de Traitement des Appels du SDIS.
                            </p>
                        </div>

                        <!-- Collecte et valorisation des données -->
                        <div class="border-l-4 border-orange-500 pl-6 hover:border-l-8 transition-all duration-200 rounded-xl">
                            <h4 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                                Collecte, anonymisation et valorisation des données
                            </h4>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Afin d'améliorer les performances des modèles IA, l'application enregistre les transcriptions et
                                résultats, mais de façon entièrement anonymisée (aucune information personnelle n'est
                                conservée). Ces données sont ensuite :
                            </p>
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">Nettoyées et stockées dans un format lisible (CSV) pour faciliter l'analyse ultérieure (via pandas)</p>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">Transmises à l'équipe de data scientists pour analyse (qualité des réponses des LLM, erreurs et satisfaction utilisateur)</p>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">Utilisées pour affiner les prompts envoyés à l'IA, c'est-à-dire les instructions formulées pour améliorer la pertinence des réponses</p>
                                </div>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                Ce travail d'itération continue, basé sur l'expérimentation et les retours terrain, est un
                                élément central du projet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fin du projet IAppel -->

            <!-- Projet SPVConnect -->
            <div class="mb-16">
                <div class="glass-card p-8 rounded-2xl">
                    <div class="flex flex-col lg:flex-row gap-8">
                    <div class="lg:w-3/3 relative">
                        <img
                        src="@/assets/logigramme_spvconnect.png"
                        alt="logigramme de le procédure de recrutement des sapeurs-pompiers volontaires"
                        class="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                                Trace 3 : Logigramme de la procédure de recrutement des sapeurs-pompiers volontaires
                                            </p>
                    </div>
                    <div class="lg:w-2/3">
                        <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contexte : Projet SPVConnect</h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        SPVConnect vise à <strong>dématérialiser</strong> et <strong>fiabiliser</strong> la candidature des sapeurs‑pompiers volontaires,
                        en remplaçant un processus papier morcelé par un <strong>parcours unifié</strong> et traçable.
                        Le logigramme ci‑contre (cf. Trace 3) retrace toutes les étapes, du premier contact jusqu'à l’engagement,
                        et m’a servi de base pour identifier les acteurs (candidat, chef de centre, RH) et les différentes étapes. 
                        D'ailleurs, certaines étapes sont gérés par des logiciels RH développés par des <strong>éditeurs externes</strong>,
                        l'objectif est donc aussi de réduire cette dépendance afin de renforcer la maîtrise du SDIS sur ses flux de données et son <strong>système d'information</strong>.
                        De plus, il a été <strong>co-construit</strong> avec le SDIS du Doubs dans une volonté de mise à l'échelle <strong>supra-départementale</strong> de ce projet.
                        </p>
                    </div>
                    </div>

                    <!-- Sections détaillées du projet -->
                    <div class="mt-8 space-y-8">

                        <!-- Identifier et optimiser les processus -->
                        <div class="border-l-4 border-red-500 pl-6 hover:border-l-8 transition-all duration-200 rounded-xl">
                            <h4 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                            Identifier et optimiser les processus présents dans une organisation pour améliorer le SI
                            </h4>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            Afin d'identifier les processus actuels et déterminer lesquel pourraient être optimisés, j'ai adopté une démarche qui repose sur une approche incrémentale, consistant à :
                            </p>
                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">analyser les processus administratifs actuels en se basant sur le logigramme (cf. Trace 3), ainsi qu'avec l'aide d'un collègue ayant fait la démarche classique pour devenir sapeur-pompier volontaire;</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">identifier les tâches répétitives et sources d’erreurs;</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">concevoir des maquettes fonctionnelles (VueJS 3 et Flask) pour tester les solutions envisagées;</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">recueillir les retours des utilisateurs (chefs de centre, services RH) avant d’orienter le développement.</p>
                                </div>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Cette méthodologie m'a permis d’impliquer directement les acteurs concernés dans la définition de l’outil et de s’assurer que les fonctionnalités futures relèvent effectivement d'une optimisation tout en m'assurant qu'elles répondent aux besoins
                                réels du terrain.
                            </p>
                        </div>

                        <!-- Appréhender les besoins -->
                        <div class="border-l-4 border-blue-300 pl-6 hover:border-l-8 transition-all duration-200 rounded-xl">
                            <h4 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                            Appréhender les besoins et les traduire en exigences vérifiables
                            </h4>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                            Grâce à la méthode ci-dessus, j'ai pu identifier les besoins suivants :
                            </p>
                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">numériser : intégrer le plus possible les étapes de la candidature au système interne
                                du SDIS, afin de diminuer les saisies manuelles et faciliter la vérification des données ;</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">automatiser : créer les comptes et les accès informatiques automatiquement, créer
                                un système de gestion pour les rendez-vous, générer des relances en cas d’erreur sur
                                une étape ;</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">interfacer : Garantir la compatibilité du processus avec les autres outils de gestion
                                administratifs.</p>
                                </div>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Sans oublier les besoins initiaux d'optimisation et de fiabilisation de ce processus névralgique du système d'information du SDIS.
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                            Puis j'ai finalement traduit ces besoins en exigences fonctionnelles et techniques :
                            </p>
                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">formulaire d’inscription numérique : dématérialisation du dossier de candidature,
                                basé sur la solution nationale « Démarches simplifiées » bénéficiant d’une sécurité
                                accrue via France Connect, permettant de centraliser les informations saisies direc-
                                tement par le candidat. Cette solution a déjà été testée et validée par le SDIS selon le protocole cité plus haut ;</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">intégration automatique dans le système interne : importation simplifiée des données collectées, évitant la ressaisie manuelle et limitant les risques d’erreurs ;</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">interface de suivi des tâches : tableau de bord listant l’ensemble des actions à
                                réaliser pour chaque candidature (administratives, médicales, techniques), accessible
                                aux différents intervenants afin d’éviter les oublis ou les doublons. Cette étape est au stade de maquette car elle nécessite encore la conception des autres fonctionnalités pour être envisagée dans sa globalité;</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                                    <p class="text-gray-600 dark:text-gray-300">gestion des accès numériques : création automatique des comptes nécessaires (intranet, messagerie), afin de fluidifier l’intégration dans l’organisation. Ce point est déjà sur la feuille de route du SDIS, il ne manquera plus qu'à l'intégrer dans le projet.</p>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lien vers les projets -->
            <div class="text-center">
                <router-link to="/projects"
                    class="glass-card px-8 py-4 rounded-full font-medium inline-flex items-center hover:scale-105 transition-all text-gray-700 dark:text-gray-200 hover:shadow-lg">
                    <span>Voir tous mes projets</span>
                    <i class="fas fa-arrow-right ml-2"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import img1 from '@/assets/archiIAppel/archiIappel_1.jpg'
import img2 from '@/assets/archiIAppel/archiIappel_2.jpg'
import img3 from '@/assets/archiIAppel/archiIappel_3.jpg'
import img4 from '@/assets/archiIAppel/archiIappel_4.jpg'
import img5 from '@/assets/archiIAppel/archiIappel_5.jpg'
const images = [
  img1,
  img2,
  img3,
  img4,
  img5
]

const current = ref(0)

const prev = () => {
  current.value = (current.value - 1 + images.length) % images.length
}

const next = () => {
  current.value = (current.value + 1) % images.length
}
</script>