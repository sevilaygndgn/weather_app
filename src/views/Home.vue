<template>
  <div class="container" v-if="getWeather && getWeather.city">
    <div class="wrapper">
      <div class="header">
        <input
          class="search-bar"
          @input="searchWeather"
          placeholder="Type in the city..."
        />
        <button class="search-button">Search</button>
        <div class="location-button">
          <img src="../assets/images/icons/map.svg" alt="map" />
        </div>
      </div>
      <div class="top">
        <div class="city">{{ getWeather.city.name }}</div>
        <div class="date">
          <span>Last updated</span>
          <span>{{ getWeather.list[0].dt_txt }}</span>
        </div>
      </div>

      <div class="text">{{ getWeather.list[0].weather.description }}</div>

      <div class="middle">
        <div class="weather">
          <span
            ><img
              :src="`http://openweathermap.org/img/wn/${getWeather.list[0].weather.icon}@2x.png`"
              alt="#"
          /></span>
          <span class="temp">{{
            getWeather.list[0].main.temp.toFixed(0)}}</span>
          <div class="degree">
            <span class="santigrat">°C</span>
            <span class="line">|</span>
            <span class="fahrenheit">°F</span>
          </div>
        </div>
        <div class="details">
          <span>Humidty: {{ getWeather.list[0].main.humidity }}</span>
          <span
            >Feels like:
            {{ getWeather.list[0].main.feels_like.toFixed(0) }}</span
          >
          <span>Air pressure: {{ getWeather.list[0].main.pressure }}</span>
        </div>
      </div>
      <div class="bottom">
        <div class="proposal">Check the forecast for the upcoming hours</div>

        <Widgets :content="getWeather.list" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Widgets from "../components/Widgets";
export default {
  name: "Home",
  components: {
    Widgets,
  },
  data() {
    return {
      debounce: null,
      city: "istanbul",
    };
  },
  created() {
    this.fetchWeather(this.city);
  },
  methods: {
    searchWeather(event) {
      clearTimeout(this.debounce),
        (this.debounce = setTimeout(() => {
          console.log(event.target.value);
          this.fetchWeather(event.target.value);
        }, 600));
    },
    ...mapActions(["fetchWeather"]),
  },
  computed: {
    ...mapGetters(["getWeather"]),
  },
};
</script>
