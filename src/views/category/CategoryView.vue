<template lang="">
  <div>This is Category "{{ $route.params.name }}"</div>
</template>
<script>
import { onMounted } from 'vue';
export default {
  name: 'CategoryView',
  setup(props, context) {
    onMounted(() => {
      console.log(context, props);
    });
  },
};
</script>
<style lang=""></style>
