<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe685;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      输入城市/景点/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe688;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"]),
  },
  mounted() {
    const storageCity = sessionStorage.getItem("city");
    if (storageCity) {
      this.$store.commit("changeCity", storageCity);
    }
  },
  methods: {
    ...mapMutations(["changeCity"]),
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
@import '../../../assets/styles/mixins.styl'
.header
  display: flex
  line-height: .86rem
  background: $bgcolorA
  color: $colorB
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    hl(.64rem)
    padding-left: .2rem
    margin-top: .12rem
    margin-left: .2rem
    background: #fff
    border-radius: .1rem
    color: $colorC
  .header-right
    float: right
    min-width: 1.04rem
    padding: 0 .1rem
    text-align: center
    color: $colorB
    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem
</style>
