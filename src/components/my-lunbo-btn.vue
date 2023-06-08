<template>
    <div class="select-container">
        <div class="selected-option">
            <div class="close" @click="colseBtn = !colseBtn">
                <img src="../assets/img/退出.png" alt="" v-if="colseBtn">
                <img src="../assets/img/打开.png" alt="" v-else>
            </div>
            <img src="../assets/img/左(1).png" @click="() => { this.val = this.val - 1 }" alt="">
            <span>{{ list[val] }}</span>
            <img src="../assets/img/右(1).png" @click="() => { this.val = this.val + 1 }" alt="">
            <i class="arrow-icon" :class="{ 'arrow-up': isDropdownOpen, 'arrow-down': !isDropdownOpen }" @click="toggleDropdown"></i>
        </div>
        <div v-if="isDropdownOpen" class="dropdown">
            <slot></slot>
        </div>
    </div>
</template>
    
<script>
export default {
    props: ['list'],
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
    width: 17.4vw;
}

img {
    cursor: pointer;
}

.selected-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 20px 2px 2px;
    height: 34px;
    border: 1px solid #525657;
    background-color: #404243;
    color: #9a9c9d;
    font-weight: 700;

    .close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 29px;
        height: 29px;
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
  width: 18.2vw;
  color: #9a9c9d;
  max-height: 200px;
  option {
    width: 89%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #525657;
    background-color: #3d3f41;
  }
}
</style>
    