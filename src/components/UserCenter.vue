<template>
  <div class="wrapper">
    <div class="top">
      <a-select v-model="selectedSemester" style="width: 120px;" placeholder="请选择">
        <a-select-option value="2023春季学期">2023春季学期</a-select-option>
        <a-select-option value="2023暑季学期">2023暑季学期</a-select-option>
        <a-select-option value="2023夏季学期">2023夏季学期</a-select-option>
      </a-select>


      <a-select v-model="selectedYear" style="width: 120px;" placeholder="请选择">
        <a-select-option v-for="item in TuanTi"
          :value="`${item.classes}&${item.department}&${item.group_id}&${item.instructor_id}&${item.major}&${item.year}`" :key="item.instructor_id">{{
            item.department }}</a-select-option>
      </a-select>


      <a-input-number v-model="searchCount" :min="0" style="width: 120px;"></a-input-number>

      <a-button type="primary" @click="handleSearch">搜索</a-button>
    </div>

    <div class="table">
      <a-table :columns="columns" :data-source="dataSource1" :row-key="record => record.studentId">
        <span slot="action" slot-scope="text, record">
          <a class="ant-dropdown-link" @click="xiangqing(record)">详情</a>
        </span>
      </a-table>
    </div>
  </div>
</template>
  
<script>
import { get } from '../utils/request';
import { getLocalStorage } from '@/utils/Obj'

export default {
  name: 'App',
  data() {
    return {
      TuanTi: [],
      instructorId: '',
      selectedYear: undefined,
      selectedSemester: undefined,
      searchCount: null,
      dataSource: [
        {
          studentId: '1111',
          name: 'Student',
          abnormalCount: 8,
        },
        {
          studentId: '2222',
          name: 'Student',
          abnormalCount: 3,
        }
      ], // Your table data source
      dataSource1: [],
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
          align: 'center',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ]
    };
  },
  watch: {
    selectedYear() {
      if (this.selectedSemester !== undefined) {
        this.querydata()
      }
    },
    selectedSemester() {
      if (this.selectedYear !== undefined) {
        this.querydata()
      }
    }
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
    xiangqing(record) {
      console.log("🚀  record:", record)
      this.$router.push({
        path: '/Home/UserCenterDetails',
        query: { studentId: record.studentId, term: this.selectedSemester }
      });
    },
    handleSearch() {
      if (this.searchCount === '') {
        this.dataSource1 = this.dataSource
      } else {
        this.dataSource1 = this.filteredData
      }
    },
    querydata() {
      get(`/account-service/account/exception/times?instructorId=${this.selectedYear.split('&')[3]}&term=${this.selectedSemester}&groupId=${this.selectedYear.split('&')[2]}`).then((res) => {
        this.dataSource = res.data
        this.dataSource1 = this.dataSource
      })
    }
  },
  mounted() {
    this.handleSearch()
    this.instructorId = getLocalStorage('instructorId') || '5101603'
    get(`/office-service/group/list/${this.instructorId}`).then((res) => {
      this.TuanTi = res.data
      console.log("🚀  this.TuanTi:", this.TuanTi)
    })
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
  