<template>
  <div class="player-container" ref="player">
    <YouTube 
      class="player-wrapper"
      :src="videoLink" 
      width= "100%"
      ref="youtube" />
    <div class="info">
      <div class="info-title">
        <h3>{{ videoTitle }}</h3>
        <div class="info-add-favorite">
          <div class="info-add-favorite-wrapper">
            <!-- TODO: 如果有加入收藏就更換顏色 -->
            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 20 20" fill="currentColor"> -->
            <!--   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /> -->
            <!-- </svg> -->
          </div>
        </div>
      </div>
      <h4>{{ channelTitle }}</h4>
    </div>
    <div class="description" v-html="transferUrlsAndHashTagsToTag"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'

export default defineComponent({
  components: { YouTube },
  props: ['videoLink', 'videoDescription', 'videoTitle', 'channelTitle'],
  computed: {
    transferUrlsAndHashTagsToTag () {
      const hashTagUrl = 'https://www.youtube.com/hashtag/';
      // https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
      const regForUrl = /(https?:\/\/[^\s]+)/g
      // https://github.com/Mini-ghost/vue3-youtube-practice/blob/master/src/views/Video.vue
      const regForHashtag = /(?<!\S)#(\w|[\u3400-\uFFFD])+/g
      const hashtagReplaceFuc = (hashtag) => {
        const withoutTag = hashtag.replace('#', '');
        return `<a href="${hashTagUrl + withoutTag}" target="_blank">${hashtag}</a>`;
      };
      const parsedUrls = this.videoDescription.replace(regForUrl, (url) => `<a href="${url}" target="_black">${url}</a>`)
      const parsedHashTags = parsedUrls.replace(regForHashtag, hashtagReplaceFuc);
      return parsedHashTags;
    }
  },
  methods: {
  },
  mounted () {
    console.log(this.videoDescription);
  }
})
</script>

<style lang="scss" scoped>
.player-container {
  max-width: 1280px;
  padding: 0 1.5rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding-top: 5rem;
}

/* 直接開大決... */
/* https://www.webdesigns.com.tw/youtube-rwd.asp */

.player-wrapper {
  position: relative !important;
  padding-bottom: 56.25% !important;
  padding-top: 30px !important;
  height: 0 !important;
  overflow: hidden !important;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px $success;
  /* ::v-deep 抓取套件生成的 iframe */
  ::v-deep iframe {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
}

.info {
  margin: 0.75rem 0;
  h4 {
    margin-top: 0.25rem;
  }
  &-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

.description {
  /* 遇見分行符號就換行 */
  white-space: pre-wrap;
  border: 2px solid $success;
  background-color: $secondary-light;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  ::v-deep a {
    color: $success;
    font-style: italic;
  }
}

.info {
  position: relative;
}

.info-add-favorite {
  &-wrapper {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border-radius: 50%;
    background-color: $grey-light;
    padding: 0.25rem;
    transform: scale(1.1);
    cursor: pointer;
    opacity: 0.5;
    transition: background-color 0.2s ease-in, transform 0.2s ease-in, color 0.2s ease-in, opacity 0.2s ease-in;
    &:hover {
      background-color: $secondary;
      color: White;
      transform: scale(1.3);
      opacity: 1;
    }
  }
}
</style>
