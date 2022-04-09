<template>
  <div>
    <div class="header-abs" v-show="showAbs" @click="toHome">
      <div class="iconfont header-abs-back">&#xe685;</div>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <div class="iconfont header-fixed-back" @click="toHome">&#xe685;</div>
    </div>
  </div>
</template>

<script>
import { throttle } from "../../../utils/throttle.js";
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    handleScroll() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", throttle(this.handleScroll, 200));
  },
  unmounted() {
    // window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", throttle(this.handleScroll, 200));
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
@import '../../../assets/styles/mixins.styl'
.header-abs
  display: inline-block
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  line-height: .8rem
  text-align: center
  border-radius: .4rem
  background: rgba(0, 0, 0, .8)
  .header-abs-back
    font-size: .4rem
    color: #fff
.header-fixed
  position: fixed
  top: 0
  left: 0
  right: 0
  hl(.86rem)
  text-align: center
  color: #fff
  background: $bgcolorA
  font-size: .32rem
  z-index: 2
  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>
