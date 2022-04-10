const mutations = {
  changeCity(state, city) {
    state.city = city;
    sessionStorage.setItem("city", city);
  },
};

export default mutations;
