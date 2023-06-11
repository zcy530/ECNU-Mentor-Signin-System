<template>
    <div class="wrapper" @click="fun" @wheel="handleWheel($event)">
        <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      fun() {
        this.$emit('tag-click')
      },
      handleWheel(event) {
        this.$emit('tag-wheel', event)
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 25px;
    line-height: 25px;
    border: 1px solid #6f8194;
    background-color: rgba(41, 50, 54, 0.5);
    color: #7a8fb0;
    cursor: pointer;
  }
  </style>
  