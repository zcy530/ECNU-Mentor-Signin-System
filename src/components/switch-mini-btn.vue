<template>
    <div>
      <label class="switch">
        <input type="checkbox" v-model="isRightEnabled" @change="handleSwitchChange" />
        <span class="slider">
            <span v-if="isRightEnabled" class="OFF">S</span>
            <span v-else="isRightEnabled" class="ON">M</span>
        </span>
      </label>
      <span></span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isRightEnabled: true
      };
    },
    methods: {
      handleSwitchChange() {
        // 处理开关状态改变的逻辑
        // 在这里可以执行相关操作或者触发事件
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .switch {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 25px;
  }
  
  .switch input {
    display: none;
  }
  
  .slider {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #4d4d4d;
    cursor: pointer;
    transition: 0.4s;
  }
  
  .slider:before {
    position: absolute;
    content: 'S';
    height: 100%;
    line-height: 211%;
    width: 50%;
    left: 0px;
    bottom: 0%;
    width: 50%;
    background-color: #c93034;
    transition: 0.4s;
  }
  
  input:checked + .slider::before {
    content: 'M';
    background-color: #7493c2;
  }
  
  input:checked + .slider:before {
    transform: translateX(100%);
  }

  .OFF {
    position: absolute;
    left: 20%;
    top: 22%;
  }

  .ON {
    position: absolute;
    right: 20%;
    top: 22%;
  }
  </style>
  