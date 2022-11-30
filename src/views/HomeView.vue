<template>
  <main>
    <BeakerIcon class="h-6 w-6 text-blue-500" />
    <div class="flex">
      <div>
        <p>right hover default:fade</p>
        <s-dropdown title="dropdown1" variant="primary" right hover />
      </div>
      <div>
        <p>bounce default: left</p>
        <s-dropdown title="dropdown2" effect="bounce" />
      </div>
      <div>
        <p>slide left</p>
        <s-dropdown title="dropdown3" effect="slide" left />
      </div>
      <div>
        <p>fade-up hover</p>
        <s-dropdown title="dropdown4" effect="fade-up" hover />
      </div>
    </div>
    <p class="text-blue-400">tailwindCss 적용 블루</p>
  </main>
</template>

<script>
import { ref } from 'vue';
import { BeakerIcon } from '@heroicons/vue/24/solid';
import SDropdown from '../components/dropdown/SDropdown.vue';

export default {
  components: { BeakerIcon, SDropdown },
  setup() {
    const isDropdown = ref(false);
    const toggleDropdown = () => {
      isDropdown.value = !isDropdown.value;
    };
    return { isDropdown, toggleDropdown };
  },
};
</script>
