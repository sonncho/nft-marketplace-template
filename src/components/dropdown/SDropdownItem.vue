<template lang="">
  <li class="dropdown-item">
    <router-link :to="to" class="nav-link">
      <component :is="iconComponent" class="h-4 inline mr-2" />
      <slot></slot>
    </router-link>
  </li>
</template>
<script>
import { computed } from 'vue';
import {
  RectangleStackIcon,
  QueueListIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  MoonIcon,
} from '@heroicons/vue/24/outline';
export default {
  name: 'SDropdownItem',
  components: {
    RectangleStackIcon,
    QueueListIcon,
    PaintBrushIcon,
    MusicalNoteIcon,
    MoonIcon,
  },
  props: {
    to: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const iconComponent = computed(() => {
      return props.icon || null;
    });
    return { iconComponent };
  },
};
</script>
