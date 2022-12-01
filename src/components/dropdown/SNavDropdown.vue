<template lang="">
  <ul class="dropdown-wrap nav-item" @mouseenter="isShow = true" @mouseleave="isShow = false">
    <s-dropdown-item :to="to">{{ title }}</s-dropdown-item>
    <transition name="fade-up">
      <li v-if="isShow" class="dropdown nav-dropdown">
        <ul class="dropdown-menu">
          <slot></slot>
        </ul>
      </li>
    </transition>
  </ul>
</template>
<script>
import { ref } from 'vue';
import SDropdownItem from './SDropdownItem.vue';
export default {
  name: 'SNavDropdown',
  props: {
    to: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  components: {
    SDropdownItem,
  },
  setup() {
    const isShow = ref(false);
    return { isShow };
  },
};
</script>
