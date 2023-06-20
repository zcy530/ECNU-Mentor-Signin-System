<template>
  <div class="wrapper">
    <div class="title">用户信息</div>
    <div class="top">
      <!-- 用户头像 -->
      <img class="avatar" :src="path_to_avatar_image" alt="User Avatar">
    </div>
    <div class="table">
      <!-- 用户信息表格 -->
      <table>
        <tr>
          <td>姓名:</td>
          <td>{{ fullName }}</td>
        </tr>
        <tr>
          <td>密码:</td>
          <td>{{ gender }}</td>
        </tr>
        <!-- <tr>
          <td>手机号:</td>
          <td>{{ phoneNumber }}</td>
        </tr>
        <tr>
          <td>邮箱:</td>
          <td>{{ email }}</td>
        </tr> -->
      </table>
      <div class="title">我管理的团体</div>
      <ul class="group-list">
        <li v-for="item in tuanList"><span style="color: #879aff">id:</span> {{ item.instructor_id }} <span style="color: #879aff">部门:</span> {{ item.department }} <span style="color: #879aff">学院:</span> {{ item.major }} <span style="color: #879aff">团id:</span> {{ item.group_id }} : {{ item.major }} <span>年份:</span> {{ item.year }}</li>
      </ul>
    </div>
  </div>
</template>
  
<script>
import { getLocalStorage } from '@/utils/Obj'
import { get } from '../utils/request'

export default {
  name: 'App',
  data() {
    return {
      instructorId: '',
      fullName: 'John Doe',      // 姓名
      gender: 'Male',            // 性别
      phoneNumber: '1234567890', // 手机号
      email: 'johndoe@example.com', // 邮箱
      tuanList: ['2020级1班', '2021级2班', '2021级3班'],
      path_to_avatar_image: ''
    };
  },
  methods: {

  },
  mounted() {
    this.instructorId = getLocalStorage('instructorId') || '5101603'
    get('office-service/instructor/info', { instructorId: this.instructorId }).then((res) => {
      this.instructorId = res.data.instructor_id
      this.fullName = res.data.name
      this.gender = res.data.password
      this.path_to_avatar_image = res.data.portrait

    })
    get(`/office-service/group/list/${this.instructorId}`).then((res) => {
      this.tuanList = res.data
    })
  }
}
</script>
  
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.table {
  margin-top: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

table tr:last-child td {
  border-bottom: none;
}

table td:first-child {
  font-weight: bold;
  width: 120px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 50px;
}

.group-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

.group-list li {
  margin-bottom: 5px;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
}
</style>

  