<template>
    <div class="wrapper">
        <!-- this.$refs.modelRef.openModal() -->
        <myModel ref="modelRef">31231231231231321</myModel>
    </div>
</template>

<script>
import myModel from './my-model.vue'
export default {
    components: {
        myModel
    },
};
</script>

<style lang="scss" scope>
.wrapper {
    width: 100%;
    height: 94%;
}
</style>
