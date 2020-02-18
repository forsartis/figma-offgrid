<template>
  <label class="input">
    <span class="flex items-center justify-center w-8 text-gray-500">
      <app-icon :icon="icon" class="w-6 h-6" />
    </span>
    <input
      type="number"
      :min="min"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
      class="w-12 h-7 bg-transparent focus:outline-none appearance-none"
    />
  </label>
</template>

<script>
import AppIcon from './AppIcon';

export default {
  components: {
    AppIcon,
  },

  props: ['icon', 'value', 'min'],
};
</script>
