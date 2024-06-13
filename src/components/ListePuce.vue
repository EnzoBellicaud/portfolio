<template>
  <div class="class1">
    <div v-for="mot in mots" :key="mot" class="puce">
      {{mot}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListePuce',
  props: {
    mots: Array
  }
}
</script>
<style scoped>

  .class1 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .puce {
    margin: 10px;
    padding: 10px;
    background-color: var(--noir2);
    color: var(--blanc1);
    border-radius: 5px;
    box-shadow: 3px 3px 5px var(--noir2) ;
  }
</style>
