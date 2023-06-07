<template>
  <div class="page-one">
    <header-compenents></header-compenents>
    <div class="content">
      <!-- 左侧 -->
      <article class="left">
        <!-- 左侧-顶部 -->
        <box class="box" title="input" style="flex: 2;">
          <div class="middle-container1">
            <div style="height: 19px; width: auto; margin-bottom: 10px;">
              <dianping :leftChannelData="leftChannelData1" :rightChannelData="leftChannelData2" />
            </div>
            <div style="height: 19px;">
              <dianping :leftChannelData="rightChannelData1" :rightChannelData="rightChannelData2" :yAxisData="['R']" />
            </div>
          </div>
        </box>
        <!-- 左侧-中间 -->
        <box class="box" title="out put" style="flex: 10;" height="55">
          <div class="middle-container2">
            <div style="height: 33%; width: 100%;">
              <dianping1></dianping1>
            </div>
            <div style="height: 33%; width: 100%;">
              <dianping2></dianping2>
            </div>
            <div style="height: 33%; width: 100%;">
              <dianping3></dianping3>
            </div>
          </div>
        </box>
        <!-- 左侧-底部 -->
        <box class="box" title="out put" style="flex: 3;">
          <div class="top-mini-wrapper">
            <switch-btn></switch-btn>
          </div>
          <div style="height: 18px; width: auto; margin-bottom: 10px;">
            <dianpingBottom :leftChannelData="leftChannelData1" :rightChannelData="leftChannelData2" />
          </div>
          <div style="height: 18px;">
            <dianpingBottom :leftChannelData="rightChannelData1" :rightChannelData="rightChannelData2"
              :yAxisData="['R']" />
          </div>
        </box>
      </article>

      <!-- 中间 -->
      <article class="middle">
        <middleTop>
          <my-select v-model="selectedOption">
            <option value="option1">Immersive 5.1.4</option>
          </my-select>
          <my-button style="margin-left: 20px" @click="mixerBtn">Mixer</my-button>
          <my-lunbo-btn :list="['Main Array', 'Main Array22']" v-model="luboBtnValue"
            style="margin-left: 20px"></my-lunbo-btn>
          <my-lunbo-btn :list="['Main Array', 'Main Array22']" v-model="luboBtnValue"
            style="margin-left: 20px"></my-lunbo-btn>
        </middleTop>
        <router-view></router-view>
      </article>

      <!-- 右侧 -->
      <article class="right">
        <div class="circle-btn" v-for="i in 6">
          <div class="img-wrapper" @click="changeActive(i)">
            <img v-show="right_active === i" :src="require(`../assets/img/right${i}.png`)">
            <img v-show="right_active !== i" :src="require(`../assets/img/right${i}_c.png`)">
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
import dianpingBottom from '@/components/dianping-bottom.vue'
import dianping1 from '@/components/dianping1.vue'
import dianping2 from '@/components/dianping2.vue'
import dianping3 from '@/components/dianping3.vue'
import switchBtn from '../components/switch-btn.vue'
import leftRightBtn from '../components/left-right-btn.vue'
import mySelect from '../components/my-select.vue'
import myButton from '../components/my-button.vue'
import myLunboBtn from '../components/my-lunbo-btn.vue'
import middleContainer from '../components/middle-container.vue'
import middleContainer1 from '../components/middle-container.vue'
export default {
  name: "Home",
  data() {
    return {
      leftChannelData1: [320], // 示例数据，代表左声道的音频数据
      leftChannelData2: [120],
      rightChannelData1: [320],
      rightChannelData2: [120],
      right_active: 1,
      selectedOption: '',
      luboBtnValue: ''
    }
  },
  components: {
    headerCompenents,
    middleTop,
    box,
    dianping,
    dianping1,
    dianping2,
    dianping3,
    dianpingBottom,
    switchBtn,
    leftRightBtn,
    mySelect,
    myButton,
    myLunboBtn,
    middleContainer,
    middleContainer1
  },
  methods: {
    changeActive(val) {
      this.right_active = val
    },
    mixerBtn() {
      // 获取当前路由路径
      const currentPath = this.$route.path;

      // 判断当前路径，执行相应的跳转
      if (currentPath === '/Home/mixer1') {
        this.$router.push('/Home/mixer');
      } else {
        this.$router.push('/Home/mixer1');
      }
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
      width: 12vw;
      height: 100%;

      .box {
        .middle-container1 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 95%;
          width: 100%;
        }

        .middle-container2 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 95%;
          width: 100%;
          padding: 10px;
        }

        .top-mini-wrapper {
          box-sizing: border-box;
          height: 55px;
          width: 100%;
          border-bottom: 1px solid #333537;
          margin-bottom: 5px;
          padding: 10px 12%;
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
      width: 12vw;
      height: 100%;
      border: 1px solid #696e6f;

      .circle-btn {
        flex: 1;
        cursor: pointer;

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
}
</style>
