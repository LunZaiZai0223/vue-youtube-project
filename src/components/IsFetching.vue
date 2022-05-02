<template>
  <div class="loading-backdrop"></div>
  <div class="loading-wrapper">
    <div class="loading">
    </div>
  </div>
</template>

<script>
export default {
  name: 'IsFetching',
}
</script>

<style lang="scss" scoped>
.loading-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
}

.loading-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  display: flex;
  justify-content: center;
  
  &:after {
    content: "";
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 15px solid $grey;
    border-top-color: $success;
    animation: loading 1s ease infinite;
  }

}

@keyframes loading {
  to {
    transform: rotate(1turn);
  }
}

</style>

