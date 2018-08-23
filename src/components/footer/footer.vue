<template>
  <div class="footer">
    <div class="content">
      <p>版本号：17.10.1A</p>
      <p>清影科技 copyright© 2017</p>
      <p>声明：本软件仅授权北京协和医院使用，其他医院使用本软件造成的后果本公司不承担任何责任。</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
    .content
      text-align center
      padding 10px
      p
        font-size $font-size-medium
        line-height 1.3rem
        color $color-text
</style>
