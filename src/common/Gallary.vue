<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :loop="true"
        pagination
      >
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper.min.css";
import { Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
export default {
  name: "CommonGallary",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-pagination-bullet
  background-color: #fff
.container
  display: flex
  flex-direction: column
  justify-content: center
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  z-index: 99
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 60%
    background: #fff
    .swiper
      height: 226px
      .gallary-img
        width: 100%
        height: 100%
</style>
