<template>
  <div id="app">
    <!-- TODO: BACKGROUND IMAGE -->
    <header :class="['header', { 'home-style': isHome }]">
      <Logo />

      <Nav class="main-nav" />
    </header>

    <main :class="['content', { 'home-style': isHome }]">
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Logo from '@/components/Logo.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Logo,
  },
  computed: {
    isHome() {
      return this.$route.name === 'home';
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1 100%;
  margin-top: $header-height;

  &.home-style {
    margin-top: 0;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: $z-main-nav;
  padding: $base-padding;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $bg-color;
  border-bottom: $border-size solid $main-color;
  height: $header-height;

  &.home-style {
    top: auto;
    bottom: 0;
    background-color: transparent;
  }

  .main-nav {
    width: 100%;
  }
}
</style>
