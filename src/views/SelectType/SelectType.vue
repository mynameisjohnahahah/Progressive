<template>
  <div>
    <header>
      <span class="back" @click="back">
        <img class="arrow" src="../../images/down.png" alt="">
      </span>
      <span>实验分类</span>
    </header>
    <div class="item-type one">
      <icon class="icon" name="#icon-book-2" />
      <router-link to="/SpExp/行为实验">行为实验</router-link>
    </div>
    <div class="item-type two">
      <icon class="icon" name="#icon-crayons-1" />
      <router-link to="/SpExp/行为实验">行为实验</router-link>
    </div>
    <div class="item-type three">
      <icon class="icon" name="#icon-push-pin" />
      <router-link to="/SpExp/行为实验">行为实验</router-link>
    </div>
    <div class="item-type four">
      <icon class="icon" name="#icon-dna" />
      <router-link to="/SpExp/行为实验">行为实验</router-link>
    </div>
    <div class="item-type five">
      <icon class="icon" name="#icon-head-cross" />
      <router-link to="/SpExp/行为实验">行为实验</router-link>
    </div>
    <!-- 分类 -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/Icon.vue';
@Component({
  components: {
    Icon,
  },
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
header {
  height: 4.2rem;
  text-align: center;
  background-color: $theme-color;
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 2rem;
  position: relative;
  span {
    line-height: 4.2rem;
  }
  .back {
    position: absolute;
    top: 0;
    left: 1rem;
  }
}
.item-type {
  width: 90%;
  margin: 1.6rem auto;
  height: 5rem;
  text-align: center;
  border-radius: 0.6rem;
  position: relative;
  font-size: 1.6rem;
  @include shadow;
  &.one {
    background-color: $exp-one;
  }
  &.two {
    background-color: $exp-two;
  }
  &.three {
    background-color: $exp-three;
  }
  &.four {
    background-color: $exp-four;
  }
  &.five {
    background-color: $exp-five;
  }
  .icon {
    width: 2.2rem;
    @include left-top(0.6rem, 50%);
    transform: translateY(-80%);
  }
  a {
    display: inline-block;
    line-height: 5rem;
  }
}
</style>
