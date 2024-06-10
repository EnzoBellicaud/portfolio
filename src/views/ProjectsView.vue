<template>
  <div>
    <div class="projet">
      <a href="/projects/stageWebScraping">
        <div class="card">
          <img src="../assets/MainAfter.webp" alt="TODO"/>
          <div class="card-text">
            <p>Voici le texte qui apparaît en glissant par la droite</p>
          </div>
        </div>
        <div class="credits">
            <h2>WebScraping</h2>
            <p>04/06/2024</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.projet {
  margin: 200px;
  display: flex;
  align-items: center;
  background-color: var(--yellowback2);
  width: 50%; /* Ajustez selon vos besoins */
  height: 50%; /* Ajustez selon vos besoins */
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
  background: var(--yellowback2);
  color: var(--yellowtext2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: right 0.5s ease;
  box-sizing: border-box;
  border-radius: 15px 0 0 15px;
}

.card:hover .card-text {
  right: -25%; /* Texte glisse en chevauchant l'image */
}
.credits {
  display: flex;
  padding: 40px;
  flex-direction: column;
  background: var(--yellowback2);
  color: var(--yellowtext2);
}
</style>

<script>
export default {
  name: 'ProjectsView',
}
</script>
