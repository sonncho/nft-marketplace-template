<template>
  <div
    class="dropdown"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
  >
    <s-button variant="link">My Dropdown Menu</s-button>
    <transition name="slide">
      <ul v-if="isShow" class="dropdown-menu">
        <li class="dropdown-item">
          <router-link to="/about">submenu 123</router-link>
        </li>
        <li class="dropdown-item"><a href="#">submenu 123</a></li>
        <li class="dropdown-item"><a href="#">submenu 123</a></li>
        <li class="dropdown-item"><a href="#">submenu 123</a></li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';
import SButton from '../buttons/SButton.vue';
export default {
  components: { SButton },
  name: 'SDropdown',
  props: {
    hover: Boolean,
  },
  setup() {
    const isShow = ref(false);
    return { isShow };
  },
};
</script>
