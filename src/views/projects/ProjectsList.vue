<template>
  <!-- Projects Section -->
    <section id="projets" class="py-20 bg-pattern min-h-screen">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                    Mes <span class="gradient-text">Projets</span>
                </h2>
                <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Découvrez une sélection de mes réalisations récentes, alliant design moderne et fonctionnalités avancées.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 group">
                    <div class="mb-4 overflow-hidden rounded-xl">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Project 1" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">Belforaine</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">Système complet de gestion pour la Belforaine (festival fictif de musique) avec un plan interractif, système de réservations, gestion des artistes et suivi des participants</p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Vue</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Node.js</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">MySQL</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <router-link to="/projects/stageWebScraping" class="text-blue-500 hover:text-blue-600 flex items-center transition-colors">
                            Voir plus <i class="fas fa-arrow-right ml-2"></i>
                        </router-link>
                        <a href="#" class="text-gray-500 hover:text-blue-500 transition-colors">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 group">
                    <div class="mb-4 overflow-hidden rounded-xl">
                        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Project 2" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">Outil de labellisation de datasets d'image</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">Labellisation d'image avec un modèle général et correction manuelle possible pour la construction de datasets</p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Python</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Tkinter</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">YOLOv8</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <router-link to="/projects/stageWebScraping" class="text-blue-500 hover:text-blue-600 flex items-center transition-colors"> 
                            Voir plus <i class="fas fa-arrow-right ml-2"></i>
                        </router-link>
                        <a href="#" class="text-gray-500 hover:text-blue-500 transition-colors">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 group">
                    <div class="mb-4 overflow-hidden rounded-xl">
                        <img src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Project 3" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">IAppel</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">Outil de préqualification d'appels d'urgence utilisant l'IA pour analyser et catégoriser les appels</p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Python</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Whisper</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Gemma</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <router-link to="/projects/stageWebScraping" class="text-blue-500 hover:text-blue-600 flex items-center transition-colors">
                            Voir plus <i class="fas fa-arrow-right ml-2"></i>
                        </router-link>
                        <a href="#" class="text-gray-500 hover:text-blue-500 transition-colors">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 group">
                    <div class="mb-4 overflow-hidden rounded-xl">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Project 4" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">Chatbot Intelligent</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">Squelette d'assistant conversationnel acceptant n'importe quelle base de connaissance PDF afin de répondre à partir de celle-ci</p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Python</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">FastAPI</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">RAG</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <router-link to="/projects/stageWebScraping" class="text-blue-500 hover:text-blue-600 flex items-center transition-colors">
                            Voir plus <i class="fas fa-arrow-right ml-2"></i>
                        </router-link>
                        <a href="#" class="text-gray-500 hover:text-blue-500 transition-colors">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 group">
                    <div class="mb-4 overflow-hidden rounded-xl">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Project 5" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">SIS DATA LAB</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">Une association de Services Départementaux d’Incendie et de Secours (SDIS) permettant de dynamiser les échanges entre ses membres, ainsi qu'à soutenir les projets de recherche en intelligence artificielle au service de la Sécurité Civile.</p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">RGPD</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">LinkedIn</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Wordpress</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <router-link to="/projects/stageWebScraping" class="text-blue-500 hover:text-blue-600 flex items-center transition-colors">
                            Voir plus <i class="fas fa-arrow-right ml-2"></i>
                        </router-link>
                        <a href="#" class="text-gray-500 hover:text-blue-500 transition-colors">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 6 -->
                <div class="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 group">
                    <div class="mb-4 overflow-hidden rounded-xl">
                        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Project 6" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">E-commerce Platform</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">Plateforme de commerce électronique complète avec gestion des stocks et paiements</p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Vue.js</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">Express</span>
                        <span class="tech-badge px-3 py-1 text-sm rounded-full text-gray-700 dark:text-gray-200">MongoDB</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <router-link to="/projects/stageWebScraping" class="text-blue-500 hover:text-blue-600 flex items-center transition-colors">
                            Voir plus <i class="fas fa-arrow-right ml-2"></i>
                        </router-link>
                        <a href="#" class="text-gray-500 hover:text-blue-500 transition-colors">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16">
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Vous voulez voir plus de projets ?
                </p>
                <a href="https://github.com" target="_blank" class="glass-card px-6 py-3 rounded-full font-medium inline-flex items-center hover:scale-105 transition-all text-gray-700 dark:text-gray-200">
                    Voir sur GitHub <i class="fab fa-github ml-2"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ProjectsList',
}
</script>
