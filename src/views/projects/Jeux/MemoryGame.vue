<template>
    <div>
      <form @submit.prevent="startGame">
        <label for="pairs">Nombre de paires :</label>
        <input type="number" id="pairs" v-model="pairs" min="1" value="4"><br>
        <label for="unlimited">Temps illimité :</label>
        <input type="checkbox" id="unlimited" v-model="unlimited"><br>
        <div v-if="!unlimited">
            <label for="timer">Durée du timer (en secondes) :</label>
            <input type="number" id="timer" v-model="time" min="10" max="600" value="60"><br>
        </div>
        <input type="submit" :value="cards.length > 0 ?  'Nouvelle partie': 'Commencer le jeu' ">
      </form>
      <div id="memory-grid">
      <div
        v-for="card in cards"
        :key="card.id"
        class="card"
        :class="{ flipped: card.flipped }"
        @click="flipCard(card)"
        >
            <div class="card-inner">
            <div class="card-front">
                <!-- Contenu visible lorsque la carte est face cachée -->
            </div>
            <div class="card-back" :style="{ backgroundColor: card.color }">
                {{ card.value }}
            </div>
            </div>
        </div>
    </div>
      <div v-if="timerDisplay" id="timer">Temps restant: {{ timerDisplay }}</div>
      <div v-if="gameOverMessage" id="game-over-message">{{ gameOverMessage }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'memoryGame',
    data() {
      return {
        pairs: 4,
        time: 60,
        unlimited: true,
        cards: [],
        flippedCards: [],
        score: 0,
        timerId: null,
        timerDisplay: null,
        gameOverMessage: null,
      };
    },
    methods: {
      startTimer(timeRemaining) {
        this.timerDisplay = timeRemaining;
  
        this.timerId = setInterval(() => {
          timeRemaining--;
          this.timerDisplay = timeRemaining;
  
          if (timeRemaining === 0) {
            clearInterval(this.timerId);
            this.endGame();
          }
        }, 1000);
      },
      createCards() {
        const cardValues = [];
        const cardColors = [];
        for (let i = 1; i <= this.pairs; i++) {
          cardValues.push(i.toString(), i.toString());
          cardColors.push(`hsl(${Math.random() * 360}, 100%, 50%)`);
        }
  
        const shuffledValues = this.shuffle(cardValues);
        this.cards = shuffledValues.map((value, index) => ({
          id: index,
          value,
          color: cardColors[parseInt(value) - 1],
          flipped: false,
        }));
      },
      shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      },
      flipCard(card) {
        if (this.flippedCards.length < 2 && !this.flippedCards.includes(card) && !card.flipped) {
          card.flipped = true;

          this.flippedCards.push(card);
  
          if (this.flippedCards.length === 2) {
            const [card1, card2] = this.flippedCards;
            if (card1.value === card2.value) {
              this.score += 10;
              this.flippedCards = [];
            } else {
              setTimeout(() => {
                card1.flipped = false;
                card2.flipped = false;
                this.flippedCards = [];
              }, 1000);
            }
          }
        }
      },
      startGame() {
        this.createCards();
        this.score = 0;
        this.timerDisplay = null;
        this.gameOverMessage = null;
  
        if (!this.unlimited) {
          this.startTimer(this.time);
        }
      },
      endGame() {
        this.gameOverMessage = `Jeu terminé ! Votre score est de ${this.score}.`;
        this.cards.forEach(card => card.flipped = false);
        this.flippedCards = [];
      },
    },
  };
  </script>
  <style scoped>
  
  form {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  label {
    display: block;
    font-weight: bold;
    font-size: 18px;
    color: #2c3e50;
    margin-top: 10px;
  }
  
  input[type="number"] {
    width: 50px;
    margin: 5px 0px 10px 10px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  }
  
  input[type="checkbox"] {
    margin-right: 10px;
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  input[type="submit"] {
    padding: 10px;
    background-color: #1abc9c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  input[type="submit"]:hover {
    background-color: #148f77;
  }
  
  #memory-grid {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .card {
    width: 100px;
    height: 100px;
    margin: 10px;
    perspective: 1000px; /* Needed for 3D flip */
    display: inline-block;
    cursor: pointer;
  }
  
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  
  .card.flipped .card-inner {
    transform: rotateY(180deg);
  }
  
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  
  .card-front {
    background-color: #ccc;
  }
  
  .card-back {
    transform: rotateY(180deg);
  }
  </style>
  