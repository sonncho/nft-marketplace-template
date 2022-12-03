<template>
  <main>
    <div class="container mx-auto px-2 :md:px-4 pt-[30px]">
      <div class="lg:grid lg:grid-cols-2 gap-3">
        <div class="self-center">
          <div
            class="inline-block border-2 border-gray-200 py-3 px-6 rounded-full mb-5 text-indigo-500"
          >
            GANO NFT Marketplace
          </div>
          <h3 class="text-[70px] font-extrabold">
            Search your rare NFT's by world class artists
          </h3>
          <p>
            Where Bitcoin was hailed as the digital answer to currency, NFTs are
            now being touted as the digital answer to collectables.
          </p>
        </div>
        <div>
          <div class="p-12">
            <s-swiper effect="cube" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import SSwiper from '/@compo/swiper/SSwiper.vue';

export default {
  name: 'HomeView',
  components: {
    SSwiper,
  },
};
</script>
