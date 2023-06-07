<template>
    <div>
      <label class="switch">
        <input type="checkbox" v-model="isRightEnabled" @change="handleSwitchChange" />
        <span class="slider">
            <span v-if="isRightEnabled" class="OFF">OFF</span>
            <span v-else="isRightEnabled" class="ON">ON</span>
        </span>
      </label>
      <span></span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isRightEnabled: false
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
  
  <style>
  .switch {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 34px;
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
    content: 'OFF';
    height: 85%;
    line-height: 250%;
    width: 50%;
    left: 3px;
    bottom: 6%;
    width: 50%;
    background-color: #ccc;
    transition: 0.4s;
  }
  
  input:checked + .slider::before {
    content: 'ON';
    background-color: #7495c4;
  }
  
  input:checked + .slider:before {
    transform: translateX(93%);
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
  