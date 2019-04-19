<template>
  <div>
    <header>
      <span class="back" @click="back">
        <img class="arrow" src="../../images/down.png" alt="">
      </span>
      <span>集合</span>
    </header>
    <!-- 筛选条件 -->
    <div class="items-filter">
      <select>
        <option value="0">全部</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
    <!-- 列表 -->
    <div class="items" @click="navigateToDetail(1)">
      <!-- h5标签 figure来表示img -->
      <figure>
        <img class="portrait" src="https://geffoliu.cn/images/label.jpg" alt="">
        <!-- <p>qwe</p> -->
      </figure>
      <section>
        <h2>学习前端</h2>
        <p>分类：学习</p>
        <div class="more">
          <span class="details">详情</span>
          <img class="arrow" src="../../images/down.png" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Items extends Vue {
  private msg!: number;
  private data() {
    return {
      msg: 0,
    }
  }
  private back() {
    this.$router.back()
  }
  private navigateToDetail(id: number) {
    this.$router.push({
      path: '/Details',
      query: {
        id: id.toString(),
      },
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';

.items-filter {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}
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
    .more {
      @include right-bottom(2rem);
      display: flex;
      .details {
        line-height: 3rem;
      }
      .arrow {
        width: 3rem;
        height: 3rem;
        @include to-rotate(-90deg)
      }
    }
  }
}
</style>
