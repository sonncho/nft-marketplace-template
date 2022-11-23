<template>
  <component :is="layout">
    <router-view :key="$route.fullPath" />
  </component>
</template>

<script>
import DefaultLayout from '/@/layouts/DefaultLayout.vue';
import AdminLayout from '/@/layouts/AdminLayout.vue';
import UserLayout from '/@/layouts/UserLayout.vue';

export default {
  components: { DefaultLayout, AdminLayout, UserLayout },
  computed: {
    layout() {
      return this.$route.meta?.layout || 'DefaultLayout';
    },
  },
};
</script>
