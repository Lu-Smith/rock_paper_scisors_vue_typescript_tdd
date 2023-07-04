<template>
  <h3 :class="timer < 5 ? 'timer' : ''" >{{ timer }}s</h3>
</template>

<script lang="ts">
export default {
  name: 'TimerComponnet',
  props: ['timer']

}
</script>

<style lang="scss" >
@import '../assets/variables';
@import '../assets/mixins';

.timer {
  color: $color-warning;
}
</style>