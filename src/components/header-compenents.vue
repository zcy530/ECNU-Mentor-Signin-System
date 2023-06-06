<template>
    <div class="header-wrapper">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="action">
            <ul>
                <li><img src="../assets/img/左.png" alt=""></li>
                <li><img src="../assets/img/右.png" alt=""></li>
                <li><img src="../assets/img/设置.png" alt=""></li>
                <li><img src="../assets/img/退出.png" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header-compenents'
};
</script>

<style lang="scss" scope>
.header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    height: 6vh;
    width: 100%;
    box-sizing: border-box;
    background: url('../assets/img/顶部loog区域背景.png');
    background-size: 100% 100%;
    .action {
        ul {
            display: flex;
            li {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25px;
                height: 25px;
                background-color: #323435;
                margin-left: 5px;
            }
        }
    }
}
</style>
