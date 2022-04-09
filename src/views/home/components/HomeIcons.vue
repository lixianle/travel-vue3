<template>
  <div class="icons">
    <swiper
      :initialSlide="1"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
    >
      <swiper-slide v-for="(item, index) of pages" :key="index">
        <div class="icon" v-for="subitem of item" :key="subitem.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="subitem.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{ subitem.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper.min.css";
export default {
  name: "HomeIcons",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    list: {
      type: Array,
    },
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
@import '../../../assets/styles/mixins.styl'
.icons >>> .swiper-slide
  height: 0
  padding-bottom: 50%
  background-color: #eee
.icons
  margin-top:.1rem
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        height: 100%
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      hl(.44rem)
      text-align: center
      color: $colorA
      ellipsis()
</style>
