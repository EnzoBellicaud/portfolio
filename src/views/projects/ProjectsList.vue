<template>
  <div>
    <div >
      <router-link to="/projects/stageWebScraping" class="projet">
        <div class="card">
          <img src="@/assets/MainAfter.webp" alt="TODO"/>
          <div class="card-text"><p class="description">Voici le texte qui apparaît en glissant par la droite</p>
          </div>
        </div>
        <div class="credits">
          <h2>WebScraping</h2>
          <p>04/06/2024</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.projet {
  margin: 200px;
  display: flex;
  align-items: center;
  background-color: var(--blanc1);
  width: 50%; /* Ajustez selon vos besoins */
  height: 350px; /* Ajustez selon vos besoins */
}
.card {
  position: relative;
  width: 100%; /* Ajustez selon vos besoins */
  height: 100%; /* Ajustez selon vos besoins */
  overflow: hidden;
  border-radius: 15px 0 0 15px;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-text {
  position: absolute;
  top: 0;
  right: -100%; /* Commence en dehors de la carte */
  width: 100%;
  height: 100%;
  background: var(--noir1);
  color: var(--blanc1);
  display: flex;
  align-items: center;
  justify-content: start;
  transition: right 0.5s ease;
  box-sizing: border-box;
  border-radius: 15px 0 0 15px;
}

.description {
  width: 75%;
  text-align: center;
}

.card:hover .card-text {
  right: -25%; /* Texte glisse en chevauchant l'image */
}
h2 {
  padding-top: 0;
}
.credits {
  display: flex;
  height: 100%;
  flex-direction: column;
  background: var(--noir1);
  color: var(--blanc1);
  align-items: center;
  justify-content: center;
  border-radius: 0 15px 15px 0;
}

</style>

<script>
export default {
  name: 'ProjectsList',
}
</script>
