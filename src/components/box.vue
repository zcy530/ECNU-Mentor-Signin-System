<template>
    <div class="box-wrapper">
        <div class="box-title">{{ title }}</div>
        <div class="box-container" :style="{ height: `${height}vh` }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'box',
    props: {
        title: {
            type: String,
            default: 'title1'
        },
        height: {
            type: [Number, String],
            default: '8'
        }
    }
};
</script>

<style lang="scss" scope>
.box-wrapper {
    border: 1px solid #696e6f;
    color: #fff;
    margin-bottom: 10px;

    .box-title {
        padding: 10px 11px;
        font-size: 13px;
        background-color: #484d4e;
        overflow: hidden;
    }

    .box-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>