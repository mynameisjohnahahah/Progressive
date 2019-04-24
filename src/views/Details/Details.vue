<template>
  <div>
    <header>
      <span class="back" @click="back">
        <img class="arrow" src="../../images/down.png" alt="">
      </span>
      <span>详情</span>
    </header>
    <div class="items" @click="navigateToDetail(1)">
      <!-- h5标签 figure来表示img -->
      <figure>
        <img class="portrait" src="https://geffoliu.cn/images/label.jpg" alt="">
        <!-- <p>qwe</p> -->
      </figure>
      <section>
        <h2>学习前端</h2>
        <p>分类：学习</p>
      </section>
    </div>
    <div class="content">
      这是内容呢~
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

.items {
  font-size: 1.1rem;
  @include fja(flex-start);
  border-bottom: 0.1rem solid #F7F2F2;
  figure {
    width: 4rem;
    text-align: center;
    .portrait {
      @include circular(2rem);
    }
    p {
      @include text-deal;
    }
  }
  section {
    flex-grow: 1;
    position: relative;
  }
}
.content {
  padding-top: 1rem;
  padding-left: 1rem;
}
</style>
