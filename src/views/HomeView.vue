<template>
   <!-- Hero Section -->
    <section id="accueil" class="min-h-screen flex items-center justify-center pt-20 bg-pattern">
        <div class="container mx-auto px-6 py-12">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-12 md:mb-0">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
                        Bonjour, je suis <span class="gradient-text">Enzo</span>
                    </h1>
                    <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
                        Développeur GenAI FullStack Français
                    </h2>
                    <p class="text-lg mb-8 max-w-lg text-gray-600 dark:text-gray-300">
                        Je crée des applications web modernes intégrant des services intelligents. Passionné par le code propre et les solutions innovantes.
                    </p>
                    <p class="text-lg mb-8 max-w-lg text-gray-600 dark:text-gray-300">
                    Les compétences du BUT traité dans ce portfolio sont :
                    <ul class="list-disc pl-6">
                        <li>Gérer des données de l'information;</li>
                        <li>Conduire un projet.</li>
                    </ul>
                    Et celle de la SAÉ est :
                    <ul class="list-disc pl-6">
                        <li>Collaborer au sein d’une équipe informatique.</li>
                    </ul>
                </p>
                    <div class="flex space-x-4">
                        <router-link to="/about" class="glass-card px-6 py-3 rounded-full font-medium gradient-bg text-white hover:opacity-90 hover:scale-105 transition-all">
                            Voir le portfolio
                        </router-link>
                    </div>
                </div>

                <div class="md:w-1/2 flex justify-center">
                    <div class="relative">
                        <div class="glass-card w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden floating">
                            <img src="@/assets/enzopfp.jpg" alt="Profile" class="w-full h-full object-cover">
                        </div>

                        <div class="absolute -bottom-5 -left-5 glass-card p-4 rounded-lg">
                            <div class="flex items-center">
                                <div class="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                                <span class="text-sm text-gray-700 dark:text-gray-200">Disponible</span>
                            </div>
                        </div>

                        <div class="absolute -top-5 -right-5 glass-card p-3 rounded-full">
                            <i class="fas fa-code text-xl text-blue-500"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-16">
                <router-link to="/projects" class="glass-card px-6 py-3 rounded-full font-medium inline-flex items-center hover:scale-105 transition-all text-gray-700 dark:text-gray-200">
                    Voir tous mes projets <i class="fas fa-arrow-down ml-2"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>
