<template>
  <main>
    <BeakerIcon class="h-6 w-6 text-blue-500" />
    <s-dropdown />
    <p class="text-blue-400">tailwindCss 적용 블루</p>

    <!-- <div class="dropdown">
      <s-button
        type="button"
        variant="link"
        class="flex items-center"
        @click="toggleDropdown"
      >
        MyDropdown <ChevronDownIcon class="text-gray-900 h-3 ml-2" />
      </s-button>
      <transition name="slide">
        <ul v-if="isDropdown" class="dropdown-menu right-0">
          <li class="dropdown-item"><a href="">Sub Menu 1</a></li>
          <li class="dropdown-item"><a href="">Sub Menu 2</a></li>
          <li class="dropdown-item"><a href="">Sub Menu 3</a></li>
          <li class="dropdown-item"><a href="">Sub Menu 4</a></li>
        </ul>
      </transition>
    </div> -->
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import { BeakerIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';
import SButton from '../components/buttons/SButton.vue';
import SDropdown from '../components/dropdown/SDropdown.vue';

export default {
  components: { BeakerIcon, ChevronDownIcon, SButton, SDropdown },
  setup() {
    const isDropdown = ref(false);
    const toggleDropdown = () => {
      isDropdown.value = !isDropdown.value;
    };
    return { isDropdown, toggleDropdown };
  },
};
</script>
