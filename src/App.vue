<template>
  <h1>Rock Paper Scissors</h1>
  <HomePage />
  <footer>
    <FooterComponent />
    <TimeComponent />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from './components/HomePage.vue';
import TimeComponent from './components/TimeComponent.vue'
import FooterComponent from './components/FooterComponent.vue';




export default defineComponent({
  name: 'App',
  components: {
    HomePage,
    FooterComponent,
    TimeComponent
  }
});
</script>


<style lang="scss">

</style>