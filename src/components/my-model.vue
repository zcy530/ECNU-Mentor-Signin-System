<template>
    <div>
      <!-- <button @click="openModal">打开模态框</button> -->
      <transition name="modal">
        <div class="modal-mask" v-if="isModalOpen">
          <div class="modal-container">
            <div class="modal-content">
              <slot></slot>
            </div>
            <button class="close-button" @click="closeModal"></button>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalOpen: false
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .modal-container {
    width: 30vw;
    height: 40vh;
    border: 1px solid #3f3f3f;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    bottom: -95px;
    width: 40px;
    height: 40px;
    color: #fff;
    border: 1px solid #3f3f3f;
    border-radius: 50%;
    cursor: pointer;
    background: url(../assets/img/关闭.png);
    background-size: 100% 100%;
  }
  
  .modal-content {
    img {
      width: 100%;
      height: 100%;
    }
    /* 弹窗内容样式 */
  }
  </style>
  