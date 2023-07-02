<template>
  <h1>Rock Paper Scissors</h1>
  <HomePage />
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from './components/HomePage.vue';
import FooterComponent from './components/FooterComponent.vue';

interface Props {
  // Define the props used in HomePage component
  playerName: string;
  playerChoice: boolean;
}


export default defineComponent({
  name: 'App',
  components: {
    HomePage,
    FooterComponent
  }
});
</script>


<style lang="scss">

</style>