<template>
  <header>
    <nav class="bg-white dark:bg-gray-900">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/admin">Admin</RouterLink>
    </nav>
    <s-button @click="onClickButton" variant="primary mb-2" class="mb-5"
      >My Button
    </s-button>
  </header>
</template>

<script>
import SButton from '/@/components/buttons/SButton.vue';
export default {
  components: { SButton },
  name: 'TheNavbar',
  setup() {
    const onClickButton = () => {
      console.log('clicked!!');
    };
    return { onClickButton };
  },
};
</script>
