<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'App'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/variable.styl"
  #app
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto
</style>
