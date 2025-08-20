<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="fixed w-full z-50">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="hidden md:flex space-x-8">
                    <router-link to="/" class="nav-link">Accueil</router-link> 
                    <router-link to="/about" class="nav-link">Portfolio</router-link> 
                </div>

                <div class="flex items-center space-x-4">
                    <ThemeToggle />

                    <button class="md:hidden glass-card p-2 rounded-full hover:scale-105 transition-transform" id="mobile-menu-button">
                        <i class="fas fa-bars" :class="{ 'text-black': !isDark, 'text-white': isDark }"></i>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div id="mobile-menu" class="hidden md:hidden mt-4 glass-card p-4">
                <div class="flex flex-col space-y-3">
                    <router-link to="/" class="nav-link">Accueil</router-link> 
                    <router-link to="/about" class="nav-link">Portfolio</router-link> 
                </div>
            </div>
        </div>
    </nav>
    <router-view/>
    
    <!-- Footer -->
    <footer class="py-8 text-center bg-gradient-to-t from-gray-50 dark:from-gray-900">
        <div class="container mx-auto px-6">
            <div class="flex justify-center space-x-6 mb-6">
                <router-link to="/" class="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</router-link> 
                <router-link to="/projects" class="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Projects</router-link> 
                <router-link to="/about" class="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About me</router-link> 
                <router-link to="/contact" class="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</router-link> 
            </div>

            <p class="text-gray-500 dark:text-gray-400">Développé par Enzo Bellicaud</p>
        </div>
    </footer>
  </div>
</template>
<script>
import ThemeToggle from '@/components/ThemeToggle.vue';

export default {
  name: 'App',
  components: {
    ThemeToggle
  },
  computed: {
    isDark() {
      return this.$store.getters.isDark;
    }
  },
  mounted() {
    // Initialiser le thème au chargement
    this.$store.dispatch('initTheme');
    this.applyTheme();
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Add shadow to navbar on scroll
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 10) {
        nav.classList.add('shadow-lg', 'backdrop-blur-md', 'bg-white/80', 'dark:bg-gray-900/80');
      } else {
        nav.classList.remove('shadow-lg', 'backdrop-blur-md', 'bg-white/80', 'dark:bg-gray-900/80');
      }
    });
  },
  methods: {
    applyTheme() {
      const html = document.documentElement;
      if (this.$store.getters.isDark) {
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
      } else {
        html.classList.remove('dark');
        html.setAttribute('data-theme', 'light');
      }
    }
  },
  watch: {
    '$store.state.theme'() {
      this.applyTheme();
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'Montserrat', sans-serif;
    transition: all 0.3s ease;
    background-attachment: fixed;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

body.dark, .dark body {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    transition: all 0.3s ease;
}

.glass-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.15);
}

.dark .glass-card {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.dark .glass-card:hover {
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
}

.gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.dark .gradient-bg {
    background: linear-gradient(135deg, #1e3a8a 0%, #7e22ce 100%);
}

.tech-badge {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

.dark .tech-badge {
    background: rgba(0, 0, 0, 0.3);
}

.nav-link {
    position: relative;
    transition: all 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
    width: 100%;
}

.floating {
    animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}

.bg-pattern {
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
}

.dark .bg-pattern {
    background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}

.gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Form styles */
input, textarea {
    background: rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    outline: none;
}

input:focus, textarea:focus {
    background: rgba(255, 255, 255, 0.15) !important;
    border: 1px solid rgba(102, 126, 234, 0.5) !important;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
}

.dark input, .dark textarea {
    background: rgba(0, 0, 0, 0.2) !important;
    border: 1px solid rgba(255, 255, 255, 0.05) !important;
    color: white;
}

.dark input:focus, .dark textarea:focus {
    background: rgba(0, 0, 0, 0.3) !important;
    border: 1px solid rgba(102, 126, 234, 0.5) !important;
}
</style>
