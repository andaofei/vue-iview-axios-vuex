<template>
  <div class="Home">
    <div class="wrapper">
      <scroll ref="scroll"
              :listen-scroll="listenScroll"
              :probe-type="probeType"
              :data="items"
              :scrollbar="scrollbarObj"
              :pullDownRefresh="pullDownRefreshObj"
              :pullUpLoad="pullUpLoadObj"
              :startY="parseInt(startY)"
              @pullingDown="onPullingDown"
              @pullingUp="onPullingUp"
              @click="clickItem">
          <ul class="list-content" slot="list">
            <li @click="clickItem($event,item)" class="list-item" v-for="(item,index) in items" :key="index">{{item}}
            </li>
          </ul>
      </scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from "../../components/header/header.vue";
  import MFooter from "../../components/footer/footer.vue";
  import Scroll from '../../components/scroll/scroll.vue'
  export default {
    components: {
      MHeader,
      MFooter,
      Scroll
    },
    data() {
      return {
        probeType: 0,
        scrollbar: true,
        scrollbarFade: true,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: this.$i18n.t('scrollComponent.defaultLoadTxtMore'),
        pullUpLoadNoMoreTxt: this.$i18n.t('scrollComponent.defaultLoadTxtNoMore'),
        startY: 0,
        scrollToX: 0,
        scrollToY: -200,
        scrollToTime: 700,
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
        items: [],
        itemIndex: 0
      };
    },
    created() {
      this.probeType = 3
      this.listenScroll = true
      for (let i = 0; i < 2; i++) {
        this.items.push(this.$i18n.t('normalScrollListPage.previousTxt') + ++this.itemIndex + this.$i18n.t('normalScrollListPage.followingTxt'))
      }
    },
    methods: {
      clickItem() {
        this.$router.back()
      },
      onPullingDown() {
        // 模拟更新数据
        console.log('下拉-pulling down and load data')
        setTimeout(() => {
          if (this._isDestroyed) {
            return
          }
          if (Math.random() > 0.5) {
            // 如果有新数据
            this.items.unshift(this.$i18n.t('normalScrollListPage.newDataTxt') + +new Date())
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 2000)
      },
      onPullingUp() {
        // 更新数据
        console.log('pulling up and load data')
        setTimeout(() => {
          if (this._isDestroyed) {
            return
          }
          if (Math.random() > 0.5) {
            // 如果有新数据
            let newPage = []
            for (let i = 0; i < 40; i++) {
              newPage.push(this.$i18n.t('normalScrollListPage.previousTxt') + ++this.itemIndex + this.$i18n.t('normalScrollListPage.followingTxt'))
            }

            this.items = this.items.concat(newPage)
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1500)
      }
    },

    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
//        return false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },

    watch: {
      scrollbarObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullDownRefreshObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullDown()
          } else {
            scroll.closePullDown()
          }
        },
        deep: true
      },
      pullUpLoadObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullUp()
          } else {
            scroll.closePullUp()
          }
        },
        deep: true
      },
      startY() {
        this.rebuildScroll()
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl';
  .Home
    position fixed;
    left 0;
    top 0;
    width 100%;
    height 100%;
  .wrapper
    width 100%;
    height 100%;
    display flex;
    justify-content space-between;
    flex-direction column;
    background url('./screen.png') no-repeat;
    background-size cover
    .box-item
      text-align center;
      .ivu-form-item
        width 240px;
        .ivu-btn
          width 240px;
</style>
