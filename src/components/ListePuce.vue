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
    background-color: var(--yellowback2);
    border: 1px solid var(--yellowborder1);
    border-radius: 5px;
    box-shadow: 3px 3px 5px var(--graysolid2) ;
  }
</style>
