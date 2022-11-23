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
    sm: Boolean,
    md: {
      type: Boolean,
      default: true,
    },
    lg: Boolean,
    pill: Boolean,
  },
  setup(props) {
    const button = ref(null);
    let classes = ['btn'];
    if (props.variant) {
      const variant = props.variant.split(' ');
      variant[0] = `btn-${variant[0]}`;
      classes.push(...variant);
    }
    if (props.pill) classes.push('btn-pill');

    if (props.sm) classes.push('btn-sm');
    else if (props.lg) classes.push('btn-lg');
    else classes.push('btn-md');

    console.log('classes:', classes);
    return { classes, button };
  },
};
</script>
