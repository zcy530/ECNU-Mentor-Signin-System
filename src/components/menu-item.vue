<template>
    <div class="menu-item">
        {{ title }}
    </div>
</template>

<script>
export default {
    name: 'App',
    props: ['title'],
    data() {
        return {
            // Your data properties here
        };
    },
    methods: {
        // Your methods here
    },
    mounted() {
        // Code to run when the component is mounted
    }
}
</script>

<style lang="scss" scoped>
.menu-item {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
}
</style>