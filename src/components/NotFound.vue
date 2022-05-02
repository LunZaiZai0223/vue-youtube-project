<template>
  <the-navigation></the-navigation>
  <div class="page-not-found">
    <img src="../assets/images/page-not-found.jpg" />
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheNavigation from './nav/TheNavigation.vue';
import TheFooter from './footer/TheFooter.vue';

export default {
  name: 'NotFound',
  components: {
    TheNavigation,
    TheFooter,
  }
}
</script>

<style lang="scss" scopde>
.page-not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 72px;
  img {
    display: block;
    width: 50%;
  }
}
</style>
