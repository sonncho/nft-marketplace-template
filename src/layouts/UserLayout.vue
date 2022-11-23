<template>
  <div class="user">
    <the-navbar />
    <the-content />
  </div>
</template>

<script>
import TheNavbar from '../components/common/TheNavbar.vue';
import TheContent from '../components/common/TheContent.vue';
export default {
  components: { TheNavbar, TheContent },
  name: 'UserLayout',
};
</script>
