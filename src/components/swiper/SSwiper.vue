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
    <swiper-slide>
      <div class="relative swiper-box">
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        <div class="swiper-content absolute bottom-0">
          <router-link to="/assets" class="block">
            <h3 class="text-[30px]">Title</h3>
            <p class="text-gray-200">owner</p>
          </router-link>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
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

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      // modules: [EffectCube, Pagination, Autoplay],
      modules: [EffectCube, Pagination],
    };
  },
};
</script>
