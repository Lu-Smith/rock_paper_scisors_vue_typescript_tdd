<template>
  <h4 class="footer">This game was coded by <a class="profile-link" href="https://www.lunasmithart.com/" target="_blank">Luna Smith</a> and is available as an open-source project on <a class="gitHub-link" href="https://github.com/Lu-Smith/rock_paper_scisors_vue_typescript_tdd" target="_blank">GitHub</a>.</h4>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
@import '../assets/variables';
@import '../assets/mixins';

@keyframes colorAnimation {
    0% { color: $background-color-dark }
    50% { color: black}
    100% { color: $background-color-dark }
}

.footer {
  animation: colorAnimation 2s infinite;
  margin-bottom: $margin-basic;
}

@media screen and (width < 1000px){
  .footer {
    margin-bottom: $margin-small;
  }
}

@media screen and (width < 860px){
  .footer {
    font-size: $font-size-mobile;
    padding: 0 50px;
  }
}

@media screen and (width < 481px){
  .footer {
    font-size: $font-size-mobile-small;
    padding: 0 40px;
  }
}

</style>