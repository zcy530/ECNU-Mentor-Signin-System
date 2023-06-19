<template>
    <div class="wrapper">
        <div class="title">用户信息</div>
        <div class="top">
            <!-- 用户头像 -->
            <img class="avatar" src="path_to_avatar_image" alt="User Avatar">
        </div>
        <div class="table">
            <!-- 用户信息表格 -->
            <table>
                <tr>
                    <td>姓名:</td>
                    <td>{{ fullName }}</td>
                </tr>
                <tr>
                    <td>性别:</td>
                    <td>{{ gender }}</td>
                </tr>
                <tr>
                    <td>手机号:</td>
                    <td>{{ phoneNumber }}</td>
                </tr>
                <tr>
                    <td>邮箱:</td>
                    <td>{{ email }}</td>
                </tr>
            </table>
            <div class="title">我管理的团体</div>
            <ul class="group-list">
                <li v-for="item in tuanList">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'App',
    data() {
        return {
            fullName: 'John Doe',      // 姓名
            gender: 'Male',            // 性别
            phoneNumber: '1234567890', // 手机号
            email: 'johndoe@example.com', // 邮箱
            tuanList: ['2020级1班', '2021级2班', '2021级3班']
        };
    },
    methods: {

    },
    mounted() {

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

  