<template>
  <div
    class="dropdown-wrap"
    @mouseenter="hover ? (isShow = true) : null"
    @mouseleave="hover ? (isShow = false) : null"
    @click="!hover ? (isShow = !isShow) : null"
  >
    <s-button :variant="variant">{{ title }}</s-button>
    <transition :name="effect" duration="550">
      <div
        v-if="isShow"
        class="dropdown"
        :class="{
          'left-0': !right,
          'right-0': right,
        }"
      >
        <ul class="dropdown-menu">
          <s-dropdown-item>Component Test</s-dropdown-item>
          <s-dropdown-item>Component Test</s-dropdown-item>
          <s-dropdown-item>Component Test</s-dropdown-item>
          <s-dropdown-item>Component Test</s-dropdown-item>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';
import SButton from '../buttons/SButton.vue';
import SDropdownItem from './SDropdownItem.vue';
export default {
  components: { SButton, SDropdownItem },
  name: 'SDropdown',
  props: {
    hover: Boolean,
    title: String,
    right: {
      type: Boolean,
      default: false,
    },
    effect: {
      type: String,
      default: 'fade',
    },
    variant: {
      type: String,
      default: 'link',
    },
  },
  setup() {
    const isShow = ref(false);
    return { isShow };
  },
};
</script>
