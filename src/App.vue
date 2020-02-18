<template>
  <form class="m-0 font-inter text-gray-800">
    <div class="py-2">
      <div class="px-2 flex items-center">
        <icon-input
          ref="rowInput"
          icon="rows"
          v-model="rows"
          min="1"
          @blur="rows = greaterZero(rows)"
        />
        <icon-input
          icon="columns"
          v-model="columns"
          min="1"
          @blur="columns = greaterZero(columns)"
        />
      </div>
      <div class="px-2 flex items-center">
        <icon-input icon="h-space" v-model="hSpace" @blur="hSpace = notNull(hSpace)" />
        <icon-input icon="v-space" v-model="vSpace" @blur="vSpace = notNull(vSpace)" />
      </div>
      <div class="px-2 flex items-center">
        <icon-input icon="h-offset" v-model="hOffset" @blur="hOffset = notNull(hOffset)" />
        <icon-input icon="v-offset" v-model="vOffset" @blur="vOffset = notNull(vOffset)" />
      </div>
    </div>
    <div class="p-3 flex justify-end border-t">
      <button class="btn btn-primary" @click="createGrid" formnovalidate="formnovalidate">Create</button>
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
        rows: this.greaterZero(this.rows),
        columns: this.greaterZero(this.columns),
        hSpace: this.notNull(this.hSpace),
        vSpace: this.notNull(this.vSpace),
        hOffset: this.notNull(this.hOffset),
        vOffset: this.notNull(this.vOffset),
      };
      parent.postMessage({ pluginMessage }, '*');
    },
    greaterZero(value) {
      if (value > 0) return value;
      return 1;
    },
    notNull(value) {
      if (value) return value;
      return 0;
    },
  },
};
</script>
