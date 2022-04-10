<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe685;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
@import '../../../assets/styles/mixins.styl'
.header
  position: relative
  overflow: hidden
  hl(.86rem)
  text-align: center
  color: #fff
  background: $bgcolorA
  font-size: .32rem
  .header-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>
