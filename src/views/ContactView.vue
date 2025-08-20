<template>
  <!-- Contact Section -->
    <section id="contact" class="py-20 bg-pattern min-h-screen">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                    Me <span class="gradient-text">Contacter</span>
                </h2>
                <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Disponible pour des opportunités de collaboration ou des projets freelance. N'hésitez pas à me contacter !
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="glass-card p-8 rounded-2xl">
                    <h3 class="text-xl font-bold mb-6 text-gray-800 dark:text-white">Envoyez-moi un message</h3>
                    <form class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Nom</label>
                            <input type="text" class="w-full px-4 py-3 rounded-lg glass-card border-0 focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Votre nom">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                            <input type="email" class="w-full px-4 py-3 rounded-lg glass-card border-0 focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="votre@email.com">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Sujet</label>
                            <input type="text" class="w-full px-4 py-3 rounded-lg glass-card border-0 focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Sujet de votre message">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                            <textarea rows="5" class="w-full px-4 py-3 rounded-lg glass-card border-0 focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Votre message..."></textarea>
                        </div>
                        <button type="submit" class="w-full gradient-bg text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all">
                            Envoyer le message
                        </button>
                    </form>
                </div>

                <div>
                    <div class="glass-card p-8 rounded-2xl mb-8">
                        <h3 class="text-xl font-bold mb-6 text-gray-800 dark:text-white">Coordonnées</h3>

                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-800 dark:text-white">Email</h4>
                                    <a href="mailto:bellicaud.enzo@gmail.com" class="text-blue-500 hover:underline">bellicaud.enzo@gmail.com</a>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-800 dark:text-white">Téléphone</h4>
                                    <a href="tel:+33612345678" class="text-blue-500 hover:underline">+33 6 XX XX XX XX</a>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-800 dark:text-white">Localisation</h4>
                                    <p class="text-gray-600 dark:text-gray-300">France</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="glass-card p-8 rounded-2xl">
                        <h3 class="text-xl font-bold mb-6 text-gray-800 dark:text-white">Réseaux sociaux</h3>

                        <div class="flex space-x-4">
                            <a href="#" class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'ContactView',
}
</script>
