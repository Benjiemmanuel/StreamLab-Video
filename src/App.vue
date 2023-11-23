<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import WelcomePage from "@/views/WelcomePage.vue";
export default {
  components: {
    WelcomePage,
  },
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>