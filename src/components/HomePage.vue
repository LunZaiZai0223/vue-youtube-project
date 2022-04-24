<template>
  <the-navigation></the-navigation>
  <h1>This is the home page</h1>
  <the-footer></the-footer>
</template>

<script>
import TheNavigation from './nav/TheNavigation.vue';
import TheFooter from './footer/TheFooter.vue';

export default {
  name: 'HomePage',
  components: {
    TheNavigation,
    TheFooter
  },
}
</script>
<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>

