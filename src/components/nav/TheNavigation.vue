<template>
  <header class="nav">
    <div class="nav-wrapper">
      <h1>
        <router-link 
          :to="{ name: 'home-page' }"
        >
          Youtube API with <span class="color-green">Vue 3</span>
        </router-link>
      </h1>
      <nav>
        <router-link :to="{ name: 'favorite-page' }">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <span>我的收藏</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNavigation',
}
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: 1px solid $border-color;
  background-color: White;
  color: Black;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 99;
  &-wrapper {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    height: 72px;
    h1 a{
      text-decoration: none;
      font-size: 1.75rem;
      font-weight: 600;
      color: inherit;
      @media screen and (max-width: 500px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 400px) {
        font-size: 1.25rem;
      }
    }
    nav a {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      text-decoration: none;
      color: inherit;
      &:hover {
        color: $secondary;
      }
    }
  }
}

.color-green {
  color: #3FB883;
}

</style>
