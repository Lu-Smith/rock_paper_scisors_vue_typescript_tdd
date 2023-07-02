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
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const day = days[currentDate.getDate()];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const month = months[currentDate.getMonth()];
      const year = currentDate.getFullYear();



      currentTime.value = `${hours}:${minutes}:${seconds}, today is ${day}, ${month} ${year}`;
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