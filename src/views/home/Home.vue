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
// import {
//   getSwiperList,
//   getIconList,
//   getRecommendList,
//   getWeekendList,
// } from "../../api/index.js";

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
      swiperList: [
        "imgs/swiper/swiper-1.jpg",
        "imgs/swiper/swiper-2.jpg",
        "imgs/swiper/swiper-3.jpg",
        "imgs/swiper/swiper-4.jpg",
        "imgs/swiper/swiper-5.jpg",
      ],
      iconList: [
        {
          id: "0001",
          imgUrl: "imgs/icon/icon-1.png",
          desc: "景点门票",
        },
        {
          id: "0002",
          imgUrl: "imgs/icon/icon-2.png",
          desc: "滑雪季",
        },
        {
          id: "0003",
          imgUrl: "imgs/icon/icon-3.png",
          desc: "泡温泉",
        },
        {
          id: "0004",
          imgUrl: "imgs/icon/icon-4.png",
          desc: "动植园",
        },
        {
          id: "0005",
          imgUrl: "imgs/icon/icon-5.png",
          desc: "游乐园",
        },
        {
          id: "0006",
          imgUrl: "imgs/icon/icon-6.png",
          desc: "必游榜单",
        },
        {
          id: "0007",
          imgUrl: "imgs/icon/icon-7.png",
          desc: "演出",
        },
        {
          id: "0008",
          imgUrl: "imgs/icon/icon-8.png",
          desc: "城市观光",
        },
        {
          id: "0009",
          imgUrl: "imgs/icon/icon-9.png",
          desc: "一日游",
        },
      ],
      recommendList: [
        {
          id: "0001",
          imgUrl: "imgs/recommend/rem-1.jpg",
          title: "故宫",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范",
        },
        {
          id: "0002",
          imgUrl: "imgs/recommend/rem-2.jpg",
          title: "南山滑雪场",
          desc: "北京专业级滑雪圣地",
        },
        {
          id: "0003",
          imgUrl: "imgs/recommend/rem-3.jpg",
          title: "北京天安门",
          desc: "我爱北京天安门，天安门上太阳升",
        },
        {
          id: "0004",
          imgUrl: "imgs/recommend/rem-4.jpg",
          title: "水立方",
          desc: "中国的荣耀，阳光下的晶莹水滴",
        },
        {
          id: "0005",
          imgUrl: "imgs/recommend/rem-5.jpg",
          title: "温都水城养生馆",
          desc: "各种亚热带植物掩映其间仿佛置身热带雨林",
        },
      ],
      weekendList: [
        {
          id: "0001",
          imgUrl: "imgs/weekend/weekend-1.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天",
        },
        {
          id: "0002",
          imgUrl: "imgs/weekend/weekend-2.jpg",
          title: "北京必游TOP10",
          desc: "来北京必去的景点非这些地方莫属",
        },
        {
          id: "0003",
          imgUrl: "imgs/weekend/weekend-3.jpg",
          title: "寻找北京的皇城范儿",
          desc: "数百年的宫廷庙宇，至今依旧威严霸气",
        },
        {
          id: "0004",
          imgUrl: "imgs/weekend/weekend-4.jpg",
          title: "学生最爱的博物馆",
          desc: "周末干嘛？北京很多博物馆已经免费开放啦",
        },
        {
          id: "0005",
          imgUrl: "imgs/weekend/weekend-5.jpg",
          title: "儿童剧场，孩子的乐园",
          desc: "带宝贝观看演出，近距离体验艺术的无穷魅力",
        },
      ],
    };
  },
  mounted() {
    // getSwiperList().then((res) => {
    //   this.swiperList = res.list;
    // });
    // getIconList().then((res) => {
    //   this.iconList = res.list;
    // });
    // getRecommendList().then((res) => {
    //   this.recommendList = res.list;
    // });
    // getWeekendList().then((res) => {
    //   this.weekendList = res.list;
    // });
  },
};
</script>
<style></style>
