<template lang="">
  <li class="dropdown-item">
    <router-link :to="to" class="nav-link">

      <slot></slot>
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'SDropdownItem',
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
};
</script>
