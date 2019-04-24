<template>
  <div>
    <header>
      <span class="back" @click="back">
        <img class="arrow" src="../../images/down.png" alt="">
      </span>
      <span>创建分类</span>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class SelectType extends Vue {
  private msg!: number;
  private data() {
    return {
      msg: 0,
    }
  }
  private back() {
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
</style>
