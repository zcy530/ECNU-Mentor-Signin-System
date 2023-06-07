<template>
    <div class="select-container">
      <div class="selected-option" @click="toggleDropdown">
        <slot></slot>
      </div>
    </div>
  </template>
    
  <script>
  export default {
    data() {
      return {

      };
    },
    methods: {
        toggleDropdown() {}
    }
  };
  </script>
    
  <style lang="scss" scoped>
  .select-container {
    position: relative;
    width: 17.4vw;
  }
  
  .selected-option {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #525657;
    background-color: #404243;
    color: #9a9c9d;
    cursor: pointer;
    font-weight: 700;
  }
  
  .arrow-icon {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #606063;
    transform: rotate(-180deg);
    transition: transform 0.3s ease;
  }
  
  
  .arrow-up {
    transform: rotate(-90deg);
    border-right: 5px solid #7394b4;
  }
  
  .selected-option:hover {
    border: 1px solid #647a93;
    background-color: #424b55;
    color: #6e95b6;
  }
  
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    color: #fff;
    max-height: 200px;
    option {
      width: 89%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #525657;
      background-color: #3d3f41;
    }
  }
  </style>
    