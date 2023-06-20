<template>
  <div class="wrapper">
    <div class="top">
      <div style="flex: 1">
        <a-row>
          <a-col :span="6">
            <a-select v-model="selectedOption1" style="width: 220px;" placeholder="请选择">
              <a-select-option value="2023春季学期">2023春季学期</a-select-option>
              <a-select-option value="2023暑季学期">2023暑季学期</a-select-option>
              <a-select-option value="2023夏季学期">2023夏季学期</a-select-option>
            </a-select>
          </a-col>
          <a-col :span="6">
            <a-select v-model="selectedOption2" style="width: 320px;" placeholder="请选择">
              <a-select-option v-for="item in TuanTi" :key="item.instructor_id"
                :value="`${item.classes}&${item.department}&${item.group_id}&${item.instructor_id}&${item.major}&${item.year}`">
                {{ item.department + item.major + item.classes }}</a-select-option>
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
          未审
        </a-button>
      </a-button-group>
    </div>
    <div class="table">
      <a-table :columns="columns" :data-source="dataSource" rowKey="noteId">
        <span slot="action1" slot-scope="text, record">
          <img :src="record.attach" alt="" width="80">
        </span>
        <span slot="action2" slot-scope="text, record">
          <a-button type="primary" @click="updateStauts(record)" v-if="record.status === 0">审核</a-button>
          <span v-if="record.status === 0"> | </span>
          <a-button type="primary" @click="showDetails(record)">详情</a-button>
        </span>
      </a-table>
    </div>
  </div>
</template>
  
<script>
import { get, post } from '../utils/request';
import { getLocalStorage } from '@/utils/Obj'

export default {
  name: 'App',
  data() {
    return {
      selectedOption1: '',
      selectedOption2: '',
      username: '',
      dataSource: [
        {
        "noteId": 6490,
        "studentId": 1018412866,
        "studentName": "叶致远",
        "courseId": "CTZQL-PGMNPGt152",
        "week": 15,
        "reason": "难受，预约了医生，与医院看病，望批准",
        "time": "2023-04-28 18:28:37.0",
        "status": 0,
        "term": "2018年秋季学期",
        "professorId": 5108649,
        "name": null,
        "refuseReason": null,
        "type": null,
        "changeTime": "2023-06-19 11:03:28.0",
        "id": null,
        "professorName": "赵子韬",
        "courseName": "电子行业",
        "attach": "http://powernod.com/u/7efe33a189577710"
      },
      {
        "noteId": 6491,
        "studentId": 1018412866,
        "studentName": "叶致远",
        "courseId": "CTZQL-PGMNPGt152",
        "week": 15,
        "reason": "难受，预约了医生，与医院看病，望批准",
        "time": "2023-04-28 18:28:37.0",
        "status": 1,
        "term": "2018年秋季学期",
        "professorId": 5108649,
        "name": null,
        "refuseReason": null,
        "type": null,
        "changeTime": "2023-06-19 11:03:28.0",
        "id": null,
        "professorName": "赵子韬",
        "courseName": "电子行业",
        "attach": "http://powernod.com/u/7efe33a189577710"
      },
    ], // Your table data source
      columns: [], // Your table columns definition
      TuanTi: [],
      status: 0,
      selectedOption: 0, // 默认选中全部
      columns: [
        {
          title: "Note ID",
          dataIndex: "noteId",
          key: "noteId"
        },
        {
          title: "Student ID",
          dataIndex: "studentId",
          key: "studentId"
        },
        {
          title: "Student Name",
          dataIndex: "studentName",
          key: "studentName"
        },
        {
          title: "Course ID",
          dataIndex: "courseId",
          key: "courseId"
        },
        {
          title: "Week",
          dataIndex: "week",
          key: "week"
        },
        {
          title: "Reason",
          dataIndex: "reason",
          key: "reason"
        },
        {
          title: "Time",
          dataIndex: "time",
          key: "time"
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          width: 90,
          customRender: (text) => {
            if (text === 0) {
              return <span style="color: red;">未通过</span>;
            } else if (text === 1) {
              return <span style="color: green;">已通过</span>;
            } else {
              return text;
            }
          }
        },
        {
          title: "Term",
          dataIndex: "term",
          key: "term"
        },
        {
          title: "Professor ID",
          dataIndex: "professorId",
          key: "professorId"
        },
        {
          title: "Professor Name",
          dataIndex: "professorName",
          key: "professorName"
        },
        {
          title: "Course Name",
          dataIndex: "courseName",
          key: "courseName"
        },
        {
          title: "Attach",
          dataIndex: 'action',
          scopedSlots: { customRender: 'action1' }
        },
        {
          title: "Action",
          key: "action",
          key: 'actionButton',
          width: 250,
          align: 'center',
          scopedSlots: { customRender: 'action2' }
        }
      ]
    };
  },
  methods: {
    showDetails(record) {
      // 处理详情按钮点击事件
      // 在这里可以显示详细信息或执行其他逻辑
      this.$router.push('/Home/qingjiaDetails')
      console.log("Show details", record);
    },
    approve(record) {
      // 处理审批按钮点击事件
      // 在这里可以执行审批操作或执行其他逻辑
      console.log("Approve", record);
    },
    handleOptionClick(option) {
      this.selectedOption = option;
      // 根据选项进行相应的处理
      // 在这里可以触发相应的逻辑或更新其他组件的数据
    },
    handleSearch() {
      post('/leave-service/instructor/leaverecord', {
        instructorId: this.instructorId,
        term: this.selectedOption1,
        status: this.status
      }).then((res) => {
        this.TuanTi = res.data
      })
    }
  },
  mounted() {
    this.instructorId = getLocalStorage('instructorId') || '5101603'
    get(`/office-service/group/list/${this.instructorId}`).then((res) => {
      this.TuanTi = res.data
    })
    post('/leave-service/instructor/leaverecord', {
      "instructorId": "5102175",
      "status": "0",
      "groupId": "4",
      "studentName": "叶",
      "pageParams": {
        "pageNumber": 0,
        "pageSize": 10
      }
    }).then((res) => {
      this.TuanTi = res.data
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
  