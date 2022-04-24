<template>
  <li
    v-for="({ toolName, version }, index) in footerInfo"
    :key="index"
  >
    <p>
      <span>
        {{ toolName + ': ' }}
      </span>
      <span>
        {{ version }}
      </span>
    </p>
  </li>
</template>

<script>
export default {
  name: 'FooterItem',
  props: {
    footerInfo: {
      type: Array,
      default: () => {
        return [
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
    },
  }
}
</script>
