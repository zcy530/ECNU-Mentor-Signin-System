<template>
  <div class="wrapper-header">
    <div class="title">ECNU签到系统-{{ title[0] }}</div>
    <div class="user-info">
      <a-icon type="user" />
      <span>{{ name }}</span>
      <span @click="layout"><a href="">退出登录</a></span>
    </div>
  </div>
</template>

<script>
import { getLocalStorage, delLocalStorage } from '@/utils/Obj'
export default {
  name: 'App',
  data() {
    return {
      name: '',
      title: ['辅导员端', '学生端'],
    };
  },
  methods: {
    layout() {
      delLocalStorage('token')
      delLocalStorage('instructorId')
      window.location.reload()
    }
  },
  mounted() {
    this.name = getLocalStorage('instructorId') || 'xxxxxxxxxx'
  }
}
</script>

<style lang="scss" scoped>
.wrapper-header {
  padding: 0 230px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    color: rgba(0, 20, 183, 1);
    font-size: 22px;
    text-align: left;
    font-family: OPPOSans-bold;
  }

  .user-info {
    span {
      left: 1146px;
      top: 19px;
      width: 60px;
      height: 36px;
      color: rgba(16, 16, 16, 1);
      font-size: 16px;
      text-align: left;
      font-family: SourceHanSansSC-regular;
      margin-left: 10px;
    }
  }
}
</style>