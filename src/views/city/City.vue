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
      cities: {},
      hotCities: [],
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
