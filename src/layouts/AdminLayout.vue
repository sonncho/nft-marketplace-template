<template>
  <div class="admin">
    <the-sidebar />
    <the-content />
  </div>
</template>

<script>
import TheContent from '../components/common/TheContent.vue';
import TheSidebar from '../components/common/TheSidebar.vue';
export default {
  components: { TheSidebar, TheContent },
  name: 'AdminLayout',
};
</script>
