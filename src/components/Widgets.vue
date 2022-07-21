<template>
<ul class="shape">
  <li v-for="(weather, index) in content" :key="index" class="weathers">
    <span class="time">{{weather.dt_txt}}</span>
    <span><img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="1"/></span>
    <span class="degrees">
      <span>{{weather.main.temp.toFixed(0)}}</span><span class="santigrat">°C</span>
    </span>
  </li>
  </ul>
</template>

<script>
export default {
  name: "Widgets",
  props: ["content"]
};
</script>