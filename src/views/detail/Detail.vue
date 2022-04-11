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
// import { getDetailData } from "../../api/index.js";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: "大连圣亚海洋世界(AAAA景区)",
      bannerImg: "imgs/detail/detail-1.jpg",
      gallaryImgs: ["/imgs/detail/detail-1.jpg", "/imgs/detail/detail-2.jpg"],
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三馆联票",
              children: [
                {
                  title: "成人三馆联票 - 某一连锁店销售",
                },
              ],
            },
            {
              title: "成人五馆联票",
            },
          ],
        },
        {
          title: "学生票",
        },
        {
          title: "儿童票",
        },
        {
          title: "特惠票",
        },
      ],
    };
  },
  mounted() {
    // getDetailData().then((res) => {
    //   this.sightName = res.sightName;
    //   this.bannerImg = res.bannerImg;
    //   this.gallaryImgs = res.gallaryImgs;
    //   this.list = res.categoryList;
    // });
  },
};
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
