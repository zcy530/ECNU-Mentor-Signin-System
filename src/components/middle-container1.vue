<template>
    <div class="wrapper">
        <!-- this.$refs.modelRef.openModal() -->

        <bottomControl></bottomControl>
    </div>
</template>

<script>
import myModel from './my-model.vue'
import bottomControl from './bottom-control.vue'
export default {
    components: {
        myModel,
        bottomControl
    },
};
</script>

<style lang="scss" scope>
.wrapper {
    width: 100%;
    height: 94%;
}
</style>
