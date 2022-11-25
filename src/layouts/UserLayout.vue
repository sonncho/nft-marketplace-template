<template>
  <section class="user">
    <the-navbar />
    <the-content class="content" />
    <the-footer />
  </section>
</template>

<script>
import TheNavbar from '/@compo/common/TheNavbar.vue';
import TheContent from '/@compo/common/TheContent.vue';
import TheFooter from '/@compo/common/TheFooter.vue';

export default {
  components: { TheNavbar, TheContent, TheFooter },
  name: 'UserLayout',
};
</script>
