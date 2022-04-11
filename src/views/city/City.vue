<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script type="text/javascript">
import CityHeader from "./components/CityHeader";
import CitySearch from "./components/CitySearch";
import CityList from "./components/CityList";
import CityAlphabet from "./components/CityAlphabet";
import { getCities, getHotCities } from "../../api/index.js";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {
        A: [
          {
            id: 56,
            spell: "aba",
            name: "阿坝",
          },
          {
            id: 57,
            spell: "akesu",
            name: "阿克苏",
          },
          {
            id: 58,
            spell: "alashanmeng",
            name: "阿拉善盟",
          },
          {
            id: 59,
            spell: "aletai",
            name: "阿勒泰",
          },
          {
            id: 60,
            spell: "ali",
            name: "阿里",
          },
          {
            id: 61,
            spell: "ankang",
            name: "安康",
          },
          {
            id: 62,
            spell: "anqing",
            name: "安庆",
          },
          {
            id: 63,
            spell: "anshan",
            name: "鞍山",
          },
          {
            id: 64,
            spell: "anshun",
            name: "安顺",
          },
          {
            id: 65,
            spell: "anyang",
            name: "安阳",
          },
          {
            id: 338,
            spell: "acheng",
            name: "阿城",
          },
          {
            id: 339,
            spell: "anfu",
            name: "安福",
          },
          {
            id: 340,
            spell: "anji",
            name: "安吉",
          },
          {
            id: 341,
            spell: "anning",
            name: "安宁",
          },
          {
            id: 342,
            spell: "anqiu",
            name: "安丘",
          },
          {
            id: 343,
            spell: "anxi",
            name: "安溪",
          },
          {
            id: 344,
            spell: "anyi",
            name: "安义",
          },
          {
            id: 345,
            spell: "anyuan",
            name: "安远",
          },
        ],
        B: [
          {
            id: 1,
            spell: "beijing",
            name: "北京",
          },
          {
            id: 66,
            spell: "baicheng",
            name: "白城",
          },
          {
            id: 67,
            spell: "baise",
            name: "百色",
          },
          {
            id: 68,
            spell: "baishan",
            name: "白山",
          },
          {
            id: 69,
            spell: "baiyin",
            name: "白银",
          },
          {
            id: 70,
            spell: "bangbu",
            name: "蚌埠",
          },
          {
            id: 71,
            spell: "baoding",
            name: "保定",
          },
          {
            id: 72,
            spell: "baoji",
            name: "宝鸡",
          },
          {
            id: 73,
            spell: "baoshan",
            name: "保山",
          },
          {
            id: 74,
            spell: "baotou",
            name: "包头",
          },
          {
            id: 75,
            spell: "bayannaoer",
            name: "巴彦淖尔",
          },
          {
            id: 76,
            spell: "bayinguoleng",
            name: "巴音郭楞",
          },
          {
            id: 77,
            spell: "bazhong",
            name: "巴中",
          },
          {
            id: 78,
            spell: "beihai",
            name: "北海",
          },
          {
            id: 79,
            spell: "benxi",
            name: "本溪",
          },
          {
            id: 80,
            spell: "bijie",
            name: "毕节",
          },
          {
            id: 81,
            spell: "binzhou",
            name: "滨州",
          },
          {
            id: 82,
            spell: "boertala",
            name: "博尔塔拉",
          },
          {
            id: 83,
            spell: "bozhou",
            name: "亳州",
          },
          {
            id: 346,
            spell: "baoying",
            name: "宝应",
          },
          {
            id: 347,
            spell: "bayan",
            name: "巴彦",
          },
          {
            id: 348,
            spell: "binhai",
            name: "滨海",
          },
          {
            id: 349,
            spell: "binxian",
            name: "宾县",
          },
          {
            id: 350,
            spell: "binyang",
            name: "宾阳",
          },
          {
            id: 351,
            spell: "bishan",
            name: "璧山",
          },
          {
            id: 352,
            spell: "boai",
            name: "博爱",
          },
          {
            id: 353,
            spell: "boluo",
            name: "博罗",
          },
          {
            id: 354,
            spell: "boxing",
            name: "博兴",
          },
        ],
      },
      hotCities: [
        {
          id: 1,
          spell: "beijing",
          name: "北京",
        },
        {
          id: 3,
          spell: "shanghai",
          name: "上海",
        },
        {
          id: 47,
          spell: "xian",
          name: "西安",
        },
        {
          id: 239,
          spell: "sanya",
          name: "三亚",
        },
        {
          id: 188,
          spell: "lijiang",
          name: "丽江",
        },
        {
          id: 125,
          spell: "guilin",
          name: "桂林",
        },
      ],
      letter: "",
    };
  },
  methods: {
    handleLetterChange(letter) {
      this.letter = letter;
    },
  },
  mounted() {
    getCities().then((res) => {
      this.cities = res.cities;
    });
    getHotCities().then((res) => {
      this.hotCities = res.list;
    });
  },
};
</script>

<style lang="stylus" scoped></style>
