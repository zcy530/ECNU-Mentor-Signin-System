<template>
    <div class="wrapper">
        <div class="wrapper-item">
            <div class="container1 container" style="position: relative; z-index: 40;">
                <myTag style="margin-bottom: 5px" @tag-click="handleClick1" @tag-wheel="handleWheel1($event)">{{ volume1
                }}Hz</myTag>
                <img src="../assets/img/地下音响.png" alt="">
                <myTag style="margin-top: 5px" @tag-click="handleClick2" @tag-wheel="handleWheel2($event)">+{{ volume2 }}dB
                </myTag>
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container2 container" style="position: relative; z-index: 30;">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S2" :M="sm.M2"
                    @left-toggle="($event) => { this.toggleValue('S2'); this.leftStatusFun({ key: 'S2', val: $event }) }"
                    @right-toggle="($event) => { this.toggleValue('M2') }">
                </switchMiniBtn>
                <img src="../assets/img/蓝色音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container3 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S3" :M="sm.M3"
                    @left-toggle="($event) => { this.toggleValue('S3'); this.leftStatusFun({ key: 'S3', val: $event }) }"
                    @right-toggle="($event) => { this.toggleValue('M3') }">
                </switchMiniBtn>
                <img src="../assets/img/蓝色音响.png" alt="">
            </div>
            <div class="container4 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S4" :M="sm.M4"
                    @left-toggle="($event) => { this.toggleValue('S4'); this.leftStatusFun({ key: 'S4', val: $event }) }"
                    @right-toggle="($event) => { this.toggleValue('M4') }">
                </switchMiniBtn>
                <img src="../assets/img/蓝色音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container5 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S5" :M="sm.M5"
                    @left-toggle="($event) => { this.toggleValue('S5'); this.leftStatusFun({ key: 'S5', val: $event }) }"
                    @right-toggle="($event) => { this.toggleValue('M5') }">
                </switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
            <div class="container6 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S6" :M="sm.M6"
                    @left-toggle="($event) => { this.toggleValue('S6'); this.leftStatusFun({ key: 'S6', val: $event }) }"
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
                    @left-toggle="($event) => { this.toggleValue('S7'); this.leftStatusFun({ key: 'S7', val: $event }) }"
                    @right-toggle="($event) => { this.toggleValue('M7') }">
                </switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
            <div class="container8 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S8" :M="sm.M8"
                    @left-toggle="($event) => { this.toggleValue('S8'); this.leftStatusFun({ key: 'S8', val: $event }) }"
                    @right-toggle="($event) => { this.toggleValue('M8') }">
                </switchMiniBtn>
                <img src="../assets/img/顶部音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container3 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S9" :M="sm.M9"
                    @left-toggle="($event) => { this.toggleValue('S9'); this.leftStatusFun({ key: 'S9', val: $event }) }"
                    @right-toggle="($event) => { this.toggleValue('M9') }">
                </switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
            <div class="container4 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S10" :M="sm.M10"
                    @left-toggle="($event) => { this.toggleValue('S10'); this.leftStatusFun({ key: 'S10', val: $event }) }"
                    @right-toggle="($event) => { this.toggleValue('M10') }">
                </switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
        </div>
        <div class="wrapper-item mt-10">
            <div class="container7 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S11" :M="sm.M11"
                    @left-toggle="($event) => { this.toggleValue('S11'); this.leftStatusFun({ key: 'S11', val: $event }) }"
                    @right-toggle="($event) => { this.toggleValue('M11') }">
                </switchMiniBtn>
                <img src="../assets/img/绿色音响.png" alt="">
            </div>
            <div class="container8 container">
                <switchMiniBtn :LeftStatus="leftStatusFather" :S="sm.S12" :M="sm.M12"
                    @left-toggle="($event) => { this.toggleValue('S12'); this.leftStatusFun({ key: 'S12', val: $event }) }"
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
import { eventBus } from '../main.js';
export default {
    data() {
        return {
            volume1: 120,
            volume2: 250,
            sm: {
                S1: false,
                S2: false,
                S3: false,
                S4: false,
                S5: false,
                S6: false,
                S7: false,
                S8: false,
                S9: false,
                S10: false,
                S11: false,
                S12: false,
                M1: false,
                M2: false,
                M3: false,
                M4: false,
                M5: false,
                M6: false,
                M7: false,
                M8: false,
                M9: false,
                M10: false,
                M11: false,
                M12: false,
            }
        }
    },
    components: {
        switchMiniBtn,
        myTag
    },
    computed: {
        ...mapState(['leftStatusFather'])
    },
    created() {
        const that = this
        this.initSm()
        eventBus.$on('sm_check', () => {
            that.initSm()
        })
    },
    methods: {
        ...mapMutations(['updateSmValue']),
        ...mapActions(['updateLeftStatusAction']),
        initSm() {
            const newState = JSON.parse(JSON.stringify(this.$store.state.sm));
            this.$nextTick(() => {
                Object.assign(this.sm, newState);
            });
        },
        leftStatusFun(value) {
            this.updateLeftStatusAction(value)
        },
        toggleValue(key) {
            this.updateSmValue({ key, value: !this.sm[key] })
        },
        handleWheel1(event) {
            const delta = Math.sign(event.deltaY); // 获取滚轮滚动的方向，1 表示向上滚动，-1 表示向下滚动

            // 根据滚动方向进行数值的增减
            if (delta === 1) {
                this.volume1 -= 10; // 每次向上滚动增加 1
            } else if (delta === -1) {
                this.volume1 += 10; // 每次向下滚动减少 1
            }
        },
        handleWheel2(event) {
            const delta = Math.sign(event.deltaY); // 获取滚轮滚动的方向，1 表示向上滚动，-1 表示向下滚动

            // 根据滚动方向进行数值的增减
            if (delta === 1) {
                this.volume2 -= 10; // 每次向上滚动增加 1
            } else if (delta === -1) {
                this.volume2 += 10; // 每次向下滚动减少 1
            }
        },
        handleClick1() {
            const now = Date.now(); // 获取当前时间戳
            const doubleClickThreshold = 300; // 定义双击的时间间隔阈值，单位为毫秒

            if (now - this.lastClickTime <= doubleClickThreshold) {
                // 双击事件逻辑
                this.showInputDialog1();
            }

            this.lastClickTime = now; // 更新上一次点击的时间戳
        },
        handleClick2() {
            console.log(1212);
            const now = Date.now(); // 获取当前时间戳
            const doubleClickThreshold = 300; // 定义双击的时间间隔阈值，单位为毫秒

            if (now - this.lastClickTime <= doubleClickThreshold) {
                // 双击事件逻辑
                this.showInputDialog2();
            }

            this.lastClickTime = now; // 更新上一次点击的时间戳
        },
        showInputDialog1() {

            const newVolume = prompt('请输入新的音量值'); // 弹出输入框，获取新的音量值
            if (newVolume !== null) {
                this.volume1 = parseInt(newVolume); // 更新 volume 的值
            }
        },
        showInputDialog2() {
            const newVolume = prompt('请输入新的音量值'); // 弹出输入框，获取新的音量值
            if (newVolume !== null) {
                this.volume2 = parseInt(newVolume); // 更新 volume 的值
            }
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
