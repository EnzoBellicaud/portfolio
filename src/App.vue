<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/about">About me</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <div id="darkMode" @click="toggleDarkMode" class="toggleMode"><span class="slider"></span></div>
    </nav>
    <router-view/>
    <footer>
      Enzo Bellicaud
    </footer>
  </div>
</template>
<script>
import store from "./store";
export default {
  name: 'App',
  methods: {
    toggleDarkMode() {
      var currentTheme = document.documentElement.getAttribute("data-theme");
      var newTheme = currentTheme === "dark" ? "light" : "dark";
      console.log(newTheme);
      store.commit('toggleTheme')
      console.log(store.theme)
      document.getElementById("darkMode").classList.toggle("toggleModeOn");
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  },
}
</script>

<style>
:root {
  --noir1 : #1D1D1D;
  --noir2 : #292929;
  --bleu1 : #2272FF;
  --bleu2 : #64a3ff;
  --blanc2 : #ececec;
  --blanc1 : #f6f5f5;

}

:root[data-theme="dark"] {
  --background1 : #12110B;
  --background2 : #19180F;
  --yellowIC1 : #282406;
  --yellowIC2 : #332D00;
  --yellowIC3 : #3E3700;
  --yellowborder1 : #4B4506;
  --yellowborder2 : #5E571A;
  --yellowborder3 : #786F24;
  --yellowsolid1 : #FFEE57;
  --yellowsolid2 : #F5E44B;
  --yellowtext1 : #F3E248;
  --yellowtext2 : #F4EEB4;

}

html {
  background-color: var(--blanc1);
  color: var(--noir1);
  max-width: 100% !important;
  overflow-x: hidden !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  width: 100%;
  padding: 30px;
  background-color: var(--noir1);
  display: flex;
  justify-content: space-evenly;
  box-shadow: var(--noir1) 0px 0px 10px;
}

a {
  color: var(--blanc1);
}

nav a {
  font-weight: bold;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--bleu1);
}

nav a:hover {
  color: var(--bleu1);
}

footer {
  width: 100%;
  background-color: var(--noir1);
  color: var(--blanc1);
  padding: 20px;
  text-align: center;
}

.toggleMode {
  background-color: var(--bleu1);
  color: var(--blanc1);
  border: none;
  border-radius: 90px;
  cursor: pointer;
  height: 20px;
  width: 40px;
  display: flex;
}

.toggleModeOn {
  justify-content: flex-end;
}

.slider {
  background-color: var(--blanc1);
  border-radius: 90px;
  height: 20px;
  width: 20px;
}

h2 {
  font-size: 3.2em;
  padding: 50px 20px 20px 20px;
  margin-bottom: 10px;
  text-align: center;
}

h3 {
  font-size: 3em;
  text-align: center;
}

h4 {
  text-align: center;
  font-size: 1.5em;
  margin: 10px;
}

p {
  font-size: 1.7em;
  margin: 10px 0;
  text-align: justify;
}

ul {
  margin: 10px 0 20px 20px;
  padding-left: 20px;
  list-style-type: disc;
}

li {
  font-size: 1.1em;
  margin: 5px 0;
}
</style>
