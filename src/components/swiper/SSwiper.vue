<template>
  <swiper
    :effect="'cube'"
    :grabCursor="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :autoplay="{
      display: 3000,
      disableOnInteraction: false,
    }"
    :pagination="true"
    :modules="modules"
    class="cube-swiper"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <div class="relative swiper-box">
        <img :src="item.imgSrc" />
        <div class="swiper-content absolute bottom-0">
          <router-link to="/assets" class="block">
            <h3 class="text-[30px]">{{ item.title }}</h3>
            <p class="text-gray-200">{{ item.owner }}</p>
          </router-link>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
// import { EffectCube, Pagination, Autoplay } from "swiper";
import { EffectCube, Pagination } from 'swiper';
import { ref } from 'vue';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const IMGURL = 'https://swiperjs.com/demos/images/';
    const items = [
      { index: 0, title: 'Title1', owner: 'Owner Name1', imgSrc: `${IMGURL}nature-1.jpg` },
      { index: 1, title: 'Title2', owner: 'Owner Name2', imgSrc: `${IMGURL}nature-2.jpg` },
      { index: 2, title: 'Title3', owner: 'Owner Name3', imgSrc: `${IMGURL}nature-3.jpg` },
      { index: 3, title: 'Title4', owner: 'Owner Name4', imgSrc: `${IMGURL}nature-4.jpg` },
    ];
    return {
      // modules: [EffectCube, Pagination, Autoplay],
      items,
      modules: [EffectCube, Pagination],
    };
  },
};
</script>
