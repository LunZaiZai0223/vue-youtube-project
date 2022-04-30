<template>
  <footer>
    <ul>
      <footer-item :footerInfo="footerInfo"></footer-item>
    </ul>
    <p>此專案為單純的作品練習，資料及圖片來源皆出自網路，不使用於任何商業或營利行為。</p>
    <p>此專案的排版及功能參考大神的<a href="https://mini-ghost.github.io/vue3-youtube-practice/#/" target="_blank">練習</a>。</p>
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
          toolName: 'Vue',
          version: '^3.2.13'
        },
        {
          toolName: 'Vue-router',
          version: '^4.0.14'
        },
        {
          toolName: 'Vuex',
          version: '^4.0.2'
        },
        {
          toolName: 'vue3-youtube',
          version: '^0.1.9'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background-color: $info;
  padding: 1rem;
}

p a {
  font-style: italic;
}


</style>
