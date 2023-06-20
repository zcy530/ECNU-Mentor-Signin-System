<template>
  <div class="wrapper">
    <div class="top">
      <div style="flex: 1">
        <a-row>
          <a-col :span="6">
            <a-select v-model="selectedOption1" style="width: 220px;" placeholder="请选择">
              <a-select-option value="2023春季学期">2023年春季学期</a-select-option>
              <a-select-option value="2023暑季学期">2023年暑季学期</a-select-option>
              <a-select-option value="2023夏季学期">2023年夏季学期</a-select-option>
            </a-select>
          </a-col>
          <a-col :span="6">
            <a-select v-model="selectedOption2" style="width: 120px;" placeholder="请选择">
              <a-select-option v-for="item in TuanTi" :value="item.year">
                {{ item.year }}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="6">
            <a-input type="text" v-model="username" placeholder="请输入学号姓名" width="300"></a-input>
          </a-col>
        </a-row>
      </div>
      <a-button type="primary" @click="handleSearch">Search</a-button>
    </div>
    <div class="top2">
      <a-button-group>
        <a-button :type="selectedOption === 0 ? 'primary' : ''" @click="handleOptionClick(0)">
          全部
        </a-button>
        <a-button :type="selectedOption === 1 ? 'primary' : ''" @click="handleOptionClick(1)">
          已审核
        </a-button>
        <a-button :type="selectedOption === 2 ? 'primary' : ''" @click="handleOptionClick(2)">
          未通过
        </a-button>
      </a-button-group>
    </div>
    <div class="table">
      <a-table :columns="columns" :data-source="dataSource" rowKey="noteId">
        <span slot="action1" slot-scope="text, record">
          <img :src="record.attach" alt="" width="80">
        </span>
        <span slot="action2" slot-scope="text, record">
          <a-button type="primary" @click="approve(record)" v-if="record.status === 0">审核</a-button>
          <span v-if="record.status === 0"> | </span>
          <a-button type="primary" @click="showDetails(record)">详情</a-button>
        </span>
      </a-table>
    </div>
  </div>
</template>
  
<script>
import { get, post, put } from '../utils/request';
import { getLocalStorage } from '@/utils/Obj'

export default {
  name: 'App',
  data() {
    return {
      selectedOption1: '2023年春季学期',
      selectedOption2: 124,
      username: undefined,
      dataSource: [], // Your table data source
      columns: [], // Your table columns definition
      TuanTi: [],
      status: 0,
      selectedOption: 0, // 默认选中全部
      columns: [
        {
          title: "笔记 ID",
          width: 90,
          dataIndex: "noteId",
          key: "noteId"
        },
        {
          title: "学生 ID",
          width: 90,
          dataIndex: "studentId",
          key: "studentId"
        },
        {
          title: "学生名字",
          width: 90,
          dataIndex: "studentName",
          key: "studentName"
        },
        {
          title: "课程 ID",
          width: 90,
          dataIndex: "courseId",
          key: "courseId"
        },
        {
          title: "星期",
          width: 90,
          dataIndex: "week",
          key: "week"
        },
        {
          title: "理由",
          width: 90,
          dataIndex: "reason",
          key: "reason"
        },
        {
          title: "时间",
          width: 90,
          dataIndex: "time",
          key: "time"
        },
        {
          title: "状态",
          dataIndex: "status",
          key: "status",
          width: 90,
          customRender: (text) => {
            if (text == -1) {
              return <span style="color: red;">未通过</span>;
            } else if (text == 1) {
              return <span style="color: green;">已通过</span>;
            } else {
              return <span style="color: yellow;">未审核</span>;
            }
          }
        },
        {
          title: "学期",
          dataIndex: "term",
          width: 90,
          key: "term"
        },
        {
          title: "辅导员 ID",
          dataIndex: "professorId",
          width: 90,
          key: "professorId"
        },
        {
          title: "辅导员",
          width: 90,
          dataIndex: "professorName",
          key: "professorName"
        },
        {
          title: "课程 Name",
          width: 90,
          dataIndex: "courseName",
          key: "courseName"
        },
        {
          title: "图片",
          dataIndex: 'action',
          width: 90,
          scopedSlots: { customRender: 'action1' }
        },
        {
          title: "操作",
          key: "action",
          key: 'actionButton',
          width: 250,
          align: 'center',
          scopedSlots: { customRender: 'action2' },
          pageParams: {
            pageNumber: 0,
            pageSize: 10
          }
        }
      ]
    };
  },
  methods: {
    showDetails(record) {
      // 处理详情按钮点击事件
      // 在这里可以显示详细信息或执行其他逻辑
      this.$router.push({
        path: "/Home/qingjiaDetails",
        query: {
          "status": record.status,
          "noteId": record.noteId,
          "id": record.professorId,
          "refuseReason": record.reason,
          "name": record.professorName,
        }
      })
    },
    approve(record) {
      const that = this
      this.$confirm({
        title: '审批',
        content: '点击确定通过, 取消拒绝',
        okText: '通过',
        cancelText: '拒绝',
        onOk() {
          put('/leave-service/instructor/leaverecord/update', {
            "noteId": record.noteId,
            "id": record.professorId,
            "refuseReason": record.reason,
            "status": 1,
            "name": record.professorName,
          }).then(() => {
            that.handleSearch()
          })
        },
        onCancel() {
          put('/leave-service/instructor/leaverecord/update', {
            "noteId": record.noteId,
            "id": record.professorId,
            "refuseReason": record.reason,
            "status": -1,
            "name": record.professorName,
          }).then(() => {
            that.handleSearch()
          })
        },
      });
      // 处理审批按钮点击事件
      // 在这里可以执行审批操作或执行其他逻辑
    },
    // 点击全部, 已审核, 未审核
    handleOptionClick(option) {
      this.selectedOption = option;
      post('/leave-service/instructor/leaverecord', {
        "instructorId": this.instructorId,
        "status": option,
        "groupId": this.selectedOption2,
        "studentName": "叶",
        "pageParams": {
          "pageNumber": 0,
          "pageSize": 10
        }
      }).then((res) => {
        this.dataSource = res.data
      })
    },
    // 搜索按钮
    handleSearch() {
      post('/leave-service/instructor/leaverecord', {
        "instructorId": this.instructorId,
        "status": "0",
        "groupId": this.selectedOption2,
        "studentName": "叶",
        "pageParams": {
          "pageNumber": 0,
          "pageSize": 10
        }
      }).then((res) => {
        this.dataSource = res.data
      })
    },
    extractUniqueYears(data) {
      const years = [];
      for (let i = 0; i < data.length; i++) {
        const year = data[i].group_id;
        if (!years.includes(year)) {
          years.push(year);
        }
      }
      return years.map((year, index) => ({ year, key: index }));
    }
  },
  created() {
    this.instructorId = getLocalStorage('instructorId') || '5101603'
    get(`/office-service/group/list/${this.instructorId}`).then((res) => {
      this.TuanTi = this.extractUniqueYears(res.data)
    })
    this.handleSearch()
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

.top2 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.table {
  width: 100%;
  height: 100%;
}
</style>
  