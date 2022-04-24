<template>
  <footer>
    <h2>Im footer</h2>
    <ul>
      <footer-item :footerInfo="footerInfo"></footer-item>
    </ul>

  </footer>
</template>

<script>
import FooterItem from './FooterItem.vue';

export default {
  name: 'TheFooter',
  components: {
    FooterItem,
  },
  data () {
    return {
      footerInfo: [
        {
          toolName: 'vue',
          version: '^3.2.13'
        },
        {
          toolName: 'vue-router',
          version: '^4.0.14'
        },
        {
          toolName: 'vuex',
          version: '^4.0.2'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background-color: $info;
}


</style>
