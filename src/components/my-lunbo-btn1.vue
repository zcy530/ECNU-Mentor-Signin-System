<template>
    <div class="select-container">
        <div class="selected-option">
            <div class="title">{{ title }}</div>
            <div class="close" @click="colseBtn = !colseBtn">
                <img src="../assets/img/退出.png" alt="" v-if="colseBtn">
                <img src="../assets/img/打开.png" alt="" v-else>
            </div>
            <div style="flex: 0.5; margin: 0 40px; display: flex; justify-content: space-between; align-items: center">
                <img src="../assets/img/左(1).png" @click="() => { this.val = this.val - 1 }" alt="">
                <span style="margin: 0 20px; width: 75px; overflow: hidden;">{{ list[val] }}</span>
                <img src="../assets/img/右(1).png" @click="() => { this.val = this.val + 1 }" alt="">
            </div>
            <i class="arrow-icon" :class="{ 'arrow-up': isDropdownOpen, 'arrow-down': !isDropdownOpen }"
            @click="toggleDropdown"></i>
        </div>
        <div v-if="isDropdownOpen" class="dropdown">
            <slot></slot>
        </div>
    </div>
</template>
    
<script>
export default {
    props: ['list', 'title'],
    data() {
        return {
            val: 0,
            colseBtn: true,
            isDropdownOpen: false,
        };
    },
    mounted() {
        console.log(this.list);
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectOption(value) {
            this.selectedValue = value;
            this.isDropdownOpen = false;
        }
    }
};
</script>
    
<style lang="scss" scoped>
.select-container {
    position: relative;
    width: 25vw;
}

img {
    cursor: pointer;
}

.selected-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 0px;
    height: 25px;
    width: 25vw;
    border: 1px solid #525657;
    background-color: #282a2c;
    color: #9a9c9d;
    font-weight: 700;
    margin: 8px 0 5px 0;
    padding-right: 10px;

    .title {
        flex: 0.6;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 110%;
        background-color: #303234;
        font-weight: 700;
        color: #fff;
    }

    .close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        margin-left: 2px;
        background-color: #343839;

        img {
            width: 50%;
            height: 50%;
        }
    }
}

.arrow-icon {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #f0f2f4;
    transform: rotate(-180deg);
    cursor: pointer;
    transition: transform 0.3s ease;
}


.arrow-up {
    transform: rotate(-90deg);
    border-right: 5px solid #7394b4;
}

// .selected-option:hover {
//     border: 1px solid #647a93;
//     background-color: #424b55;
//     color: #6e95b6;
// }

.dropdown {
    position: absolute;
    top: 80%;
    left: 0;
    width: 32.95vw;
    color: #9a9c9d;
    max-height: 200px;
    z-index: 20;

    option {
        width: 89%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #525657;
        background-color: #3d3f41;
    }
}</style>
    