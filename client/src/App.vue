<template>
  <router-view></router-view>
</template>
<script setup lang="ts">

</script>
<style lang="less">
#app {
  margin: 0 !important;
  padding: 0 !important;
  max-width: none !important;
  display: flex !important;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;

  a {
    color: var(--td-brand-color);

    &:hover,
    &:focus {
      color: rgba(0, 82, 217, .6);
      background: none !important;
    }
  }

  .t-dialog {
    border: none;
    border-radius: 4px;
  }
}
</style>
