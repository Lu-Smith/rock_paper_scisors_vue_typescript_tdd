<template>
  <h3>{{ currentTime }}</h3>
</template>


<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
  name: "TimeComponent",
  setup() {
    const currentTime = ref('');

    const updatedTime = () => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      currentTime.value = `${hours}:${minutes}:${seconds}`;
    };

    onMounted(() => {
      updatedTime();
      setInterval(updatedTime, 1000);
    });

    return {
      currentTime
    };
  }
}
</script>

<style>

</style>