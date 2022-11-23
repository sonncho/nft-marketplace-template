<template>
  <button v-bind="$attrs" ref="button" :type="type" :class="classes">
    <slot />
  </button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'SButton',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: (value) => {
        const allowed = ['button', 'submit', 'reset'];
        return allowed.includes(value);
      },
    },
    variant: {
      type: String,
      default: 'secondary',
    },
    pill: Boolean,
  },
  setup(props) {
    const button = ref(null);
    const classes = ['btn'];
    if (props.variant) {
      const variant = props.variant.split();
      variant[0] = `btn-${variant}`;
      classes.push(variant);
    }
    console.log(classes);
    return { classes, button };
  },
};
</script>
