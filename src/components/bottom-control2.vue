<template>
    <div class="wrapper">
      <article class="crol" v-if="i in 12">
        
      </article>
      <myModel ref="modelRef">
        111
      </myModel>
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
      }
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
    }
  }
  </style>
    