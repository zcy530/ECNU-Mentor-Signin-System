<template>
    <div class="wrapper">
      <div class="top">
        <a-select v-model="selectedYear" style="width: 120px;">
          <a-select-option value="2022">2022</a-select-option>
          <a-select-option value="2023">2023</a-select-option>
          <a-select-option value="2024">2024</a-select-option>
        </a-select>
  
        <a-select v-model="selectedSemester" style="width: 120px;">
          <a-select-option value="spring">春季</a-select-option>
          <a-select-option value="autumn">秋季</a-select-option>
          <a-select-option value="summer">暑期学期</a-select-option>
        </a-select>
  
        <a-input-number v-model="searchCount" :min="0" style="width: 120px;"></a-input-number>
  
        <a-button type="primary" @click="handleSearch">搜索</a-button>
      </div>
  
      <div class="table">
        <a-table :columns="columns" :data-source="filteredData"></a-table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        selectedYear: '2023',
        selectedSemester: 'spring',
        searchCount: null,
        dataSource: [], // Your table data source
        columns: [
          {
            title: '学号',
            dataIndex: 'studentId',
            key: 'studentId'
          },
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: '异常次数',
            dataIndex: 'abnormalCount',
            key: 'abnormalCount'
          },
          {
            title: '操作',
            key: 'action',
            slots: { customRender: 'action' }
          }
        ]
      };
    },
    computed: {
      filteredData() {
        if (this.searchCount === null) {
          return this.dataSource;
        }
        return this.dataSource.filter(item => item.abnormalCount === this.searchCount);
      }
    },
    methods: {
      handleSearch() {
        // Perform search logic here
        // You can access selectedYear, selectedSemester, and searchCount
        // to perform filtering on the dataSource
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
  