<template>
  <div>
    <header>
      <span class="back" @click="back">
        <img class="arrow" src="../../images/down.png" alt="">
      </span>
      <span>集合</span>
      <span class="add" @click="showModalFunc">
        +
      </span>
    </header>
    <!-- 筛选条件 -->
    <div class="items-filter">
      <div class=" posirelative select-out-div">
        <select class="m-wrap  "  style="width: 180px; padding: 2px 0;">
            <option value="0">采购</option>
            <option value="1">返货</option>
            <option value="2">移库入货</option>
        </select>
        <span class="select-hide-span" >
        <b class="select-show-b"  ></b></span>
      </div>
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
    <!-- modal -->
    <div v-show="showModal" ref="test">
      <div class="modal" @click="hiddenModal"></div>
      <div class="content">
        <h2>创建新任务</h2>
        <div class="name">
          <input type="text" v-model="typeName" placeholder="输入任务名称">
        </div>
        <div class="info">
          <input type="textarea" v-model="typeinfo" placeholder="输入任务详细">
        </div>
        <div class="items-filter">
          <div class="posirelative">
            <select class="m-wrap">
              <option value="0">采购</option>
              <option value="1">返货</option>
              <option value="2">移库入货</option>
            </select>
            <span class="select-hide-span" >
            <b class="select-show-b"  ></b></span>
          </div>
        </div>
        <div class="addButton" @click="addType">添加</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { GET__TYPEITEMS } from '@/store/selectType/type';
import { SelectTypeState } from '@/store/interface/SelectType'
import { TypeItems } from './interface'
@Component({})
export default class Items extends Vue {
  @Action(GET__TYPEITEMS) private getType!: () => never;
  @State((state) => state.selectType.items) private items!: SelectTypeState;
  private msg!: number;
  private showModal!: boolean;
  private typeName!: string;
  private typeinfo!: string;
  private typeItem!: TypeItems;
  private data() {
    return {
      msg: 0,
      showModal: false,
      typeinfo: '',
      typeName: ''
    }
  }
  private back() {
    this.$router.back()
  }
  private showModalFunc() {
    this.showModal = true
  }
  private hiddenModal() {
    this.showModal = false
  }
  private async addType() {
    console.log(this.typeItem)
    if (this.typeinfo === '') {
      alert('不能为空！')
      return
    }
    // const res = await createType({name: this.typeName})
    // if (res.msg === 'success' && res.code === 1) {
    //   this.typeName = ''
    //   this.showModal = false
    //   this.getType()
    // }
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
  .posirelative {
    position: relative;
    width: 160px;
    overflow: hidden;
    .m-wrap {
      background-color: #ffffff;
      background-image: none !important;
      filter: none !important;
      border: 1px solid #e5e5e5;
      outline: none;
      height: 25px !important;
      line-height: 25px;
      width: 180px;
      padding: 2px 0;
    }
  }
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
  height: 30rem;
  h2 {
    padding: 0;
    margin: 0;
    text-align: center;
    line-height: 3rem;
    border-bottom: 1px solid #c3c3c3;
  }
  .name {
    text-align: center;
    height: 5rem;
    border-bottom: 1px solid #bbb;
    input {
      width: 90%;
      padding: 0;
      border: 0;
      height: 100%;
      border-color: #fff;
      outline: none;
      font-size: 20px;
    }
  }
  .info {
    text-align: center;
    height: 5rem;
    border-bottom: 1px solid #bbb;
    input {
      width: 90%;
      padding: 0;
      border: 0;
      height: 100%;
      border-color: #fff;
      outline: none;
      font-size: 20px;
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
select.m-wrap {
}
.select-hide-span {
    height: 25px;
    position: absolute;
    top: 0;
    border-right: 1px solid #e5e5e5;
    right: 0;
    width: 20px!important;
}
.select-show-b {
    border-color: #888 transparent transparent transparent;
    border-style: solid;
    border-width: 5px 4px 0 4px;
    margin-left: -4px;
    margin-top: 10px;
    position: absolute;
}
</style>
