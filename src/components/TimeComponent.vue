<template>
  <h3 class="time"><span>{{ currentTime }}</span> Today is <span>{{ currentDay }}</span>, {{ currentYear }}</h3>
</template>


<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
  name: "TimeComponent",
  setup() {
    const currentTime = ref('');
    const currentDay = ref('');
    const currentYear = ref('');

    const updatedTime = () => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const day = currentDate.getDate();
      const dayWeek = days[currentDate.getDate()];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const month = months[currentDate.getMonth()];
      const year = currentDate.getFullYear();


      if(minutes < 10 && seconds < 10){
        currentTime.value = `${hours}:0${minutes}:0${seconds}`;
      } else if(minutes < 10 && seconds > 10){
        currentTime.value = `${hours}:0${minutes}:${seconds}`;
      } else if(minutes > 10 && seconds < 10){
        currentTime.value = `${hours}:${minutes}:0${seconds}`;
      } else {
        currentTime.value = `${hours}:${minutes}:${seconds}`;
      }
      currentDay.value =`${dayWeek}`
      if( day === 1 || day === 31 ) {
        currentYear.value =`${day}st ${month} ${year}`
      } else if(day === 2) {
        currentYear.value =`${day}nd ${month} ${year}`
      } else if(day === 3) {
        currentYear.value =`${day}rd ${month} ${year}`
      } else {
        currentYear.value =`${day}th ${month} ${year}`
      }
   
    };

    onMounted(() => {
      updatedTime();
      setInterval(updatedTime, 1000);
    });

    return {
      currentTime,
      currentDay,
      currentYear
    };
  }
}
</script>

<style lang="scss">
@import '../assets/variables';

.time {
  background-color: $background-color-basic;
  color: $color-basic;
  font-size: $font-size-small;
  line-height: $line-height-small;
  width: 400px;
  margin: 0 auto;
  border-top-left-radius: $border-radius-large;
  border-top-right-radius: $border-radius-large;
  padding-top: $padding-basic;
}

span {
    color: $color-decor;
}

@media screen and (width < 860px){
  .time {
    font-size: $font-size-mobile;
    line-height: $line-height-mobile;
    width: 330px;
  }
}

@media screen and (width < 481px){
  .time {
    font-size: $font-size-mobile-small;
    line-height: $line-height-mobile-small;
    width: 260px;
    border-top-left-radius: $border-radius-basic;
    border-top-right-radius: $border-radius-basic;
    padding-top: $padding-mobile;
  }
}
</style>