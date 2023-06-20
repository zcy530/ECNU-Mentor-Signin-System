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
    <div class="row">
      <span class="label">已提交：</span>
      <span class="value">{{ leaveDetails.time }}</span>
    </div>
    <div class="row">
      <span class="label">已通过：</span>
      <span class="value">{{ leaveDetails.changeTime }}</span>
    </div>
    <div class="row">
      <span class="label">审批人：</span>
      <span class="value">{{ leaveDetails.professorName }}</span>
    </div>
    <div class="row">
      <span class="label">拒绝：</span>
      <span class="value">{{ leaveDetails.refuseReason }}</span>
    </div>
    <div class="row">
      <span class="label">同意：</span>
      <span class="value">{{ leaveDetails.name }}</span>
    </div>
  </div>
</template>

<style>
.leave-details {
  margin: 20px;
}

.row {
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
}

.value {
  margin-left: 10px;
}
</style>

<script>
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
  }
};
</script>
