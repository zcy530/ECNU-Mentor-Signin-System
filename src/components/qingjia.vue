<template>
    <div class="wrapper">
      <div class="top">
        <a-select v-model="selectedOption1" style="width: 200px;">
          <a-select-option value="option1">Option 1</a-select-option>
          <a-select-option value="option2">Option 2</a-select-option>
          <a-select-option value="option3">Option 3</a-select-option>
        </a-select>
  
        <a-select v-model="selectedOption2" style="width: 200px;">
          <a-select-option value="option1">Option 1</a-select-option>
          <a-select-option value="option2">Option 2</a-select-option>
          <a-select-option value="option3">Option 3</a-select-option>
        </a-select>
  
        <a-select v-model="selectedOption3" style="width: 200px;">
          <a-select-option value="option1">Option 1</a-select-option>
          <a-select-option value="option2">Option 2</a-select-option>
          <a-select-option value="option3">Option 3</a-select-option>
        </a-select>
  
        <a-button type="primary" @click="handleSearch">Search</a-button>
      </div>
      <div class="table">
        <a-table :columns="columns" :data-source="dataSource"></a-table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        selectedOption1: '',
        selectedOption2: '',
        selectedOption3: '',
        dataSource: [], // Your table data source
        columns: [] // Your table columns definition
      };
    },
    methods: {
      handleSearch() {
        // Perform search logic here
      }
    },
    mounted() {
      // Fetch table data and define columns here
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }
  
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .table {
    width: 100%;
    height: 100%;
  }
  </style>
  