<template>
  <label class="switch">
    <input type="checkbox" v-model="isChecked" />
  </label>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'SCheckbox',
  props: {
    switch: Boolean,
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    const isChecked = ref(false);
    return { isChecked };
  },
};
</script>
