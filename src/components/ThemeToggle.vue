<template>
  <button 
    @click="toggleTheme" 
    class="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 relative overflow-hidden group"
    :class="{ 'bg-yellow-400/20': !isDark, 'bg-blue-900/20': isDark }"
  >
    <div class="relative z-10">
      <i 
        class="fas text-lg transition-all duration-500 opacity-100 rotate-0"
        :class="{ 'fa-sun text-black': !isDark, 'fa-moon text-white': isDark }"
      ></i>
    </div>
    
    <!-- Animation background -->
    <div 
      class="absolute inset-0 rounded-full transition-all duration-500"
      :class="{ 
        'bg-gradient-to-r from-yellow-400 to-orange-500 scale-0 group-hover:scale-150': !isDark,
        'bg-gradient-to-r from-blue-600 to-purple-600 scale-0 group-hover:scale-150': isDark
      }"
    ></div>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  computed: {
    isDark() {
      return this.$store.getters.isDark;
    }
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch('changeTheme');
    }
  }
}
</script>
