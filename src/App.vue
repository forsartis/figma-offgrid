<template>
  <form class="m-0 font-inter text-gray-800">
    <div class="py-2">
      <div class="px-2 flex items-center">
        <icon-input ref="rowInput" icon="rows" v-model="rows" />
        <icon-input icon="columns" v-model="columns" />
      </div>
      <div class="px-2 flex items-center">
        <icon-input icon="h-space" v-model="hSpace" />
        <icon-input icon="v-space" v-model="vSpace" />
      </div>
      <div class="px-2 flex items-center">
        <icon-input icon="h-offset" v-model="hOffset" />
        <icon-input icon="v-offset" v-model="vOffset" />
      </div>
    </div>
    <div class="p-3 flex justify-end border-t">
      <button class="btn btn-primary" @click="createGrid">Create</button>
    </div>
    <app-icons />
  </form>
</template>

<script>
import AppIcons from './components/AppIcons';
import IconInput from './components/IconInput';

export default {
  components: {
    AppIcons,
    IconInput,
  },
  data() {
    return {
      rows: 6,
      columns: 6,
      hSpace: 0,
      vSpace: 0,
      hOffset: 0,
      vOffset: 0,
    };
  },
  mounted() {
    this.$refs.rowInput.$el.focus();
  },
  methods: {
    createGrid() {
      const pluginMessage = {
        type: 'create-grid',
        rows: parseInt(this.rows, 10),
        columns: parseInt(this.columns, 10),
        hSpace: parseFloat(this.hSpace),
        vSpace: parseFloat(this.vSpace),
        hOffset: parseFloat(this.hOffset),
        vOffset: parseFloat(this.vOffset),
      };
      parent.postMessage({ pluginMessage }, '*');
    },
  },
};
</script>
