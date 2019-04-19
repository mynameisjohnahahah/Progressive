<template>
  <div>
    <header>
      <span class="back" @click="back">
        <img class="arrow" src="../../images/down.png" alt="">
      </span>
      <span>详情</span>
    </header>
    <div>
      qweqwe
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Details extends Vue {
  private back() {
    this.$router.back()
  }
  private created() {
    const id: number = Number(this.$route.query.id)
    console.log(id)
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
</style>
