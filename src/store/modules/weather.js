import axios from "axios";
const state = {
  weatherStates: null,
};
const getters = {
  getWeather: (state) => state.weatherStates,
};
const mutations = {
  setWeather: (state, weather) => {
    state.weatherStates = weather;
  },
};
const actions = {
  fetchWeather: async ({ commit }, value) => {
    const client = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });
    const response = await client.get(`?q=${value}&units=metric&appid=21fcc2e96a521ba61b307705c1e0685e&cnt=5`);
    console.log(response)
    commit("setWeather", response.data);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
