<template>
  <home-header></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icons :list="iconList"></home-icons>
  <home-recommend :list="recommendList"></home-recommend>
  <home-weekend :list="weekendList"></home-weekend>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import HomeIcons from "./components/HomeIcons.vue";
import HomeRecommend from "./components/HomeRecommend.vue";
import HomeWeekend from "./components/HomeWeekend.vue";
import {
  getSwiperList,
  getIconList,
  getRecommendList,
  getWeekendList,
} from "../../api/index.js";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  mounted() {
    getSwiperList().then((res) => {
      this.swiperList = res.list;
    });
    getIconList().then((res) => {
      this.iconList = res.list;
    });
    getRecommendList().then((res) => {
      this.recommendList = res.list;
    });
    getWeekendList().then((res) => {
      this.weekendList = res.list;
    });
  },
};
</script>
<style></style>
