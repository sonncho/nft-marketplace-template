<template>
  <router-view v-slot="{ Component }">
    <!-- <transition name="fade-transform" mode="out-in"> -->
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'TheContent',
};
</script>
