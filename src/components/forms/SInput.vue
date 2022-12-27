<template>
  <input
    v-bind="$attrs"
    class="form-control"
    :type="type"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script>
export default {
  name: 'SInput',
  props: {
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        const allowed = [
          'text',
          'color',
          'checkbox',
          'radio',
          'password',
          'button',
          'image',
          'file',
        ];
        return allowed.includes(value);
      },
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  setup(props, { emit }) {
    const updateInput = (event) => {
      emit('update:modelValue', event.target.value);
    };
    return { updateInput };
  },
};
</script>
