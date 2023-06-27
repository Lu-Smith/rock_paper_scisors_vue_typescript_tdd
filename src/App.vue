<template>
  <h1>Hello world</h1>
  <HomePage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from './components/HomePage.vue';


export default defineComponent({
  name: 'App',
  components: {
    HomePage
  }
});
</script>


<style lang="scss">
#app {
  background: black;
}
</style>