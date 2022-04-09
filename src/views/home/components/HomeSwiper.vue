<template>
  <div class="wrapper">
    <swiper
      v-if="showSwiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :loop="true"
      :autoplay="{ disableOnInteraction: false, delay: 3000 }"
      :pagination="{
        clickable: true,
      }"
    >
      <swiper-slide v-for="(item, index) of list" :key="index">
        <img :src="item" alt="" />
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper.min.css";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { computed } from "@vue/runtime-core";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const showSwiper = computed(() => {
      return props.list.length;
    });
    return {
      modules: [Navigation, Autoplay, Pagination],
      showSwiper,
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 60%
  background: #eee
  .swiper
    width: 100%
    height: 226px
    .swiper-slide img
      display: block
      width: 100%
      height: 100%
    .swiper-button-prev, .swiper-button-next
      color: #ccc

.wrapper >>> .swiper-pagination-bullet
  background: #fff
.wrapper >>> .swiper-pagination-bullet-active
  background: #eee
</style>
