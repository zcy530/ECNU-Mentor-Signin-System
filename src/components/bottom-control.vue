<template>
  <div class="wrapper">
    <article class="crol">
      <div class="mini-btn">
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
        <switchMiniBtn></switchMiniBtn>
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
  </div>
</template>
  
<script>
import switchMiniBtn from './switch-mini-btn.vue'
import VolumeControl from './volume-control.vue';
export default {
  components: {
    switchMiniBtn,
    VolumeControl
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
    };
  },
  // watch: {
  //   volume1(newValue) {
  //     // 更新第二个组件的volume值
  //     this.volume2 = newValue;
  //   },
  //   volume2(newValue) {
  //     // 更新第一个组件的volume值
  //     this.volume1 = newValue;
  //   }
  // },
  methods: {
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
  }
};
</script>
  
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 250px;

  .crol {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 5px;
    width: 7%;
    height: 250px;
    border: 1px solid #ccc;

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
}
</style>
  