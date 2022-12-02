<template lang="">
  <ul
    class="dropdown-wrap nav-item"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
  >
    <s-dropdown-item v-if="type === 'link'" :to="to">
      {{ title }}
    </s-dropdown-item>
    <s-button v-if="type === 'button'" variant="link">
      <component :is="iconComponent" class="w-8 h-8 stroke-2" />
    </s-button>
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
import { ref, computed } from 'vue';
import {
  UserCircleIcon,
  WalletIcon,
  ShoppingBagIcon,
} from '@heroicons/vue/24/outline';
import SDropdownItem from './SDropdownItem.vue';
import SButton from '../buttons/SButton.vue';

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
    type: {
      type: String,
      default: 'link',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  components: {
    SDropdownItem,
    SButton,
    UserCircleIcon,
    WalletIcon,
    ShoppingBagIcon,
  },
  setup(props) {
    const isShow = ref(false);
    const iconComponent = computed(() => {
      return props.icon || '';
    });
    return { isShow, iconComponent };
  },
};
</script>
