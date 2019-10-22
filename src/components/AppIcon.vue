<template>
  <svg class="fill-current">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script>
export default {
  name: 'AppIcon',

  props: ['icon'],
};
</script>
