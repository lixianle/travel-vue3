<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/DetailHeader";
import DetailList from "./components/DetailList";
import { getDetailData } from "../../api/index.js";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: [],
    };
  },
  mounted() {
    getDetailData().then((res) => {
      this.sightName = res.sightName;
      this.bannerImg = res.bannerImg;
      this.gallaryImgs = res.gallaryImgs;
      this.list = res.categoryList;
    });
  },
};
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
