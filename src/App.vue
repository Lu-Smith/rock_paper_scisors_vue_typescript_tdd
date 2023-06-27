<template>
  <h1>Rock Paper Scissors</h1>
  <HomePage msg="I am creating a new Vue game" />
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from './components/HomePage.vue';
import FooterComponent from './components/FooterComponent.vue';


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