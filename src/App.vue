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
  --yellowback1 : #FDFDF8;
  --yellowback2 : #FFFDE6;
  --yellowIC1 : #FFFAAA;
  --yellowIC2 : #FFF380;
  --yellowIC3 : #FBEA52;
  --yellowborder1 : #EBDB4D;
  --yellowborder2 : #DACD52;
  --yellowborder3 : #C7B600;
  --yellowsolid1 : #FFE900;
  --yellowsolid2 : #F9E000;
  --yellowtext1 : #8A7A00;
  --yellowtext2 : #423E19;

  --grayback1 : #FDFCFE;
  --grayback2 : #FAF8FC;
  --grayIC1 : #F2EFF5;
  --grayIC2 : #EBE6EF;
  --grayIC3 : #E5DEE9;
  --grayborder1 : #DED7E4;
  --grayborder2 : #D4CBDB;
  --grayborder3 : #C2B6CC;
  --graysolid1 : #94889E;
  --graysolid2 : #897E92;
  --graytext1 : #696070;
  --graytext2 : #231D27;
}

:root[data-theme="dark"] {
  --yellowback1 : #12110B;
  --yellowback2 : #19180F;
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

  --grayback1 : #121014;
  --grayback2 : #1B181D;
  --grayIC1 : #252127;
  --grayIC2 : #2D2831;
  --grayIC3 : #352E39;
  --grayborder1 : #3E3744;
  --grayborder2 : #4D4454;
  --grayborder3 : #685B71;
  --graysolid1 : #766980;
  --graysolid2 : #83768E;
  --graytext1 : #BBAFC4;
  --graytext2 : #EFEDF1;
}

html {
  background-color: var(--yellowback1);
  color: var(--yellowtext2);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

nav {
  padding: 30px;
  background-color: var(--yellowIC1);
  display: flex;
  justify-content: space-evenly;

}

a {
  color: var(--yellowtext1);
}

nav a {
  font-weight: bold;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--yellowtext2);
}

.toggleMode {
  background-color: var(--yellowIC3);
  color: var(--yellowtext2);
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
  background-color: var(--yellowtext2);
  border-radius: 90px;
  height: 20px;
  width: 20px;
}
</style>
