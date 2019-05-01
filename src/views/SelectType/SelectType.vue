<template>
  <div>
    <header>
      <span class="back" @click="back">
        <img class="arrow" src="../../images/down.png" alt="">
      </span>
      <span class="add" @click="showModalFunc">
        +
      </span>
      <span>分类</span>
    </header>
    <div v-if="JSON.stringify(items)!=='[]'">
      <div class="item-type one" v-for="(item, index) in items" :key="index">
        <icon class="icon" name="#icon-book-2" />
        <router-link to="">{{item.name}}</router-link>
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
  @State((state) => state.selectType.items) private items!: SelectTypeState;
  private msg!: number;
  private showModal!: boolean;
  private typeName!: string;
  private data() {
    return {
      msg: 0,
      showModal: false,
      typeName: '',
    }
  }
  private async created() {
    this.getType()
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
  private async addType() {
    if (this.typeName === '') {
      alert('不能为空！')
      return
    }
    const res = await createType({name: this.typeName})
    if (res.msg === 'success' && res.code === 1) {
      this.typeName = ''
      this.showModal = false
      this.getType()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
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
    width: 90%;
    height: 13rem;
    h2 {
      padding: 0;
      margin: 0;
      text-align: center;
      line-height: 3rem;
      border-bottom: 1px solid #c3c3c3;
    }
    .name {
      text-align: center;
      height: 40%;
      input {
        width: 90%;
        padding: 0;
        margin-top: 5%;
        border: 0;
        height: 100%;
        border-color: #fff;
        outline: none;
        font-size: 23px;
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
