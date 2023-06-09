<template>
  <div class="wrapper">
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S1" :M="sm.M1"
          @left-toggle="($event) => { this.toggleValue('S1'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M1') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume1" @volumeChange="updateVolume1" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S2" :M="sm.M2"
          @left-toggle="($event) => { this.toggleValue('S2'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M2') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume2" @volumeChange="updateVolume2" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S3" :M="sm.M3"
          @left-toggle="($event) => { this.toggleValue('S3'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M3') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume3" @volumeChange="updateVolume3" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S4" :M="sm.M4"
          @left-toggle="($event) => { this.toggleValue('S4'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M4') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume4" @volumeChange="updateVolume4" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S5" :M="sm.M5"
          @left-toggle="($event) => { this.toggleValue('S5'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M5') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume5" @volumeChange="updateVolume5" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S6" :M="sm.M6"
          @left-toggle="($event) => { this.toggleValue('S6'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M7') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume6" @volumeChange="updateVolume6" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S7" :M="sm.M7"
          @left-toggle="($event) => { this.toggleValue('S8'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M8') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume7" @volumeChange="updateVolume7" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S8" :M="sm.M8"
          @left-toggle="($event) => { this.toggleValue('S9'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M9') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume8" @volumeChange="updateVolume8" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S9" :M="sm.M9"
          @left-toggle="($event) => { this.toggleValue('S9'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M9') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume9" @volumeChange="updateVolume9" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S10" :M="sm.M10"
          @left-toggle="($event) => { this.toggleValue('S10'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M10') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume10" @volumeChange="updateVolume10" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S11" :M="sm.M11"
          @left-toggle="($event) => { this.toggleValue('S11'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M11') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume11" @volumeChange="updateVolume11" />
      </div>
    </article>
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S12" :M="sm.M12"
          @left-toggle="($event) => { this.toggleValue('S12'); this.leftStatusFun($event) }"
          @right-toggle="($event) => { this.toggleValue('M12') }">
        </switchMiniBtn>
      </div>
      <div class="dB">
        dB
      </div>
      <div class="tag">
        +50
      </div>
      <div class="progress-bar">
        <VolumeControl :volume="volume12" @volumeChange="updateVolume12" />
      </div>
    </article>
    <div class="lock1" :class="[lock1 ? 'lock_active' : '']">
      <div @click="lockBtn">
        <img src="../assets/img/关锁.png" v-if="lock1" alt="">
        <img src="../assets/img/开锁.png" v-else alt="">
      </div>
    </div>
    <div class="lock2" :class="[lock2 ? 'lock_active' : '']">
      <div @click="lockBtn2">
        <img src="../assets/img/关锁.png" v-if="lock2" alt="">
        <img src="../assets/img/开锁.png" v-else alt="">
      </div>
    </div>
    <div class="lock3" :class="[lock3 ? 'lock_active' : '']">
      <div @click="lockBtn3">
        <img src="../assets/img/关锁.png" v-if="lock3" alt="">
        <img src="../assets/img/开锁.png" v-else alt="">
      </div>
    </div>
    <div class="lock4" :class="[lock4 ? 'lock_active' : '']">
      <div @click="lockBtn4">
        <img src="../assets/img/关锁.png" v-if="lock4" alt="">
        <img src="../assets/img/开锁.png" v-else alt="">
      </div>
    </div>
  </div>
</template>
  
<script>
import switchMiniBtn from './switch-mini-btn.vue'
import VolumeControl from './volume-control.vue';
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  components: {
    switchMiniBtn,
    VolumeControl
  },
  computed: {
    ...mapState(['sm', 'leftStatusFather'])
  },
  created() {
    console.log("🚀  leftStatusFather:", this.leftStatusFather)
    console.log("🚀  sm:", this.sm)
  },
  data() {
    return {
      volume1: 50,
      volume2: 50,
      volume3: 50,
      volume4: 50,
      volume5: 50,
      volume6: 50,
      volume7: 50,
      volume8: 50,
      volume9: 50,
      volume10: 50,
      volume11: 50,
      volume12: 50,
      lock1: false,
      lock2: false,
      lock3: false,
      lock4: false,
    };
  },
  watch: {
    volume1(newValue) {
      // 更新第二个组件的volume值
      if (this.lock1) {
        this.volume2 = newValue;
      }
    },
    volume2(newValue) {
      // 更新第一个组件的volume值
      if (this.lock1) {
        this.volume1 = newValue;
      }
    },
    volume4(newValue) {
      // 更新第二个组件的volume值
      if (this.lock2) {
        this.volume5 = newValue;
      }
    },
    volume5(newValue) {
      // 更新第一个组件的volume值
      if (this.lock2) {
        this.volume4 = newValue;
      }
    },
    volume6(newValue) {
      // 更新第一个组件的volume值
      if (this.lock3) {
        this.volume7 = newValue;
      }
    },
    volume7(newValue) {
      // 更新第一个组件的volume值
      if (this.lock3) {
        this.volume6 = newValue;
      }
    },
    volume8(newValue) {
      // 更新第二个组件的volume值
      if (this.lock4) {
        this.volume9 = newValue;
        this.volume10 = newValue;
        this.volume11 = newValue;
      }
    },
    volume9(newValue) {
      // 更新第一个组件的volume值
      if (this.lock4) {
        this.volume8 = newValue;
        this.volume10 = newValue;
        this.volume11 = newValue;
      }
    },
    volume10(newValue) {
      // 更新第一个组件的volume值
      if (this.lock4) {
        this.volume8 = newValue;
        this.volume9 = newValue;
        this.volume11 = newValue;
      }
    },
    volume11(newValue) {
      // 更新第一个组件的volume值
      if (this.lock4) {
        this.volume8 = newValue;
        this.volume9 = newValue;
        this.volume10 = newValue;
      }
    },
  },
  methods: {
    ...mapMutations(['updateSmValue']),
    ...mapActions(['updateLeftStatusAction']),
    leftStatusFun(value) {
      this.updateLeftStatusAction(value)
    },
    toggleValue(key) {
      this.updateSmValue({ key, value: !this.sm[key] })
    },
    updateVolume1(volume) {
      this.volume1 = volume;
    },
    updateVolume2(volume) {
      this.volume2 = volume;
    },
    updateVolume3(volume) {
      this.volume3 = volume;
    },
    updateVolume4(volume) {
      this.volume4 = volume;
    },
    updateVolume5(volume) {
      this.volume5 = volume;
    },
    updateVolume6(volume) {
      this.volume6 = volume;
    },
    updateVolume7(volume) {
      this.volume7 = volume;
    },
    updateVolume8(volume) {
      this.volume8 = volume;
    },
    updateVolume9(volume) {
      this.volume9 = volume;
    },
    updateVolume10(volume) {
      this.volume10 = volume;
    },
    updateVolume11(volume) {
      this.volume11 = volume;
    },
    updateVolume12(volume) {
      this.volume12 = volume;
    },
    lockBtn() {
      this.lock1 = !this.lock1
    },
    lockBtn2() {
      this.lock2 = !this.lock2
    },
    lockBtn3() {
      this.lock3 = !this.lock3
    },
    lockBtn4() {
      this.lock4 = !this.lock4
    }
  }
};
</script>
  
<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 250px;

  .lock1 {
    cursor: pointer;
    position: absolute;
    top: 100%;
    left: 4.1%;
    width: 8.3%;
    height: 20px;
    border-bottom: 1px solid #6d7a8c;
    border-left: 1px solid #6d7a8c;
    border-right: 1px solid #6d7a8c;

    div {
      margin-top: 7px;
    }
  }

  .lock2 {
    cursor: pointer;
    position: absolute;
    top: 100%;
    left: 29%;
    width: 8.3%;
    height: 20px;
    border-bottom: 1px solid #6d7a8c;
    border-left: 1px solid #6d7a8c;
    border-right: 1px solid #6d7a8c;

    div {
      margin-top: 7px;
    }
  }

  .lock3 {
    cursor: pointer;
    position: absolute;
    top: 100%;
    left: 45.8%;
    width: 8.3%;
    height: 20px;
    border-bottom: 1px solid #6d7a8c;
    border-left: 1px solid #6d7a8c;
    border-right: 1px solid #6d7a8c;

    div {
      margin-top: 7px;
    }
  }

  .lock4 {
    cursor: pointer;
    position: absolute;
    top: 100%;
    left: 62.5%;
    width: 25%;
    height: 20px;
    border-bottom: 1px solid #6d7a8c;
    border-left: 1px solid #6d7a8c;
    border-right: 1px solid #6d7a8c;

    div {
      margin-top: 7px;
    }
  }

  .lock_active {
    border-bottom: 1px solid #76553b;
    border-left: 1px solid #76553b;
    border-right: 1px solid #76553b;
  }

  .crol {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 5px;
    width: 7%;
    height: 250px;
    border: 1px solid #4a4a4a;

    .mini-btn {
      width: 100%;
    }

    .dB {
      color: #4d4d4d;
    }

    .tag {
      color: #5f6e90;
      border: 1px solid #5f6e90;
      width: 50%;
      background-color: rgba(41, 50, 54, 0.5);
    }

    .progress-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }
}</style>
  