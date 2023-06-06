<template>
  <div class="page-one">
    <header-compenents></header-compenents>
    <div class="content">
      <!-- 左侧 -->
      <article class="left">
        <!-- 左侧-顶部 -->
        <box class="box" title="input" style="flex: 2; ">
          <div style="height: 20px; margin-bottom: 10px;">
            <dianping :leftChannelData="leftChannelData1" :rightChannelData="leftChannelData2" />
          </div>
          <div style="height: 20px;">
            <dianping :leftChannelData="rightChannelData1" :rightChannelData="rightChannelData2" :yAxisData="['R']" />
          </div>
        </box>
        <!-- 左侧-中间 -->
        <box class="box" title="out put" style="flex: 10;" height="55">
          <div class="middle-container">
            <div style="height: 20px; margin-bottom: 10px;">
              <dianping-y></dianping-y>
            </div>
          </div>
        </box>
        <!-- 左侧-底部 -->
        <box class="box" title="out put" style="flex: 3;"></box>
      </article>

      <!-- 中间 -->
      <article class="middle">
        <middleTop></middleTop>
        
      </article>

      <!-- 右侧 -->
      <article class="right">
        <div class="circle-btn" v-for="i in 6">
          <div class="img-wrapper" @click="changeActive(i)">
            <img v-if="right_active === i" :src="require(`../assets/img/right${i}.png`)">
            <img v-else :src="require(`../assets/img/开锁.png`)">
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import headerCompenents from '@/components/header-compenents.vue'
import box from '@/components/box.vue'
import middleTop from '@/components/middle-top.vue'
import dianping from '@/components/dianping.vue'
import dianpingY from '@/components/dianping.vue'
export default {
  name: "Home",
  data() {
    return {
      leftChannelData1: [320], // 示例数据，代表左声道的音频数据
      leftChannelData2: [120],
      rightChannelData1: [320],
      rightChannelData2: [120],
      right_active: 1
    }
  },
  components: {
    headerCompenents,
    middleTop,
    box,
    dianping,
    dianpingY
  },
  mounted() {
    console.log(this.right_active_arr.includes(this.right_active))
  },
  methods: {
    changeActive(val) {
      this.right_active = val
    }
  }
};
</script>

<style lang="scss" scoped>
.page-one {
  height: 100vh;
  width: 100vw;
  background: url('../assets/img/大背景.png');
  background-size: 100% 100%;

  .content {
    display: flex;
    height: 94vh;
    width: 100%;
    box-sizing: border-box;
    padding: 15px;

    .left {
      display: flex;
      flex-direction: column;
      width: 13vw;
      height: 100%;

      .box:nth-child(2) {
        .middle-container {
          height: 100%;
          width: 100%;
          border: 1px solid red;
        }
      }

      .box:last-child {
        margin-bottom: 0;
      }
    }

    .middle {
      flex: 1;
      height: 100%;
      margin: 0 15px;
      background: url('../assets/img/网格背景.png');
      background-size: 100% 100%;
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 11vw;
      height: 100%;
      border: 1px solid #696e6f;

      .circle-btn {
        flex: 1;

        .img-wrapper {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}</style>
