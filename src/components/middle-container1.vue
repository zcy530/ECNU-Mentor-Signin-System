<template>
    <div class="wrapper">
        <div class="rotary-wrapepr">
            <rotary-switch v-model="someValue1" title="REV (Ambisonic 1)"></rotary-switch>
            <rotary-switch v-model="someValue2" title="ASW"></rotary-switch>
            <rotary-switch v-model="someValue3" title="APE"></rotary-switch>
        </div>
        <article class="two-lubo-btn">
            <my-lunbo-btn1 :list="['ORTF 3D', 'Main Array22']" v-model="luboBtnValue1" title="Main Array">
                <option value="option1">Immersive 5.1.4</option>
            </my-lunbo-btn1>
            <my-lunbo-btn1 :list="['Ambisonic 1', 'Main Array22']" v-model="luboBtnValue2" title="Rev Array" style="margin-left: 20px">
                <option value="option1">Immersive 5.1.4</option>
            </my-lunbo-btn1>
        </article>
        <article class="two-box">
            <div></div>
            <div></div>
        </article>
        <article class="three-box">
            <div v-for="i in 12" @click="$refs.modelRef.openModal()">
                <img src="../assets/img/bowen.png" alt="">
            </div>
        </article>
        <bottomControl></bottomControl>
        <my-model ref="modelRef">
            <img src="../assets/img/bowen.png" alt="">
        </my-model>
    </div>
</template>

<script>
import myModel from './my-model.vue'
import rotarySwitch from './rotary-switch.vue';
import bottomControl from './bottom-control.vue'
import myLunboBtn1 from './my-lunbo-btn1.vue';
export default {
    data() {
        return {
            someValue1: 0,
            someValue2: 0,
            someValue3: 0,
            luboBtnValue1: 1,
            luboBtnValue2: 1,
        }
    },
    components: {
        myModel,
        bottomControl,
        rotarySwitch,
        myLunboBtn1
    },
};
</script>

<style lang="scss" scope>
.wrapper {
    width: 100%;
    height: 94%;
}

.rotary-wrapepr {
    display: flex;
    justify-content: space-around;
    background-color: #353a3b;
}

.two-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 36%;
    margin-top: 5px;

    div {
        width: 49%;
        height: 100%;
        border: 1px solid #464946;
    }
}

.three-box {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 7%;
    margin: 20px 0;

    div {
        width: 7%;
        height: 100%;
        border: 1px solid #464946;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

.two-lubo-btn {
    display: flex;
    justify-content: space-around;
}
</style>
