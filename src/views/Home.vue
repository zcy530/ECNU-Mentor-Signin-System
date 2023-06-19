<template>
    <a-layout id="components-layout-demo-top-side-2" style="height: 100%">
        <a-layout-header class="header">
            <headerNav></headerNav>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu mode="inline" :default-selected-keys="['1']" :default-open-keys="['1']"
                    :style="{ height: '100%', borderRight: 0 }">
                    <a-menu-item key="1" @click="$router.push('/Home/HomeUser')">
                        个人中心
                    </a-menu-item>
                    <a-menu-item key="2" @click="$router.push('/Home/qingjia')">
                        请假消息
                    </a-menu-item>
                    <a-menu-item key="3" @click="$router.push('/Home/Center')">
                        统计中心
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 20px">
                <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
import headerNav from '../components/headerNav.vue';

export default {
    components: {
        headerNav
    },
    data() {
        return {
            collapsed: false,
        };
    },
};
</script>
  
<style lang="scss" scoped>
.header {
    background-color: #fff;
}
</style>