<template>
  <div id="app">
    <!-- shell -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import Icon from '@/components/Icon/Icon.vue';
import { getTypeItems, createType } from '@/api/main';
import { GET__TYPEITEMS } from '@/store/selectType/type';
import { SelectTypeState } from '@/store/interface/SelectType'
@Component({
  components: {
    Icon,
  },
})
export default class SelectType extends Vue {
  @Action(GET__TYPEITEMS) private getType!: () => never;
  private async created() {
    this.getType()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
