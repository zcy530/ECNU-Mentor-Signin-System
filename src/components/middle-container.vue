<template>
    <div class="wrapper">
        <div class="wrapper-item">
            <div class="container1 container">
                <myTag style="margin-bottom: 5px">120Hz</myTag>
                <img src="../assets/img/地下音响.png" alt="">
                <myTag style="margin-top: 5px">+2.5dB</myTag>
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container2 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/蓝色音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container3 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/蓝色音响.png" alt="">
            </div>
            <div class="container4 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/蓝色音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container5 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
            <div class="container6 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
        </div>
        <div class="wrapper-item mt-10">
            <div class="container7 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
            <div class="container8 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container3 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
            <div class="container4">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container7 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
            <div class="container8 container">
                <switchMiniBtn></switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import switchMiniBtn from './switch-mini-btn.vue';
import myTag from './my-tag.vue';
export default {
    components: {
        switchMiniBtn,
        myTag
    }
};
</script>

<style lang="scss" scope>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 94%;
    .wrapper-item {
        display: flex;
        flex: 1;
        width: 100%;
        .container {
            width: 75px;
        }
        .container1 {
            margin-left: 57%;
        }
        .container2 {
            margin-left: 46%;
        }
        .container3 {
            margin-left: 19%;
        }
        .container4 {
            margin-left: 49%;
        }
        .container5 {
            margin-left: 34%;
        }
        .container6 {
            margin-left: 19%;
        }
        .container7 {
            margin-left: 34%;
        }
        .container8 {
            margin-left: 19%;
        }
    }
}
.mt-10 {
    margin-top: -40px;
}
</style>
