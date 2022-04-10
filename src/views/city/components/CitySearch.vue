<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: {
      type: Object,
    },
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
      scroll: null,
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  mounted() {
    this.init();
  },
  updated() {
    this.init();
  },
  beforeUnmount() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.search, {
        click: true,
      });
    },
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"]),
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.search
  height: .72rem
  padding: 0 .1rem
  background: $bgcolorA
  .search-input
    box-sizing: border-box
    width: 100%
    height: .62rem
    padding: 0 .1rem
    line-height: .62rem
    text-align: center
    border-radius: .06rem
    color: #666
.search-content
  overflow: hidden
  position: absolute
  top: 1.58rem
  bottom: 0
  left: 0
  right: 0
  background: #eee
  z-index: 1
  .search-item
    line-height: .62rem
    padding-left: .26rem
    background: #fff
    color: #666
</style>
