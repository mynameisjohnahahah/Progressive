<template>
<div class='carousel-wrap' id='carousel'>
    <!-- 滑块图片 -->
    <transition-group tag='ul' class='slide-ul' name='list'>
      <li v-for='(list,index) in slideList' :key='index' v-show='index===currentIndex'>
        <a :href='list.clickUrl' >
          <img :src='list.image' alt='暂无'>
        </a>
      </li>
    </transition-group>
    <!-- 滑块个数 -->
    <div class='carousel-items'>
      <span v-for='(item,index) in slideList.length' :key='index' :class="{'active':index===currentIndex}"></span>
    </div>
</div>
</template>

<script lang='ts'>
import { Component, Vue, Watch, Emit, Prop } from 'vue-property-decorator';
@Component
export default class Swiper extends Vue {
  private slideList!: [
    {
      clickUrl: string,
      image: string,
    }
  ];
  private timer!: any;
  private currentIndex!: number;
  private data() {
    return {
      slideList: [
        {
          clickUrl: '#',
          image: 'https://geffoliu.cn/images/MyHero/6c9b51510fb30f24e76e88b1c495d143ac4b039a.jpg',
        },
        {
          clickUrl: '#',
          image: 'https://geffoliu.cn/images/MyHero/b31d84fbfbedab64798af18ffb36afc378311e93.jpg',
        },
      ],
      currentIndex: 0,
      timer: null,
    };
  }
  // 播放函数
  private autoPlay() {
    this.currentIndex++;
    if (this.currentIndex > this.slideList.length - 1) {
      this.currentIndex = 0;
    }
  }
  private created() {
    this.timer = setInterval(() => {
      this.autoPlay();
    }, 4000);
  }
}
</script>

<style lang='scss' src='./Swiper.scss' scoped>
</style>

