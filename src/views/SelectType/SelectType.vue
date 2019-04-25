<template>
  <div>
    <header>
      <span class="back" @click="back">
        <img class="arrow" src="../../images/down.png" alt="">
      </span>
      <span class="add" @click="showModalFunc">
        +
      </span>
      <span>实验分类</span>
    </header>
    <div v-if="JSON.stringify(items)!=='[]'">
      <div class="item-type one" v-for="(item, index) in items" :key="index">
        <icon class="icon" name="#icon-book-2" />
        <router-link to="/SpExp/行为实验">{{item.name}}</router-link>
      </div>
    </div>
    <div v-else class="items-else">暂无数据</div>
    <!-- modal -->
    <div v-show="showModal" ref="test">
      <div class="modal" @click="hiddenModal"></div>
      <div class="content">
        <h2>创建新分类</h2>
        <div class="name">
          <input type="text" v-model="typeName" placeholder="输入分类名称">
        </div>
        <div class="addButton" @click="addType">添加</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon/Icon.vue';
import { getTypeItems, createType } from '@/api/main';
@Component({
  components: {
    Icon,
  },
})
export default class SelectType extends Vue {
  private msg!: number;
  private showModal!: boolean;
  private typeName!: string;
  private items!: any[];
  private data() {
    return {
      msg: 0,
      showModal: false,
      typeName: '',
      items: [],
    }
  }
  private async created() {
    console.log(this.$store)
    this.getItems()
  }
  private back() {
    this.$router.back()
  }
  private NavtoCreate() {
    this.$router.push('/CreateType')
  }
  private showModalFunc() {
    this.showModal = true
  }
  private hiddenModal() {
    this.showModal = false
  }
  private async getItems() {
    const res = await getTypeItems()
    this.items = res.data
  }
  private async addType() {
    if (this.typeName === '') {
      alert('不能为空！')
      return
    }
    const res = await createType({name: this.typeName})
    if (res.msg === 'success' && res.code === 1) {
      this.typeName = ''
      this.showModal = false
      this.getItems()
    }
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
  .add {
    position: absolute;
    top: 0;
    right: 2rem;
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
.items-else {
  text-align: center;
  font-size: 15px;
}
.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: #fff;
    width: 17rem;
    height: 10rem;
    h2 {
      padding: 0;
      margin: 0;
      text-align: center;
      line-height: 3rem;
      border-bottom: 1px solid #000;
    }
    .name {
      text-align: center;
      input {
        width: 90%;
        padding: 0;
        margin-top: 1rem;
        border: 0;
        height: 2rem;
      }
    }
    .addButton {
      width: 100%;
      height: 3rem;
      background: #4988ff;
      color: #fff;
      text-align: center;
      line-height: 3rem;
      position: absolute;
      bottom: 0;
    }
  }
</style>
