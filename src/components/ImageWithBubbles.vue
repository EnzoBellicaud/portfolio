<template>
  <div class="container">
    <div class="image-container">
      <img :src="resolvedImageSrc" alt="Descriptive Image" class="main-image" />
      <div
          v-for="(bubble, index) in bubbles"
          :key="index"
          class="bubble"
          :style="{ top: bubble.top, left: bubble.left }"
          @mouseover="showDescription(bubble.description)"
          @mouseleave="hideDescription"
      ></div>
    </div>
    <div v-if="currentDescription" class="description">{{ currentDescription }}</div>
  </div>
</template>

<script>
export default {
  name: 'ImageWithBubbles',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    bubbles: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(bubble => {
          return (
              typeof bubble.top === 'string' &&
              typeof bubble.left === 'string' &&
              typeof bubble.description === 'string'
          );
        });
      }
    }
  },
  data() {
    return {
      currentDescription: null
    };
  },
  computed: {
    resolvedImageSrc() {
      return require(`@/assets/${this.imageSrc}`);
    }
  },
  methods: {
    showDescription(description) {
      this.currentDescription = description;
    },
    hideDescription() {
      this.currentDescription = null;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: auto;
}

.image-container {
  position: relative;
  width: 100%;
}

.main-image {
  width: 100%;
  display: block;
  border-radius: 50px;
}

.bubble {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 255, 0.5);
  cursor: pointer;
}

.description {
  margin-top: 20px;
  background-color: var(--noir1);
  color: var(--blanc1);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 300px;
  word-wrap: break-word;
}

@media (min-width: 600px) {
  .container {
    flex-direction: row;
    align-items: flex-start;
  }

  .description {
    margin-top: 0;
    margin-left: 20px;
  }
}
</style>
