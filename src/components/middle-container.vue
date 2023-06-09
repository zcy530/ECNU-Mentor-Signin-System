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
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S2" :M="sm.M2"
                    @left-toggle="($event) => { this.toggleValue('S2'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M2') }">
                </switchMiniBtn>
                <img src="../assets/img/蓝色音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container3 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S3" :M="sm.M3"
                    @left-toggle="($event) => { this.toggleValue('S3'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M3') }">
                </switchMiniBtn>
                <img src="../assets/img/蓝色音响.png" alt="">
            </div>
            <div class="container4 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S4" :M="sm.M4"
                    @left-toggle="($event) => { this.toggleValue('S4'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M4') }">
                </switchMiniBtn>
                <img src="../assets/img/蓝色音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container5 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S5" :M="sm.M5"
                    @left-toggle="($event) => { this.toggleValue('S5'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M5') }">
                </switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
            <div class="container6 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S6" :M="sm.M6"
                    @left-toggle="($event) => { this.toggleValue('S6'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M6') }">
                </switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
        </div>
        <div class="wrapper-item mt-10">
            <div class="container7 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S7" :M="sm.M7"
                    @left-toggle="($event) => { this.toggleValue('S7'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M7') }">
                </switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
            <div class="container8 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S8" :M="sm.M8"
                    @left-toggle="($event) => { this.toggleValue('S8'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M8') }">
                </switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container3 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S9" :M="sm.M9"
                    @left-toggle="($event) => { this.toggleValue('S9'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M9') }">
                </switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
            <div class="container4">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S10" :M="sm.M10"
                    @left-toggle="($event) => { this.toggleValue('S10'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M10') }">
                </switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container7 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S11" :M="sm.M11"
                    @left-toggle="($event) => { this.toggleValue('S11'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M11') }">
                </switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
            <div class="container8 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S12" :M="sm.M12"
                    @left-toggle="($event) => { this.toggleValue('S12'); this.leftStatusFun($event) }"
                    @right-toggle="($event) => { this.toggleValue('M12') }">
                </switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import switchMiniBtn from './switch-mini-btn.vue';
import myTag from './my-tag.vue';
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    components: {
        switchMiniBtn,
        myTag
    },
    computed: {
        ...mapState(['sm', 'leftStatusFather'])
    },
    methods: {
        ...mapMutations(['updateSmValue']),
        ...mapActions(['updateLeftStatusAction']),
        leftStatusFun(value) {
            this.updateLeftStatusAction(value)
        },
        toggleValue(key) {
            this.updateSmValue({ key, value: !this.sm[key] })
        },
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
