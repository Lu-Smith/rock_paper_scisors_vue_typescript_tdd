<template>
  <h5>{{ finalMessage }}</h5>
  <div class="results">
    <div class="result-move"><div>{{ playerName }}</div> <img :src="require(`../assets/images/${playerMove}.png`)" :alt="playerMove" class="player-move"/> </div>
    <div class="result-move"><div>Computer</div><img :src="require(`../assets/images/${randomChoice}.png`)" :alt="randomChoice" class="computer-move" /> </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'ResultContainer',
  props: {
    finalMessage: {
      type: String,
      required: true,
    },
    randomChoice: {
      type: String,
      required: true,
    },
    playerMove: {
      type: String,
      required: true,
    },
    playerName: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss">
@import '../assets/variables';
@import '../assets/mixins';

.results {
  @include centerElement(row, center);
  margin-top: $margin-top-basic;
}

.result-move {
  width: 300px;
  height: 300px;
  @include centerElement(column, center);
  margin: $margin-basic;
  box-shadow: $box-shadow-basic;

  div {
    color: $color-decor;
    font-family: $font-family-title;
    margin-top: $margin-top-basic;
    text-shadow: $box-shadow-basic;
  }

  img {
    width: 180px;
    height: 180px;
  }
}

@media screen and (width < 860px){
  .results {
  margin-top: 0;
}

.result-move {
  width: 250px;
  height: 250px;
  margin: $margin-small;
  box-shadow: $box-shadow-mobile;

  div {
    margin-top: $margin-basic;
    text-shadow: $box-shadow-mobile;
  }

  img {
    width: 150px;
    height: 150px;
  }
}
}

</style>