<template>
  <div class="leave-details">
    <div class="row">
      <span class="label">发起人：</span>
      <span class="value">{{ leaveDetails.studentName }}</span>
    </div>
    <div class="row">
      <span class="label">创建时间：</span>
      <span class="value">{{ leaveDetails.changeTime }}</span>
    </div>
    <div class="row">
      <span class="label">请假时间：</span>
      <span class="value">{{ leaveDetails.week }}</span>
    </div>
    <div class="row">
      <span class="label">请假课程：</span>
      <span class="value">{{ leaveDetails.courseName }}</span>
    </div>
    <div class="row">
      <span class="label">开课教师：</span>
      <span class="value">{{ leaveDetails.professorName }}</span>
    </div>
    <div class="row">
      <span class="label">课程 ID：</span>
      <span class="value">{{ leaveDetails.courseId }}</span>
    </div>
    <div class="row">
      <span class="label">理由：</span>
      <span class="value">{{ leaveDetails.reason }}</span>
    </div>
    <div class="row">
      <span class="label">附件：</span>
      <a :href="leaveDetails.attach" class="value">下载附件</a>
    </div>
    <div class="row" style="display: flex; justify-content: center">
      <div style="width: 200px;">
        <a-steps direction="vertical" size="small" :current="1">
          <a-step title="已提交：" :description="leaveDetails.time" />
          <a-step title="已通过：" :description="leaveDetails.changeTime" />
        </a-steps>
      </div>
    </div>
    <div class="row">
      <span class="label">审批人：</span>
      <span class="value">{{ leaveDetails.professorName }}</span>
    </div>
    <div class="row" v-if="$route.query.status == 0">
      <a-button type="danger" @click="jujue">拒绝</a-button>
    </div>
    <div class="row" v-if="$route.query.status == 0">
      <a-button @ckick="tongyi">同意</a-button>
    </div>
  </div>
</template>

<script>
import { get, post, put } from '../utils/request';

export default {
  data() {
    return {
      leaveDetails: {
        noteId: 6490,
        studentId: 1018412866,
        studentName: "叶致远",
        courseId: "CTZQL-PGMNPGt152",
        week: 15,
        reason: "难受，预约了医生，与医院看病，望批准",
        time: "2023-04-28 18:28:37.0",
        status: 0,
        term: "2018年秋季学期",
        professorId: 5108649,
        name: null,
        refuseReason: null,
        type: null,
        changeTime: "2023-06-19 11:03:28.0",
        id: null,
        professorName: "赵子韬",
        courseName: "电子行业",
        attach: "http://powernod.com/u/7efe33a189577710"
      }
    };
  },
  methods: {
    jujue() {
      put('/leave-service/instructor/leaverecord/update', {
        "noteId": this.$route.query.noteId,
        "id": this.$route.query.professorId,
        "refuseReason": this.$route.query.reason,
        "status": "-1",
        "name": this.$route.query.professorName,
      }).then(() => {
        that.handleSearch()
      })
    },
    tongyi() {
      put('/leave-service/instructor/leaverecord/update', {
        "noteId": this.$route.query.noteId,
        "id": this.$route.query.professorId,
        "refuseReason": this.$route.query.reason,
        "status": "1",
        "name": this.$route.query.professorName,
      }).then(() => {
        that.handleSearch()
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.leave-details {
  margin: 20px;
}

.row {
  margin-bottom: 20px;
}

.label {
  font-weight: bold;
}

.value {
  margin-left: 10px;
}
</style>